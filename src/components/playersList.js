import React from 'react'
import Player from './player'
import { players } from '../players'

export const PlayersList = () => {

  const styleObject  = {display : "flex", JustifeyContent:"spaceBetween", } 
  return (
    <div style={styleObject} className='players'>
    {players.map(el=> {return <Player propName={el}/>})}
        
        </div>
  )
}
