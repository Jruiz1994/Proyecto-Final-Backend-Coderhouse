import MessagesService from '../services/messages.service.js'
import { messagesModel } from '../models/messages.model.js';
const messagesService = new MessagesService(messagesModel);
import logger from '../utils/logger.util.js';

//GET ALL
export async function getAll(req, res) {
    try {
        const data = await messagesService.getAllMessages();
        res.status(200).send(data)
    } catch (error) {
        logger.error(error);
    }
}

//GET BY EMAIL
export async function getByEmail(req, res) {
    const { userEmail } = req.params;
    const data = await messagesService.getByEmail(userEmail);
    if (data) {
        res.status(200).send(data)
    } else {
        res.send('No hay mensajes para el usuario seleccionado')
    }
}

//POST
export async function postMessage(req, res) {
    if (req.user) {
        const userEmail = req.user.email
        try {
            const { type } = req.body;
            const { messageText } = req.body;
            const message = await messagesService.saveMessage(userEmail, type, messageText);
            res.status(200).send(message)
        } catch (error) {
            logger.error(error);
        }
    } else {
        res.status(401).send('No estas logueado')
    }
}