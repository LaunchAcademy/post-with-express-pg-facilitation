import express from "express"

import Hobby from "../../../models/Hobby.js"
import cleanUserInput from "../../../services/cleanUserInput.js"

const hobbiesRouter = new express.Router()

hobbiesRouter.get("/", async (req, res) => {
  try {
    const hobbies = await Hobby.findAll()
    return res.status(200).json({ hobbies })
  } catch (err) {
    return res.status(500).json({ errors: err })
  }
})

hobbiesRouter.post("/", async (req, res) => {
  const userInput = cleanUserInput(req.body)

  try {
    console.log("hit the post endpoint")
    //   We need to grab the user's input from the request body
    console.log(req.body)

    // Object.keys(userInput).forEach((key) => {
    //   if (userInput[key] === "") {
    //     userInput[key] = null
    //   }
    // })
    // Once we have it, we need to try to insert a new record
    const newHobby = new Hobby(userInput)
    console.log("newHobby", newHobby)
    await newHobby.save()
    console.log(newHobby)
    // If we're successful, we return a 201 Created status, along with the new record
    return res.status(201).json({ hobby: newHobby })
  } catch (error) {
    // If we're unsuccessful, we return a 500 Internal Server Error status, along with the error
    console.error(error)
    return res.status(500).json({ errors: error })
  }
})

export default hobbiesRouter
