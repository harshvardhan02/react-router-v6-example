import { chatConstants } from '../constants';
import * as commonAction from './commonActions';
import { commonService } from '../services/common.service';

export const chatAction = {
  getGroupChat,
  getMessageById,
  createMessage,
  getChatById
}

function getGroupChat(apiName, eventData) {
  return dispatch => {
    dispatch(commonAction.request(chatConstants.GET_GROUP_CHAT_REQUEST, eventData));
    commonService.getDataWithToken(apiName, eventData).then(
      chat => {
        dispatch(commonAction.success(chatConstants.GET_GROUP_CHAT_SUCCESS, chat));
      },
      error => {
        dispatch(commonAction.failure(chatConstants.GET_GROUP_CHAT_FAILED, error))
      }
    )
  }
}

function getMessageById(apiName, eventData) {
  return dispatch => {
    dispatch(commonAction.request(chatConstants.GET_MESSAGE_BY_ID_REQUEST, eventData));
    commonService.getMessageById(apiName, eventData).then(
      message => {
        dispatch(commonAction.success(chatConstants.GET_MESSAGE_BY_ID_SUCCESS, message));
      },
      error => {
        dispatch(commonAction.failure(chatConstants.GET_MESSAGE_BY_ID_FAILED, error))
      }
    )
  }
}

function createMessage(apiName, eventData) {
  return dispatch => {
    dispatch(commonAction.request(chatConstants.CREATE_MESSAGE_REQUEST, eventData));
    commonService.postDataWithToken(apiName, eventData).then(
      message => {
        dispatch(commonAction.success(chatConstants.CREATE_MESSAGE_SUCCESS, message));
      },
      error => {
        dispatch(commonAction.failure(chatConstants.CREATE_MESSAGE_FAILED, error))
      }
    )
  }
}

function getChatById(apiName, eventData) {
  return dispatch => {
    dispatch(commonAction.request(chatConstants.GET_CHAT_BY_ID_REQUEST, eventData));
    commonService.getChatById(apiName, eventData).then(
      message => {
        dispatch(commonAction.success(chatConstants.GET_CHAT_BY_ID_SUCCESS, message));
      },
      error => {
        dispatch(commonAction.failure(chatConstants.GET_CHAT_BY_ID_FAILED, error))
      }
    )
  }
}