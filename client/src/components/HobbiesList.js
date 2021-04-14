import React from "react"

import HobbyTile from "./HobbyTile"

const HobbyList = ({ hobbies }) => {
  const hobbyComponents = hobbies.map(hobbyObject => {
    return <HobbyTile key={hobbyObject.id} {...hobbyObject} />
  })
  return (
    <div className="callout">
      <h1>Hobby List</h1>
      {hobbyComponents}
    </div>
  )
}

export default HobbyList
