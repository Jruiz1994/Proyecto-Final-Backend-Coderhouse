import express from 'express'
import { productsControllers } from '../controllers/index.js'

const productsRouter = new express.Router()

//GET ALL
productsRouter.get('/', productsControllers.getAll)
    .get('/:id', productsControllers.getById)
    .get('/cat/:category', productsControllers.getByCategory)
    .post('/', productsControllers.saveProduct)
    .delete('/:id', productsControllers.deleteProduct)
    .put('/:id', productsControllers.updateProduct)


export default productsRouter