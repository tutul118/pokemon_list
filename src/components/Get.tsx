import React from 'react';
import axios from 'axios';


interface Ability {
    ability: {
        name: string;
        url: string;
    },
    is_hidden: boolean;
    slot: number

}

interface State {
    abilities: Ability[];
};

interface Props { };

export default class Get extends React.PureComponent<Props, State>  {
    state: State = {
        abilities: []

    }

    performGetRequest = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon/ditto/")
            .then(res => {
                const abilities = res.data.abilities;
                this.setState({ abilities });
            })
            .catch(error => {
                console.log(error)
            });
    }

    render() {
        return (
            <div>
                    <button className="btn" onClick={this.performGetRequest}>GET IT</button>
                    <ul>
                   {this.state.abilities.map(i => <h2>{i.ability.name}</h2> )}
                </ul>
                
            </div>
        )
    }
};