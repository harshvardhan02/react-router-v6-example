import { appConstants } from '../constants';

const initialState = {
  name: 'Chat App',
  value: true,
  isLoggedIn: false,
  id: "634c67b46ef9a13cd7556ae8"
}

export function app(state = initialState, action) {
  switch (action.type) {
    case appConstants.SUCCESS:
      return {
        ...state,
        name: 'Baller Academy',
        value: action.value
      }
    case appConstants.ERROR:
      return {
        ...state,
        name: 'Baller API'
      }
    default:
      return state;
  }
}