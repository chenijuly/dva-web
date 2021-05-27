import fetch from 'dva/fetch';
import { Modal } from 'antd'

function parseJSON(response) {
  return response.json();
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  if (response.status === 401 ) {
    Modal.warning({
      title: '会话过期',
      content: '会话已过期，请重新登录',
      onOk () {
        window.location.href = `${process.env.FRONTEND_WEB}/login?redirectUrl=${window.location.href}`
      },
    })
  }


  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default function request(url, options) {
  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON)
    .then(data => ({ data }))
    .catch(err => ({ err }));
}
