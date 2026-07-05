import express from 'express'
import type { Express } from 'express'

export function createApplication(): Express {
    const app = express()
   
    //Middleware
    app.use(express.json())//middleware registered
    
    
    
    //Routes
    app.get('/', (req, res) => {

        return res.json({ message: "welcome!" })

    })


    return app
}