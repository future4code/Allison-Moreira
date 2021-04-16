import express, { Express, Request, Response } from 'express'
import cors from 'cors'

const app: Express = express()

app.use(express.json())
app.use(cors())

const server = app.listen(3003, ()=>{
    console.table("SERVIDOR LOCAL FUNCIONANDO!")
})

export default app;