import { Router } from 'express'
import { Connection } from 'typeorm'
import express from 'express'
import bodyParser from 'body-parser'

import { connection } from './db/conn'
import userRouter from './user/routes'
import productRouter from './products/routes'

connection
.then( (conn: Connection): void => {
    console.log('Conectado ao banco com sucesso!')
})
.catch( (error: Error): void => console.log(error));

const routers: Array<Router> = [userRouter, productRouter]

const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(routers)
app.listen(8080, (): void => { console.log('Servidor disponível em http://localhost:8080') })
