import React from 'react';
import Character from './Character';
import './StarWars.css';

const StarWars = ({ characters, getNext, getPrevious }) => {
  return (
    <div className="star-wars">
      <ul>
        {characters.map(character => (
          <Character
            name={character.name}
            key={character.created}
            url={character.url}
          />
        ))}
      </ul>
      <div className="btns">
        <span className="next" onClick={() => getPrevious()}>
          Previous
        </span>
        <span className="previous" onClick={() => getNext()}>
          Next
        </span>
      </div>
    </div>
  );
};

export default StarWars;
