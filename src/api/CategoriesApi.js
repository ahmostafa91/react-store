import Api from './Api';

export default class Categories extends Api {


    static getAllCategories() {
        return Api.getFetchUrl(this.url).then(res => res.json())
    }
}

Categories.url = 'http://test-api.edfa3ly.io/category';