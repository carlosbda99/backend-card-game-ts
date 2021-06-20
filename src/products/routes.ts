import { Router } from 'express'
import { findProduct, insertProduct, deleteProduct } from './controller'
import express from 'express'

const productRouter: Router = express.Router()

productRouter.post('/products', insertProduct)

productRouter.get('/products', findProduct)

productRouter.delete('/products', deleteProduct)

export default productRouter