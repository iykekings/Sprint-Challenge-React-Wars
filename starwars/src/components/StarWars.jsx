import React from 'react';
import Character from './Character';

const StarWars = props => {
  return (
    <ul>
      {props.characters.map(character => (
        <Character name={character.name} key={character.created} url={character.url} />
      ))}
    </ul>
  );
};

export default StarWars;
