import express from "express";
import type { Router } from 'express'

import AuthenticationController from "./controller.js";
import { restrictToAuthenticatedUser } from "../middleware/auth.middleware.js";

const auththenticationController = new AuthenticationController()

export const authRouter: Router = express.Router()

//route registered
authRouter.post('/sign-up', auththenticationController.handleSignup.bind(AuthenticationController))

authRouter.post('/sign-in',auththenticationController.handleSignin.bind(AuthenticationController))

authRouter.get('/me', restrictToAuthenticatedUser(), auththenticationController.handleMe.bind(auththenticationController))