import React from 'react'
import PokemonCard from './PokemonCard'
import './Pokedex.css'

const Pokedex = ({ pokemon }) => {
  return (
    <div className="Pokedex">
      <h2 className="Pokedex-header">Pokedex</h2>
      <div className="Pokedex-cards">
        {pokemon.map(p => (
          <PokemonCard key={p.id} id={p.id} name={p.name} type={p.type} exp={p.base_experience} />
        ))}
      </div>
    </div>
  )
}

export default Pokedex
