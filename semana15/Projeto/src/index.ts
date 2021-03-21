import express, { Express, Request, Response } from 'express'
import cors from 'cors'

const app: Express = express()

app.use(express())
app.use(cors())

app.get("/", ( req: Request, res: Response) => {
    res.sendStatus(200)
})


app.listen(3003, ()=>{
    console.log("Servidor na port: 3003 => OK :)")
})