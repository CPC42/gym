import React, { useState } from "react";

export const UsersContext = React.createContext();

export const UsersContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const addUser = (user, email, password, workoutType, workoutIntensity) => {
    setUsers([
      ...users,
      { user, email, password, workoutType, workoutIntensity },
    ]);
  };
  const editUser = (email, workoutType, workoutIntensity) => {
    const index = users.findIndex((object) => object.email === email);
    const newState = [...users];
    newState[index].workoutType = workoutType;
    newState[index].workoutIntensity = workoutIntensity;
    setUsers(newState);
  };
  return (
    <UsersContext.Provider value={{ users, addUser, editUser }}>
      {children}
    </UsersContext.Provider>
  );
};
