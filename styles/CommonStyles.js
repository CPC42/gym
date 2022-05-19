import { StyleSheet } from "react-native";

export const CommonStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    top: 40,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  tinyLogo: {
    width: 50,
    height: 50,
    marginBottom: 25,
    position: "absolute",
    top: 5,
    right: 5,
  },
  calendar: {
    flex: 1,
    top: 45,
  },

  LoginText: {
    marginTop: 100,
    fontSize: 30,
    fontWeight: "bold",
  },
  TitleCenter: {
    marginTop: 100,
    fontSize: 30,
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
  },
  Middle: {
    alignItems: "center",
    justifyContent: "center",
  },
  text2: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 5,
  },
  signupText: {
    fontWeight: "bold",
  },
  emailField: {
    marginTop: 30,
    marginLeft: 15,
  },
  emailInput: {
    marginTop: 10,
    marginRight: 5,
  },
  buttonStyle: {
    marginTop: 30,
    marginLeft: 15,
    marginRight: 15,
  },
  buttonStyle2: {
    marginTop: 30,
    marginLeft: 15,
    marginRight: 15,
    backgroundColor: "yellow",
  },
  buttonStyleX: {
    marginTop: 12,
    marginLeft: 15,
    marginRight: 15,
  },
  buttonDesign: {
    backgroundColor: "#026efd",
  },
  lineStyle: {
    flexDirection: "row",
    marginTop: 30,
    marginLeft: 15,
    marginRight: 15,
    alignItems: "center",
  },
  imageStyle: {
    width: 80,
    height: 80,
    marginLeft: 20,
  },
  boxStyle: {
    flexDirection: "row",
    marginTop: 30,
    marginLeft: 15,
    marginRight: 15,
    justifyContent: "space-around",
  },
  button: {
    paddingLeft: 20,
    paddingRigth: 20,
    backgroundColor: "DD33FF",
    height: 40,
    width: 160,
    borderRadius: 10,
    marginLeft: 50,
    marginRight: 50,
    marginTop: 20,
  },
  button2: {
    paddingLeft: 20,
    paddingRigth: 20,
    backgroundColor: "yellow",
    height: 40,
    width: 160,
    borderRadius: 10,
    marginLeft: 50,
    marginRight: 50,
    marginTop: 20,
  },
  dateText: {
    backgroundColor: "white",
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  modal: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#00ff00",
    padding: 100,
  },
  text: {
    color: "#3f2949",
    marginTop: 10,
  },
});

export const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    top: 70,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
