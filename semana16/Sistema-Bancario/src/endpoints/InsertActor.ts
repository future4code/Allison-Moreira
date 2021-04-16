
import { Request, Response } from 'express'
import connection from './../connection'

export const InsertActor = async (req: Request, res: Response) => {
    try {
        await connection.raw(`
            INSERT INTO Actor (id, name, salary, birth_date, gender, favorite, type)
            VALUES(
                "${Date.now()}",
                "${req.body.name}",
                ${req.body.salary},
                "${req.body.birth_date}",
                "${req.body.gender}",
                "${req.body.favorite}",
                "${req.body.type}"
            )
        `)

        res.status(201).send("Created the Table!")
    } catch (error) {
        console.log()
        res.status(500).send("Server Error 500")
    }
}