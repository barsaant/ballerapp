import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    width: "100%",

    paddingHorizontal: 30,
    paddingTop: "10%",
    height: "100%",
    position: "relative",
    justifyContent: "space-between",
  },
  image: {
    width: "100%",
    alignItems: "center",
  },
  header: {
    marginTop: "10%",
  },
  headerText: {
    fontFamily: "PoppinsBold",
    fontSize: 32,
  },
  emailText: {
    fontFamily: "PoppinsRegular",
    fontSize: 14,
  },
  digit: {
    flexDirection: "row",
    width: "100%",
    marginTop: "10%",
  },
  input: {
    borderWidth: 1,
    width: "15%",
    height: 53,
    textAlign: "center",
    borderColor: "#E8E6F1",
    borderRadius: 15,
  },
  inputMargin: {
    borderWidth: 1,
    width: "15%",
    marginLeft: "2%",
    height: 53,
    textAlign: "center",
    borderColor: "#E8E6F1",
    borderRadius: 15,
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
  button: {
    bottom: 5,
    width: "100%",
  },
  resend: {
    alignItems: "center",
    marginTop: "2%",
  },
  resendText: {
    fontFamily: "PoppinsRegular",
    fontSize: 14,
  },
});
