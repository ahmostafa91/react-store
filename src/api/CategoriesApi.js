import Api from './Api';

export default class Categories extends Api {


    static getAllCategories() {
        return super.get('/category').then(res => res.json())
    }
}
