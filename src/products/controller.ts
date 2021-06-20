import { Request, Response, NextFunction } from 'express'
import { connection } from '../db/conn'
import { Product} from './entity'

async function findOne(name: string, res: Response) {
    (await connection).manager.find(Product, { name })
        .then( product => {
            if (product.length === 0) {
                res.json({
                    msg: "OK",
                    products: "Produto não encontrado"
                })
            } else {
                res.json({
                    msg: "OK",
                    product
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
    (await connection).manager.find(Product)
        .then( product => {
            if (product.length === 0) {
                res.json({
                    msg: "OK",
                    products: "Nenhum produto encontrado"
                })
            } else {
                res.json({
                    msg: "OK",
                    product
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
    const product: Product = new Product
    product.name = req.body.name
    product.description = req.body.description
    product.stock = req.body.stock
    product.value = req.body.value;
    (await connection).manager.save(product)
    .then( (product) => {
        res.send({
            msg: "OK",
            product
        })
    })
    .catch( err => {
        console.log(err)
        res.status(500).json({
            erro: err
        })
    })
}

function findProduct (req: Request, res: Response, next: NextFunction) {
    if (req.body.name) {
        findOne(req.body.name, res)
    }
    else {
        findAll(res)
    }
}

async function insertProduct(req: Request, res: Response, next: NextFunction) {
    if (req.body.name) {
        const product: Product = new Product
        product.name = req.body.name
        product.stock = req.body.stock
        product.value = req.body.value
        product.description = req.body.description;
        (await connection).manager.save(product)
        .then( (product) => {
            res.json({
                msg: "OK",
                product
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

async function deleteProduct (req: Request, res: Response, next: NextFunction) {
    
    (await connection).manager.delete(Product, {name: req.body.name})
    .then( () => {
        res.json({
            msg: `Produto deletado: '${req.body.name}'`
        })
    })
    .catch( err => {
        res.status(500).send("Erro")
    })
}

export { findProduct, insertProduct, deleteProduct }