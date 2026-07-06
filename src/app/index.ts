import express from 'express'
import type { Express } from 'express'
import { authRouter } from'./auth/routes.js'

export function createApplication(): Express {
    const app = express()
   
    //Middleware
    app.use(express.json())//middleware registered
    
    
    
    //Routes
    app.get('/', (req, res) => {
        return res.json({ message: "welcome!" })
    })

    app.use('/auth',authRouter)


    return app
}