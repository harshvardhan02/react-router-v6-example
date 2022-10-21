import { combineReducers } from 'redux';

import { app } from './app.reducer';
import { getGroupChat, getMessageById, createMessage, getChatById } from './chat.reducer';
import { login } from './login.reducer'

const rootReducer = combineReducers({
  appReducer: app,
  groupChat: getGroupChat,
  messages: getMessageById,
  chat: createMessage,
  login: login,
  chatById: getChatById
})

export default rootReducer;