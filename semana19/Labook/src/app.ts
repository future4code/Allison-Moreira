import express from 'express';
import cors from 'cors';

const app = express()

app.use(express.json())
app.use(cors())

app.listen ( 3006, ()=> {
    console.log("SERVER INICIADO!")
})

export default app