import express from "express"

import clientRouter from "./clientRouter.js"
import hobbiesRouter from "./api/v1/hobbiesRouter.js"

const rootRouter = new express.Router()

rootRouter.use("/api/v1/hobbies", hobbiesRouter)

rootRouter.use("/", clientRouter)

export default rootRouter
