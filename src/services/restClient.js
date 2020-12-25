import fetch from 'node-fetch';
import {get, isEmpty } from 'lodash';
import urljoin from 'url-join';
import config from '../config/config';

const parseReponse = async response => {
    console.log('parseResponse', response)
    try {
        return await response.json();
    } catch (ex) {
        console.log('Could not parse as json');
    }

    try {
        return await response.text();
    } catch (ex) {
        console.log('Could not parse as text');
    }
    return null;
};

class RestClient {
    constructor(props) {}

    setExceptionHandler(exceptionHandler) {
        this.exceptionHandler = exceptionHandler;
    }

    createHeaders(token) {

        let headers = {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            mode: 'no-cors'
        };

        return headers;
    }

    getUrl(path) {
        console.log(path);
        console.log(config.APPS_DOMAIN);
        const url = urljoin(config.APPS_DOMAIN, path);
        console.log('url', url)
        return url;
    }

    async asyncGet(path, token) {
        console.log('asyncGet')
        try {
            const response = await fetch(this.getUrl(path), {
                headers: this.createHeaders(token),
            });

            const data = await parseReponse(response);
            if (response.status === 401 || get(data, 'error.code') === 401) {
                this.exceptionHandler && this.exceptionHandler();
            }

            const hasError = !response.ok || !isEmpty(get(data, 'error'));
            return {
                hasError,
                data,
            };
        } catch (ex) {
            return {
                hasError: true,
                data: ex,
            };
        }
    }

    async asyncPost(path, data, token) {
        console.log(path, data)
        try {
            const response = await fetch(this.getUrl(path), {
                method: 'POST',
                headers: this.createHeaders(token),
                body: JSON.stringify(data),
            });

            const resData = await parseReponse(response);
            if (response.status === 401 || get(resData, 'error.code') === 401) {
                this.exceptionHandler && this.exceptionHandler();
            }
            const hasError = !response.ok || !isEmpty(get(resData, 'error'));
            return {
                hasError,
                data: resData,
            };
        } catch (ex) {
            console.log(ex);
            return {
                hasError: true,
                data: ex,
            };
        }
    }

    async asyncPut(path, data) {
        try {
            const response = await fetch(this.getUrl(path), {
                method: 'PUT',
                headers: this.createHeaders(),
                body: JSON.stringify(data),
            });

            const resData = await parseReponse(response);
            if (response.status === 401 || get(resData, 'error.code') === 401) {
                this.exceptionHandler && this.exceptionHandler();
            }
            const hasError = !response.ok || !isEmpty(get(resData, 'error'));
            return {
                hasError,
                data: resData,
            };
        } catch (ex) {
            console.log(ex);
            return {
                hasError: true,
                data: ex,
            };
        }
    }

    async asyncDelete(path, data, options) {
        try {
            const response = await fetch(this.getUrl(path, options), {
                headers: this.createHeaders(),
                body: JSON.stringify(data),
                method: 'DELETE',
            });

            const res = await parseReponse(response);
            if (response.status === 401 || get(res, 'error.code') === 401) {
                this.exceptionHandler && this.exceptionHandler();
            }

            return {
                hasError: !response.ok,
                data: res,
            };
        } catch (ex) {
            console.log(ex);
            return {
                hasError: true,
                data: ex,
            };
        }
    }

}

export default new RestClient();