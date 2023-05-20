import React from "react";  

const User = ({ user }) => {
    const { name, username, age, nationality } = user;

    return (
        <>
            <div>
                <h1>Name: {name}</h1>
                <h2>Username: {username}</h2>
                <h3>Age: {age}</h3>
                <h4>Nationality: {nationality}</h4>
            </div>
            <hr />
        </>
    )
}

export default User;