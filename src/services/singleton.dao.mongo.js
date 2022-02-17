import logger from '../utils/logger.util.js'

class SingletonDaoMongo {
    constructor(model) {
        console.log(model);

        this.model = model;
        if (SingletonDaoMongo.instance) return SingletonDaoMongo.instance
    }

    async getAll() {
        try {
            const respuesta = await this.model.find()
            return respuesta
        } catch (error) {
            logger.error(error);
        }
    }

    async getById(id) {
        try {
            const respuesta = await this.model.findOne({ _id: id })
            return respuesta
        } catch (error) {
            logger.error(error);
        }
    }

    async getByCategory(category) {
        try {
            const respuesta = await this.model.find({ category: category })
            return respuesta
        } catch (error) {
            logger.error(error);
        }
    }

    async deleteById(id) {
        try {
            const respuesta = await this.model.deleteOne({ _id: id })
            return respuesta
        } catch (error) {
            logger.error(error);
        }
    }

    async saveItem(body) {
        try {
            const respuesta = await this.model.create(body)
            return respuesta
        } catch (error) {
            logger.error(error);
        }
    }

    async updateById(id, body) {
        try {
            const respuesta = await this.model.updateOne({ _id: id }, {...body })
            return respuesta
        } catch (error) {
            logger.error(error);
        }
    }
}

export default SingletonDaoMongo;