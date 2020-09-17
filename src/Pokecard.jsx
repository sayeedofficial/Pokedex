import React from 'react';
import './pokecard.css'
const POKE_API="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"



class Pokecard extends React.Component{
    render() {
        let imgSrc = `${POKE_API}${this.props.id}.png`;
        return (
            <div className="Pokecard" >
                <h1>{this.props.name}</h1>
                <img src={imgSrc} alt="" ></img>

                <div>
                    Type: {this.props.type}
                </div>
                <div>
                    Exp : {this.props.exp}
                </div>
            </div>
        )
    }
}

export default Pokecard;