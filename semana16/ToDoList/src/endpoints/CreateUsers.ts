import { connection } from "./../connection"
import { Request, Response } from 'express'

export const CreateUsers = async (
    req: Request,
    res: Response
): Promise<void> => {

    try {
        const body = {
            id: req.body.id,
            name: req.body.name,
            nickname: req.body.nickname,
            email: req.body.email,
        }

        if (!body.id || !body.name || !body.nickname || !body.email) {
            res.status(422).send('Invalid Parameters.')
        } else {
            await connection.raw(`
                INSERT INTO TodoListUsers (id, name, nickname, email)
                VALUES(
                    "${body.id}",
                    "${body.name}",
                    "${body.nickname}",
                    "${body.email}"
                );
            `);

            res.status(201).send({ message: 'User created successfully', body })
        }

    } catch (error) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
};
