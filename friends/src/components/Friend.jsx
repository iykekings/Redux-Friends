import React from 'react';

export const Friend = ({ name, age, email, id }) => {
    return <div className="friend">
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <p>Email: {email}</p>
        <p>Id: {id}</p>
    </div>
}