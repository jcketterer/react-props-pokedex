import React from 'react'
import Pokedex from './Pokedex'
import pokemon from './PokemonList'

function App() {
  return (
    <div>
      <Pokedex pokemon={pokemon} />
    </div>
  )
}

export default App
