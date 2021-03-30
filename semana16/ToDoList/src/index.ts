import app from './app'

import { CreateUsers } from './endpoints/CreateUsers'
import { GetAllUsers } from './endpoints/GetAllUsers'
import { GetUsersId } from './endpoints/GetUsersId'

app.put("/user", CreateUsers )

app.get("/user", GetAllUsers )

app.get("/user/:id", GetUsersId )