import SingletonDaoFS from './singleton.fs.js';
import SingletonDaoMongo from './singleton.dao.mongo.js';
import { mongoConnect } from '../db.js';
import { productsModel } from '../models/products.model.js';
const productsFile = './src/data/items.json';


class DaoFactory {

    constructor(type) {
        if (type == 'fs') {
            return new SingletonDaoFS(productsFile)
        } else if (type == 'mongo') {
            mongoConnect()
            return new SingletonDaoMongo(productsModel)
        }
    }
}

export default DaoFactory