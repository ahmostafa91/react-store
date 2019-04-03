import Api from './Api';

export default class Products extends Api {


    static getAllProducts() {
        return super.get('/product').then(res => res.json())
    }
}
