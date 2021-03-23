import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    width: "100%",
    borderWidth: 1,
    paddingHorizontal: 30,
    paddingTop: "30%",
    height: "100%",
  },
  headerText: {
    width: "100%",
    fontSize: 32,
    fontFamily: "PoppinsBold",
  },
  form: {
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#E8E6F1",
    height: 40,
    marginTop: "8%",
    justifyContent: "center",
  },
  inputEmail: {
    width: "90%",
    fontFamily: "PoppinsRegular",
    fontSize: 14,
  },
  inputPassword: {
    width: "80%",
    fontFamily: "PoppinsRegular",
    fontSize: 14,
  },
  icon: {
    width: "10%",
    alignItems: "center",
  },
  forgotPassword: {
    width: "100%",
    marginTop: "2%",
    paddingHorizontal: 5,
    alignItems: "flex-end",
  },

  forgotPasswordText: {
    fontSize: 12,
    fontFamily: "PoppinsBold",
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
  register: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    marginTop: "8%",
  },
  registerTextFirst: {
    fontFamily: "PoppinsRegular",
    fontSize: 12,
    marginRight: 4,
  },
  registerTextSecond: {
    fontFamily: "PoppinsBold",
    fontSize: 12,
    marginLeft: 4,
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
