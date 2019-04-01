import Api from './Api';

export default class Products extends Api {


    static getAllCategories() {
        return Api.getFetchUrl(this.url).then(res => res.json())
    }
}

Products.url = 'http://test-api.edfa3ly.io/product';