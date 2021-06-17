import { Request, Response, NextFunction, Router } from 'express'
import { Connection } from 'typeorm'
import express from 'express'

import { connection } from './db/conn'
import router from './user/routes'

connection
.then( (conn: Connection): void => {
    console.log('Conectado ao banco com sucesso!')
})
.catch( (error: Error): void => console.log(error));

const routers: Array<Router> = [router, ]

const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(routers)
app.listen(8080, (): void => { console.log('Servidor disponível em http://localhost:8080') })
