import type {Request, Response} from 'express'
import {signupPayloadModel} from './models.js'
import { error } from 'node:console'
import { db } from '../../db/index.js'
import { usersTable } from '../../db/schema.js'
import { eq } from 'drizzle-orm'

class AuthenticationController{
   public async handleSignup(req: Request, res: Response){
    //some body will come from req in json format (we have to make a middleware when we are dealing with json)

    const validationResult = await signupPayloadModel.safeParseAsync(req.body)
    
    //checking
    if(validationResult.error) return res.status(400).json({message: 'body validation failed', error: validationResult.error})

        const {firstName, lastName, email, password} = validationResult.data


        //check where userTable.email is equal to email
        const userEmailResult = await db.select().from(usersTable).where(eq(usersTable.email,email))

        if(userEmailResult.length > 0) return res.status(400).json({error: 'duplicate entry'})
   }
}

export default AuthenticationController