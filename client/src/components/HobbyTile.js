import React from "react"

const HobbyTile = ({ id, name, description }) => {
  return(
    <div className="callout">
      <h4>{name}</h4>
      <p>{description}</p>
    </div>
  )
}

export default HobbyTile
