import { chatConstants } from '../constants';

const initialState = {
  groups: [],
  loading: false,
  messages: [],
  chatByIdData: {}
}

export function getGroupChat(state = initialState, action) {
  switch (action.type) {
    case chatConstants.GET_GROUP_CHAT_REQUEST:
      return {
        ...state,
        loading: true
      }
    case chatConstants.GET_GROUP_CHAT_SUCCESS:
      return {
        ...state,
        loading: false,
        groups: action.successAction.data
      }
    case chatConstants.GET_GROUP_CHAT_FAILED:
      return {
        ...state,
        loading: false
      }
    default:
      return state
  }
}

export function getMessageById(state = initialState, action) {
  switch (action.type) {
    case chatConstants.GET_MESSAGE_BY_ID_REQUEST:
      return {
        ...state,
        loading: true
      }
    case chatConstants.GET_MESSAGE_BY_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        messages: action.successAction.data
      }
    case chatConstants.GET_MESSAGE_BY_ID_FAILED:
      return {
        ...state,
        loading: false
      }
    default:
      return state
  }
}

export function createMessage(state = initialState, action) {
  switch (action.type) {
    case chatConstants.CREATE_MESSAGE_REQUEST:
      return {
        ...state,
        loading: true
      }
    case chatConstants.CREATE_MESSAGE_SUCCESS:
      return {
        ...state,
        loading: false,
        // messages: action.successAction.data
      }
    case chatConstants.CREATE_MESSAGE_FAILED:
      return {
        ...state,
        loading: false
      }
    default:
      return state
  }
}

export function getChatById(state = initialState, action) {
  switch (action.type) {
    case chatConstants.GET_CHAT_BY_ID_REQUEST:
      return {
        ...state,
        loading: true
      }
    case chatConstants.GET_CHAT_BY_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        chatByIdData: action.successAction.data
      }
    case chatConstants.GET_CHAT_BY_ID_FAILED:
      return {
        ...state,
        loading: false
      }
    default:
      return state
  }
}