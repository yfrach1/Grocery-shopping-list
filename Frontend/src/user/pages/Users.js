import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Harel Yfrach",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
      places: 3,
    },
  ];
  return <UsersList items={USERS} />;
};

export default Users;
