// @flow
import fetch from 'cross-fetch';
import {checkStatus, parseJSON} from './responseHandler.js';

const DEFAULT_HEADER = {
  'content-type': 'application/json',
};

export default (endpoint, method, body) =>
  fetch(`${endpoint}`, {
    headers: DEFAULT_HEADER,
    method,
    body: body || null,
  })
    .then(checkStatus)
    .then(parseJSON)
    .catch((err) => {
      return {
        status: false,
        message: 'Ooops something went wrong',
        error: err,
      };
    });
