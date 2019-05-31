import React from 'react';
import './Loader.css';

export default function Loader({loading}) {
    return (<div className={loading? 'active': ''} id='loader'>
         <div className="load anim">
        <div className="load-sm anim"></div>
        </div>
</div>);
}