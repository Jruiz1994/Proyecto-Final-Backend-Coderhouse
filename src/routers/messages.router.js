import express from 'express'
import { messagesControllers } from '../controllers/index.js'

const messagesRouter = new express.Router()

//GET ALL
messagesRouter.get('/', messagesControllers.getAll)
    .get('/user/:userEmail', messagesControllers.getByEmail)
    .post('/', messagesControllers.postMessage)

export default messagesRouter