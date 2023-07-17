import React from 'react'

import Card from 'react-bootstrap/Card';


const Player = ({propName}) => {
  let {name, team, nationality, jurseyNumber, age, imageUrl}= propName
  let imageStyle={height:'18rem', objectFit: "cover",}
  return (

    <Card style={{ width: '18rem', }} className='play'>
    <Card.Img style={imageStyle} variant="top" src={imageUrl} />
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <Card.Text>
      Team: {team}
      </Card.Text>
      <Card.Text>
      nationality: {nationality}
      </Card.Text>
      <Card.Text>
      jurseyNumber: {jurseyNumber}
      </Card.Text>
      <Card.Text>
      age: {age}
      </Card.Text>
    </Card.Body>
  </Card>
  )
}

export default Player
