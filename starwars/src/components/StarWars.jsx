import React from 'react';
import Character from "./Character";

const StarWars = (props) => {
    return (
        <ul>
            <Character name={props.name} url={props.url} />
        </ul>
    )
}

export default StarWars;
