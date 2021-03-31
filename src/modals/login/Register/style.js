import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 30,
    paddingTop: "20%",
    flex: 1,
    backgroundColor: "#ffffff",
  },
  headerText: {
    width: "100%",
    fontSize: 32,
    fontFamily: "PoppinsBold",
    marginBottom: "7%",
  },

  formArea: {
    marginBottom: "8%",
  },
  formAreaError: {
    marginBottom: "2%",
  },

  form: {
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#E8E6F1",
    height: 40,
    justifyContent: "center",
  },

  input: {
    width: "90%",
    fontFamily: "PoppinsRegular",
    fontSize: 14,
    color: "#000000",
  },
  inputPassword: {
    width: "90%",
    fontFamily: "PoppinsRegular",
    fontSize: 14,
    color: "#000000",
  },
  inputPasswordWithEye: {
    width: "80%",
    fontFamily: "PoppinsRegular",
    fontSize: 14,
    color: "#000000",
  },
  formError: {
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#CC0000",
    height: 40,
    justifyContent: "center",
  },
  inputError: {
    width: "90%",
    fontFamily: "PoppinsRegular",
    fontSize: 14,
    color: "#CC0000",
  },
  inputPasswordError: {
    width: "90%",
    fontFamily: "PoppinsRegular",
    fontSize: 14,
    color: "#CC0000",
  },

  textError: {
    fontSize: 10,
    fontFamily: "PoppinsItalic",
    color: "#CC0000",
  },
  icon: {
    width: "10%",
    alignItems: "center",
  },

  buttonStyle: {
    backgroundColor: "#191F22",
    height: 60,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#ffffff",
    fontFamily: "MontBold",
    fontSize: 18,
  },
  or: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: "15%",
  },
  path: {
    width: "40%",
    height: 1,
    backgroundColor: "#E8E6F1",
  },
  orText: {
    width: "20%",
    textAlign: "center",
    fontFamily: "PoppinsRegular",
    fontSize: 14,
    color: "#CED2DB",
  },
  social: {
    padding: 0,
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  socialGoogle: {
    borderWidth: 1,
    borderColor: "#B3B7CA",
    width: 148,
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
  },
  socialFacebook: {
    width: 148,
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#3B5998",
    height: 50,
  },
  socialText: {
    color: "#CED2DB",
    fontFamily: "PoppinsRegular",
    marginLeft: 5,
    fontSize: 14,
  },
});
