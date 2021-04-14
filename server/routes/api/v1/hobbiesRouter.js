import express from "express"

import Hobby from "../../../models/Hobby.js"

const hobbiesRouter = new express.Router()

hobbiesRouter.get("/", async (req, res) => {
  try {
    const hobbies = await Hobby.findAll()
    return res.status(200).json({ hobbies })
  }
  catch (err) {
    return res.status(500).json({ errors: err })
  }
})

hobbiesRouter.post("/", async (req, res) => {
  try {
    console.log("We hit the endpoint")
    console.log(req.body)
  
    // We need to grab the user's input from the request body
    const userInput = req.body
    Object.keys(userInput).forEach(key => {
      if(userInput[key] === "") {
        userInput[key] = null
      }
    })
    console.log(userInput)
  
    // Once we have it, we need to try to insert a new record
    // first, we need to create an instance of a `Hobby` object
    const hobby = new Hobby(userInput)
    await hobby.save()
  
    // If we're successful, we return a 201 Created status, along with the new record
    console.log(hobby)
    res.status(201).json({ hobby: hobby })
  } catch (err) {
    // If we're unsuccessful, we return a 500 Internal Server Error status, along with the error
    console.error(err)
    res.status(500).json({ error: err })
  }
})

export default hobbiesRouter