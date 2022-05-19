import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveUsers = async (users) => {
  console.log("save save");

  const jsonUsers = JSON.stringify(users);
  await AsyncStorage.setItem("users", jsonUsers);
};

export const loadUsers = async () => {
  console.log("load load");
  const result = await AsyncStorage.getItem("users");
  if (result) {
    return JSON.parse(result);
  } else {
    return [];
  }
};
