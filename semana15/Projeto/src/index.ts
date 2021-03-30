import express, { Express, Request, Response } from 'express'
import cors from 'cors'
import { accounts } from './accounts'

const app: Express = express()

app.use(express())
app.use(cors())

app.get("/", (req: Request, res: Response) => {
    res.sendStatus(200)
})

app.post("/users/create", (req: Request, res: Response) => {
    try {
        const {nome, CPF, dateOfBirthAsString } = req.body

        const [day, month, yeah] = dateOfBirthAsString.split('/')

        const dateOfBirth: Date = new Date(`${yeah}-${month}-${day}`)

        accounts.push({
            name: nome,
            CPF,
            dateOfBirth,
            balance: 0,
            statement: [],
        })

        res.status(400).send("Conta criada.")

    } catch (error) {
        res.status(400).send(error.message)
    }
})

app.get("/users/all", (req: Request, res: Response) => {
    try {

        if (!accounts.length) { 
            res.statusCode = 404
            throw new Error("Nenhuma conta foi encontrada.")
        }

        res.status(200).send(accounts)

    } catch (error) {
        res.send(error.message)
    }
})

app.listen(3003, () => {
    console.log("Servidor na port: 3003 => OK :)")
})