import React, { useState } from "react";
import { useMutation, gql } from "@apollo/client";

const CREATE_USER_MUTATION = gql`
  mutation CreateUser($userInput: CreateUserInput!) {
    createUser(userInput: $userInput) {
      name
      id
    }
  }
`;

const UserForm = ({ usersRefetch }) => {
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [age, setAge] = useState(0);

    const [createUser] = useMutation(CREATE_USER_MUTATION);

    return (
        <div>
            <input
                type="text"
                placeholder="Name..."
                onChange={(event) => {
                    setName(event.target.value);
                }}
            />
            <input
                type="text"
                placeholder="Username..."
                onChange={(event) => {
                    setUsername(event.target.value);
                }}
            />
            <input
                type="number"
                placeholder="Age..."
                onChange={(event) => {
                    setAge(event.target.value);
                }}
            />
            <button
                onClick={() => {
                    createUser({
                        variables: {
                            userInput: { name, username, age: Number(age) },
                        },
                    });

                    usersRefetch();
                }}
            >
                Create User
            </button>
        </div>
    )
}

export default UserForm;