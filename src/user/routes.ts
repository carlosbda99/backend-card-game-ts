import { Request, Response, NextFunction, Router } from 'express'
import { connection } from '../db/conn'
import { User } from './entity'
import express from 'express'

const router: Router = express.Router()

router.post('/user', async (req: Request, res: Response, next: NextFunction) => {
    const user: User = new User
    user.username = req.body.username
    user.first_name = req.body.first_name
    user.last_name = req.body.last_name
    user.email = req.body.email;
    (await connection).manager.save(user)
    .then( () => {
        res.send('OK')
    })
    .catch( err => {
        console.log(err)
        res.status(500).send("Erro")
    })
})

router.get('/user', async (req: Request, res: Response, next: NextFunction) => {
    (await connection).manager.find(User, {first_name: "Carlos"})
    .then( usuario => {
        console.log( usuario )
        res.send("Sucesso!")
    })
    .catch( err => {
        res.status(500).send("Erro")
    })
})

router.delete('/user', async (req: Request, res: Response, next: NextFunction) => {
    (await connection).manager.delete(User, {username: req.body.username})
    .then( () => {
        res.send("Sucesso!")
    })
    .catch( err => {
        res.status(500).send("Erro")
    })
})

export default router