import React from 'react';
import './css/User.css';

const User = props => {
    return (    
        <li key={props.id} className="user-item">
        <img src={props.img} className="user-img" alt={props.name} />
        <div className="user-info">
            <h2>{props.name}</h2>
            <h3 className="user-content">{props.comment}</h3>
        </div>
        </li>
    )
}

export default User;
