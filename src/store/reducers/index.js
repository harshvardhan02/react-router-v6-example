import { combineReducers } from 'redux';

import { app } from './app.reducer';
import { getGroupChat, getMessageById } from './chat.reducer';

const rootReducer = combineReducers({
  appReducer: app,
  groupChat: getGroupChat,
  messages: getMessageById
})

export default rootReducer;