import express from "express";
import type { Router } from 'express'

import AuthenticationController from "./controller.js";

const auththenticationController = new AuthenticationController()

export const authRouter: Router = express.Router()

//
authRouter.post('/sign-up', auththenticationController.handleSignup.bind(AuthenticationController))