import React, { useState, useEffect } from "react";
import { loadUsers, saveUsers } from "../storage/Storage";

export const UsersContext = React.createContext();

export const UsersContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    loadUsers().then((result) => setUsers(result));
  }, []);

  const addUser = (user, email, password, workoutType, workoutIntensity) => {
    setCurrentUser(users.length);
    setUsers([
      ...users,
      { user, email, password, workoutType, workoutIntensity },
    ]);
    saveUsers([
      ...users,
      { user, email, password, workoutType, workoutIntensity },
    ]);
  };
  const editUser = (workoutType, workoutIntensity) => {
    //users.findIndex((object) => object.email === email);
    const newState = [...users];
    newState[currentUser].workoutType = workoutType;
    newState[currentUser].workoutIntensity = workoutIntensity;
    setUsers(newState);
    saveUsers(newState);
  };

  return (
    <UsersContext.Provider
      value={{ users, currentUser, setCurrentUser, addUser, editUser }}
    >
      {children}
    </UsersContext.Provider>
  );
};
