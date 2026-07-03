import express from "express"
import type { Express } from "express"

export function createApplication(): Express {
    const app = express()

    //Middleware


    //routes
    app.get('/', (req, res) =>{
        return res.json({message: "welcome siddharth!"})
    })


    return app 
}