import { connection } from '../connection'
import { Request, Response } from 'express'

export const GetAllUsers = async (req: Request, res: Response) => {
    try {

        const result = await connection.raw(`
            SELECT * FROM TodoListUsers;
        `)

        res.status(201).send(result)

    } catch (error) {
       console.log(error.message) 
       res.status(500).send("Serve off!")
    }

}