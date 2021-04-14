import React, { useState } from "react"

const HobbyForm = ({ postHobby }) => {
  const [newHobby, setNewHobby] = useState({
    name: "",
    description: ""
  })

  const handleInputChange = event => {
    setNewHobby({
      ...newHobby,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    postHobby(newHobby)
    clearForm()
  }

  const clearForm = () => {
    setNewHobby({
      name: "",
      description: ""
    })
  }

  return (
    <div className="callout">
      <h1>New Hobby Form</h1>
      <form onSubmit={handleSubmit} >

        <label>
          Name:
          <input
            type="text"
            name="name"
            onChange={handleInputChange}
            value={newHobby.name}
          />
        </label>

        <label>
          Description:
          <input
            type="text"
            name="description"
            onChange={handleInputChange}
            value={newHobby.description}
          />
        </label>

        <div className="button-group">
          <input className="button" type="submit" value="Submit" />
        </div>
      </form>
    </div>
  )
}

export default HobbyForm
