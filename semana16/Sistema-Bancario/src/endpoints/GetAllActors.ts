
import { Request, Response } from 'express'
import connection from './../connection'

export const GetAllActors = async (req: Request, res: Response) =>{
    try {
        
        const actors = await connection("Actor")

    } catch (error) {
        console.log(error.message)
        res.status(500).send("Internal server Error!")
    }
}