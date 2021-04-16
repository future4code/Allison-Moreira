import express, { Request, Response } from 'express';
import cors from 'cors';
import { users, user, usersType} from './users'

const app = express();

app.use(express.json());
app.use(cors());


app.get("/users", (req: Request, res: Response) => {
    const result = users.map(user => ({
        id: user.id,
        name: user.name,
    }))
    res.status(200).send(users)

})

app.get("/users/type/:type", (req: Request, res: Response) => {
    
    let errorCode: number = 422
    let type: string = req.params.type

    try {
        // pegando do enum
         if (!(type in usersType)){
            // error
            throw new Error("Tipo informado deve ser NORMAL ou ADMIN");
        }
        
        // fazendo copia da base
        let result = users.filter(
             user => user.type === type
         )

         res.status(200).send(result);

    } catch (error) {
        res.status(400).send(error.message);
    }

    app.get("/users/name/:name", (req: Request , res: Response) => {

        let name: string = req.params.name

        const result = users.filter(
            user => user.name === name
        )

        if (result) {
            res.status(200).send(result)
        } else {
            res.status(406).send("Not Found")
        }

    })


})
app.listen(3003, ()=>{
    console.log("Server Ok!")
})
