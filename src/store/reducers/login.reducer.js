import { loginConstants } from '../constants';

const initialState = {
  loading: false,
  data: {}
}

export function login(state = initialState, action) {
  switch (action.type) {
    case loginConstants.POST_LOGIN_REQUEST:
      return {
        ...state,
        loading: true
      }
    case loginConstants.POST_LOGIN_SUCCESS:
      localStorage.setItem('token', action.successAction.data.token)
      localStorage.setItem('userId', action.successAction.data.id)
      return {
        ...state,
        loading: false,
        data: action.successAction.data
      }
    case loginConstants.POST_LOGIN_FAILURE:
      return {
        ...state,
        loading: false
      }
    default:
      return state
  }
}