import { StyleSheet } from "react-native";
import { flex } from "styled-system";

export const CommonStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    top: 0,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  centerImage: {
    width: 400,
    height: 200,
    top: 50,
    marginLeft: "auto",
    marginBottom: "auto",
    marginRight: "auto",
  },

  tinyLogo: {
    width: 50,
    height: 50,
    marginBottom: 25,
    position: "absolute",
    top: 5,
    right: 5,
  },
  bottomLogo: {
    width: 50,
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    left: "50%",
    padding: 2,
    position: "relative",
    right: "auto",
    top: "80%",
  },
  tinyLogo_left: {
    width: 50,
    height: 50,
    marginBottom: 25,
    position: "absolute",
    top: 25,
    left: 15,
    zIndex: 10,
  },
  calendar: {
    flex: 1,
    top: 45,
  },

  LoginText: {
    marginTop: 50,
    fontSize: 30,
    fontWeight: "bold",
  },
  TitleCenter: {
    marginTop: 100,
    fontSize: 20,
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
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
    backgroundColor: "#88AC24",
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
    backgroundColor: "#88AC24",
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
    justifyContent: "space-evenly",
    margin: "auto",
    alignItems: "center",
    marginTop: 22,
    top: 70,
  },
  modalContent: {
    border: 0,
    borderRadius: "4px",
    bottom: "auto",
    minHeight: 10,
    left: "10%",
    padding: 2,
    position: "relative",
    right: "auto",
    top: "40%",
    width: "80%",
  },
  modalContent2: {
    border: 0,
    borderRadius: "4px",
    bottom: "auto",
    left: "10%",
    padding: 2,
    position: "relative",
    right: "auto",
    top: "50%",
    width: "80%",
  },
  modalContent3: {
    border: 0,
    borderRadius: "4px",
    bottom: "auto",
    minHeight: 10,
    left: "10%",
    padding: 2,
    position: "relative",
    right: "auto",
    top: "60%",
    width: "80%",
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
    backgroundColor: "#a1d0df",
  },
  buttonClose: {
    backgroundColor: "#ffedb7",
  },
  textStyle: {
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  modal: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "blue",
    padding: 100,
  },
  CenterTitleView: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-evenly",
    margin: "auto",
    padding: 10,
    alignContent: "center",
    alignItems: "center",
  },
});
