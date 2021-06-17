import express from 'express'
import { createConnection } from 'typeorm'



const connection = createConnection().then(connection => {
    console.log('conectado', connection)
}).catch(error => console.log(error));
const app = express()

app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res, next) => {
    res.send('Hello world')
})

app.listen(8080, () => { console.log('Servidor disponível em http://localhost:8080')})
