import { Request, Response, NextFunction } from 'express'
import { connection } from '../db/conn'
import { User } from './entity'

async function findOne(username: string, res: Response) {
    (await connection).manager.find(User, { username })
        .then( user => {
            if (user.length === 0) {
                res.json({
                    msg: "OK",
                    users: "Usuário não encontrado"
                })
            } else {
                res.json({
                    msg: "OK",
                    user
                })
            }
        })
        .catch( err => {
            res.status(500).json({
                erro: err
            })
        })
}

async function findAll(res: Response) {
    (await connection).manager.find(User)
        .then( user => {
            if (user.length === 0) {
                res.json({
                    msg: "OK",
                    users: "Nenhum usuário encontrado"
                })
            } else {
                res.json({
                    msg: "OK",
                    user
                })
            }
        })
        .catch( err => {
            res.status(500).json({
                erro: err
            })
        })
}

async function insertOne(req: Request, res: Response) {
    const user: User = new User
    user.username = req.body.username
    user.first_name = req.body.first_name
    user.last_name = req.body.last_name
    user.email = req.body.email;
    (await connection).manager.save(user)
    .then( (user) => {
        res.send({
            msg: "OK",
            user
        })
    })
    .catch( err => {
        console.log(err)
        res.status(500).json({
            erro: err
        })
    })
}

function findUser (req: Request, res: Response, next: NextFunction) {
    if (req.body.username) {
        findOne(req.body.username, res)
    }
    else {
        findAll(res)
    }
}

async function insertUser(req: Request, res: Response, next: NextFunction) {
    if (req.body.username && req.body.first_name) {
        const user: User = new User
        user.username = req.body.username
        user.first_name = req.body.first_name
        user.last_name = req.body.last_name
        user.email = req.body.email;
        (await connection).manager.save(user)
        .then( (user) => {
            res.json({
                msg: "OK",
                user
            })
        })
        .catch( err => {
            res.status(500).json({
                erro: err
            })
        })
    } else {
        res.status(400).json({
            erro: "Parâmetros incompletos"
        })
    }
}

async function deleteUser (req: Request, res: Response, next: NextFunction) {
    
    (await connection).manager.delete(User, {username: req.body.username})
    .then( () => {
        res.json({
            msg: `Usuário deletado: '${req.body.username}'`
        })
    })
    .catch( err => {
        res.status(500).send("Erro")
    })
}

export { findUser, insertUser, deleteUser }