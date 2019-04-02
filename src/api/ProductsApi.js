import Api from './Api';

export default class Products extends Api {


    static getAllCategories() {
        return super.get('/product').then(res => res.json())
    }
}
