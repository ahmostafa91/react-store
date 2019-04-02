export default class Api {

    static get(relativePath) {
        return fetch(this.BASE_URL + relativePath);
    }
}

Api.BASE_URL = 'http://test-api.edfa3ly.io';