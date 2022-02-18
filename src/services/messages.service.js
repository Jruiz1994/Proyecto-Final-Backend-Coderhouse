import Services from './services.js'
import logger from '../utils/logger.util.js'

class MessagesService extends Services {
    constructor(model) { super(model) }

    async getAllMessages() {
        const respuesta = await this.model.find({ type: 'public' })
        return respuesta
    }

    async getByEmail(userEmail) {
        try {
            const respuesta = await this.model.find({ userEmail: userEmail, type: 'private' })
            return respuesta
        } catch (error) {
            logger.error(error);
        }
    }

    async saveMessage(userEmail, type, messageText) {
        try {
            const respuesta = await this.model.create({ userEmail, type, messageText })
            return respuesta
        } catch (error) {
            logger.error(error);
        }
    }
}


export default MessagesService;