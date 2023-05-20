import React from "react";
import { useQuery, gql } from "@apollo/client";

import User from "./User";
import UserForm from "./UserForm";

const ALL_USERS_QUERY = gql`
  query GetAllUsers {
    users {
      id
      name
      age
      username
      nationality
    }
  }
`;

const Users = () => {
    const { data: usersData, loading: usersLoading, refetch: usersRefetch } = useQuery(ALL_USERS_QUERY);
    // to get single user just need to pass as second argument to useQuery { variables: { userId: id } } 

    if (usersLoading) {
        return (
            <p>Loading...</p>
        )
    }

    return (
        <>
            <div>
                {usersData &&
                    usersData.users.map((user) => {
                        return (
                            <User key={user.id} user={user} />
                        );
                    }
                    )}
            </div>
            <UserForm usersRefetch={usersRefetch} />
        </>
    )
}

export default Users;
