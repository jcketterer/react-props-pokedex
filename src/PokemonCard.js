import React from 'react'
import './PokemonCard.css'

const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

const PokemonCard = ({ id, name, type, base_experience }) => {
  let img = `${POKE_API}${id}.png`
  return (
    <div className="PokemonCard">
      <div className="PokemonCard-name">{name}</div>
      <img className="PokemonCard-img" alt="" src={img} />
      <div className="PokemonCard-info">Type: {type}</div>
      <div className="PokemonCard-info">Exp: {base_experience}</div>
    </div>
  )
}

export default PokemonCard
