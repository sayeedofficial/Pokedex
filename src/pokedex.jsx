import React from "react";

import Pokecard from "./Pokecard";
import "./pokedexcard.css";

class Pokedex extends React.Component {
  static defaultProps = {
    pokemon: [
      { id: 5, name: "Charmander", type: "fire", base_experience: 62 },
      { id: 8, name: "Squirtle", type: "water", base_experience: 63 },
      { id: 11, name: "Metapod", type: "bug", base_experience: 72 },
      { id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
      { id: 26, name: "Pikachu", type: "electric", base_experience: 112 },
      { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
      { id: 94, name: "Gengar", type: "poison", base_experience: 225 },
      { id: 133, name: "Eevee", type: "normal", base_experience: 65 },
    ],
  };

  render() {
    let title;
    if (this.props.isWinner) {
      title = <h1 className="Winner">Winning Hand</h1>;
    } else {
      title = <h1 className="Loser">Losing Hand</h1>;
    }
    return (
      <div className="Pokedex">
        <h2> Total Expreience : {this.props.exp}</h2>
        {title}

        <div className="Pokedex-cards">
          {this.props.pokemon.map((p) => (
            <Pokecard
              id={p.id}
              name={p.name}
              type={p.type}
              exp={p.base_experience}
            ></Pokecard>
          ))}
        </div>
      </div>
    );
  }
}

export default Pokedex;
