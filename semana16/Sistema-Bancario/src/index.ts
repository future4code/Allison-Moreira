import app from './app'
import { GetAllActors } from './endpoints/GetAllActors'
import { UpdateActorId } from './endpoints/UpdateActorId'
import { InsertActor } from './endpoints/InsertActor'

app.get("/actor", GetAllActors )

app.put("/actor/:id", UpdateActorId )
    
app.post("/actor", InsertActor )

