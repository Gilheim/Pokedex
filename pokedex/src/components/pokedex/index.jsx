// Pokedex component
import Pokecard from "../pokecard"


function Pokedex() {
    return(
        <div>
            <h1>Pokédex</h1>
            <div>
                <Pokecard id = {1}/>
                <Pokecard id = {2}/>
                <Pokecard id = {3}/>
                <Pokecard id = {4}/>
                <Pokecard id = {5}/>
            </div>
        </div>
    )
}

export default Pokedex