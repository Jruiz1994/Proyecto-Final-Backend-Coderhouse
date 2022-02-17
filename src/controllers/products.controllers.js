import DaoFactory from '../services/dao.factory.js'
import { type } from '../utils/minimist.util.js';
let dao = new DaoFactory(type);
import logger from '../utils/logger.util.js';

//GET ALL
export async function getAll(req, res) {
    try {
        const data = await dao.getAll();
        res.status(200).send(data)
    } catch (error) {
        logger.error(error);
    }
}

//GET BY ID 
export async function getById(req, res) {
    const { id } = req.params;
    const data = await dao.getById(id);
    if (data) {
        res.status(200).send(data)
    } else {
        res.send('El producto que se intenta ver no existe')
    }
}

//GET BY CATEGORY
export async function getByCategory(req, res) {
    const { category } = req.params;
    const data = await dao.getByCategory(category);
    if (data) {
        res.status(200).send(data)
    } else {
        res.send('La categoria que se intenta ver no contiene productos')
    }
}

//POST
export async function saveProduct(req, res) {
    try {
        const { body } = req;
        await dao.saveItem(body);
        res.status(200).send(body)
    } catch (error) {
        logger.error(error);
    }
}

//DELETE
export async function deleteProduct(req, res) {
    const { id } = req.params;
    const borrado = await dao.deleteById(id);
    if (borrado) {
        res.status(200).send(`El producto con id ${id} fue eliminado`);
    } else {
        res.send('El producto que se intenta borrar no existe')
    }
}

//PUT
export async function updateProduct(req, res) {
    const { body, params: { id } } = req;
    const anterior = await dao.getById(id);
    const nuevo = await dao.updateById(id, body);
    if (anterior) {
        res.send({ anterior, nuevo });
    } else {
        res.send('El producto que se intenta actualizar no existe')
    }
}