import express from 'express'
import type { Express } from 'express'

export function createApplication(): Express {
    const app = express()

    app.get('/', (req, res) => {

        return res.json({ message: "welcome!" })

    })


    return app
}