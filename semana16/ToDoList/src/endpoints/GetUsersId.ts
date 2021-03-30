import { connection } from '../connection'
import { Request, Response } from 'express'

export const GetUsersId = async (req: Request, res: Response) => {
    try {

        const body = {
            id: req.body.id
        }
        
        const result = await connection.raw(`
            SELECT * FROM TodoListUsers WHERE id = ${body.id}
        `)

    } catch (error) {
        console.log(error.message)
        res.status(500).send("Error Server!")
    }
}