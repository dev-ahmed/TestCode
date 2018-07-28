import { MAGENTO_API_URL, MAGENTO_API_TOKEN } from '../constants';
// import I18n from '@locales/i18n';

// TODO: Replace Token auth with OAuth for better security.

export default class MagentoAPI {
  constructor() {
    this._request = this._request.bind(this);
  }

  // static async _request(method, url, data) {
  //   const defaultHeaders = {
  //     'Content-Type': 'application/json',
  //     Authorization: `Bearer ${MAGENTO_API_TOKEN}`,
  //   };

  //   try {
  //     const requestUrl = `${MAGENTO_API_URL}/V1${url}`;

  //     const response = await fetch(requestUrl, {
  //       method,
  //       body: data, // data can be formData or JSON.stringify()
  //       headers: defaultHeaders,
  //     });
  //     console.log('====================================');
  //     console.log(response.json());
  //     console.log('====================================');
  //     // return response.json();
  //   } catch (error) {}
  // }

  static async _request(method, url, data, headers) {
    let response = null;
    const defaultHeaders = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${MAGENTO_API_TOKEN}`,
    };

    const endpoint = url.startsWith('/') ? url : `/${url}`;

    try {
      response = await fetch(`${MAGENTO_API_URL}/V1${endpoint}`, {
        method,
        credentials: 'include',
        body: data, // data can be formData or JSON.stringify()
        headers: Object.assign({}, defaultHeaders, headers),
      });
    } catch (e) {
      // malformed or network error.
      return { status: 503, ok: false, message: e.message };
    }

    const json = await response.json();

    // process response.
    if (response.ok) return { status: response.status, ok: response.ok, json };
    return {
      status: response.status,
      ok: response.ok,
      message: json.message,
      fullMessage: json,
    };
  }

  /** params: endpoint, headers (optional) */
  static async get(endpoint, headers) {
    return await this._request('GET', endpoint, null, headers);
  }
  /** params: endpoint, data, headers (optional) */
  static async put(endpoint, data, headers) {
    return await this._request('PUT', endpoint, data, headers);
  }
  /** params: endpoint, data, headers (optional) */
  static async post(endpoint, data, headers) {
    return await this._request('POST', endpoint, data, headers);
  }
  /** params: endpoint, headers (optional) */
  static async delete(endpoint, headers) {
    return await this._request('DELETE', endpoint, null, headers);
  }
  /** params: endpoint, headers (optional) */
  static async options(endpoint, headers) {
    return await this._request('OPTIONS', endpoint, null, headers);
  }
}
