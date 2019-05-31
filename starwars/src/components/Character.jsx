import React from 'react'

const Character = ({name, url}) => {
    return (
        <li>
            <a href={url}>{name}</a>
        </li>
    );
}

export default Character
