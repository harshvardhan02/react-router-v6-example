import { loginConstants } from '../constants';
import * as commonAction from './commonActions';
import { commonService } from '../services/common.service';

export const loginAction = {
  login
}

function login(apiName, eventData) {
  return dispatch => {
    dispatch(commonAction.request(loginConstants.POST_LOGIN_REQUEST, eventData));
    commonService.postDataWithToken(apiName, eventData).then(
      login => {
        dispatch(commonAction.success(loginConstants.POST_LOGIN_SUCCESS, login));
      },
      error => {
        dispatch(commonAction.failure(loginConstants.POST_LOGIN_FAILURE, error))
      }
    )
  }
}