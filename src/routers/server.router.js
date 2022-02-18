import express from 'express'
import { serverControllers } from '../controllers/index.js'

const serverRouter = new express.Router()

//GET INFO
serverRouter.get('/', serverControllers.getInfo)

export default serverRouter