let { pokemon } = {
    pokemon: [
      {
        id: 1,
        name: "Charmander",
        type: ["fire"],
        image:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
      },
      {
        id: 2,
        name: "Squirtle",
        type: ["water"],
        image:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
      },
      {
        id: 3,
        name: "Butterfree",
        type: ["bug", "flying"],
        image:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
      },
      {
        id: 4,
        name: "Rattata",
        type: ["normal"],
        image:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png",
      },
      {
        id: 5,
        name: "Metapod",
        type: ["bug"],
        image:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png",
      },
    ]
  }

function Pokecard({id}) {
    //console.log(pokemon)
    let mainPokemon = {}
    pokemon.forEach((pokemon) => {
        pokemon.id == id ? mainPokemon = pokemon : {}
    })
    console.log(mainPokemon)
    return(
        <div>
            <h2>{mainPokemon.name}</h2>
            <img src={mainPokemon.image} alt={mainPokemon.name} />
            <p>Type: {`${mainPokemon.type.length == 1 ? mainPokemon.type[0]: mainPokemon.type[0] + ", " + mainPokemon.type[1]}`}</p>
        </div>
    )
}

export default Pokecard