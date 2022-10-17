import { appConstants } from '../constants';

export const appActions = {
  app
}

function app(value) {
  return {
    type: appConstants.SUCCESS,
    value
  }
}