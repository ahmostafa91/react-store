import Api from './Api';

export default class Categories extends Api {

    url = 'http://test-api.edfa3ly.io/category';

    static getAllCategories() {
        return Api.getFetchUrl(this.url).then((response) => {response.json()})
        .then((data) => {return data})
    }
}