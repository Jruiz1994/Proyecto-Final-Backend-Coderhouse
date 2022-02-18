import logger from '../utils/logger.util.js';
import { serverData } from '../index.js';

//GET INFO
export function getInfo(req, res) {
    try {
        res.status(200).send(serverData)
    } catch (error) {
        logger.error(error);
    }
}