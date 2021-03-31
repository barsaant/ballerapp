import React, { useState, useContext, useEffect } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import LoginContext from "../../../contexts/LoginContext";
import EmailInput from "./EmailInput";
import NameInput from "./NameInput";
import PasswordInput from "./PasswordInput";
import styles from "./style";

const RegitsterScreen = ({ navigation }) => {
  const loginContext = useContext(LoginContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordHide, setPasswordHide] = useState(true);

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordConfirmError, setPasswordConfirmError] = useState("");

  const capitalize = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  };

  const validate = (email) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(email) === false) {
      return false;
    } else {
      return true;
    }
  };

  const clearButton = () => {
    setError(false);
    setEmail("");
  };

  useEffect(() => {
    if (
      loginContext.emailErrorMessage === "/Бүртгэгдсэн И-мэйл хаяг байна. */"
    ) {
      setEmailError("/Бүртгэгдсэн И-мэйл хаяг байна. */");
    }
  }, [loginContext.emailErrorMessage]);

  const handleSubmitButton = async () => {
    const emailValidation = await validate(email);

    if (name === "") {
      setNameError("/Та өөрийн нэрээ оруулна уу! */");
    }

    if (emailValidation !== true) {
      setEmailError(
        "/Таны И-мэйл буруу байна. Та И-мэйл хаягаа оруулна уу! */"
      );
    }

    if (email === "") {
      setEmailError("/Та И-мэйл хаягаа оруулна уу! */");
    }
    if (password !== confirmPassword) {
      setPasswordConfirmError("/Нууц үг хоорондоо таарахгүй байна! */");
    }

    if (password !== "" && confirmPassword === "") {
      setPasswordError("");
      setPasswordConfirmError("/Та нууц үгээ давтан оруулна уу! */");
    }

    if (password.length < 8) {
      setPasswordError(
        "/Таны нууц үг хамгийн багадаа 8 тэмдэгтээс бүтэх ёстой! */"
      );
      setPasswordConfirmError("");
    }

    if (password === "") {
      setPasswordError("/Та нууц үгээ оруулна уу! */");
    }
    if (confirmPassword === "") {
      setPasswordConfirmError("/Та нууц үгээ давтан оруулна уу! */");
    }
    const capitalizeName = await capitalize(name);
    if (
      nameError === "" &&
      emailError === "" &&
      passwordError === "" &&
      passwordConfirmError === "" &&
      name !== "" &&
      email !== "" &&
      password !== "" &&
      password.length >= 8 &&
      password === confirmPassword
    ) {
      loginContext.handleRegister(capitalizeName, email, password);
    }
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View
        style={{ paddingTop: 40, backgroundColor: "#ffffff", height: "100%" }}
      >
        <View style={styles.container}>
          <View>
            <Text style={styles.headerText}>Бүртгүүлэх</Text>
          </View>
          <NameInput
            current={name}
            change={setName}
            error={nameError}
            errorChange={setNameError}
          />

          <EmailInput
            current={email}
            change={setEmail}
            error={emailError}
            errorChange={setEmailError}
            loginContext={loginContext}
          />
          <PasswordInput
            text={`Нууц үг`}
            current={password}
            change={setPassword}
            passwordHide={passwordHide}
            setPasswordHide={setPasswordHide}
            error={passwordError}
            errorChange={setPasswordError}
          />
          <PasswordInput
            text={`Нууц үг давтан оруулах`}
            current={confirmPassword}
            change={setConfirmPassword}
            passwordHide={passwordHide}
            setPasswordHide={setPasswordHide}
            error={passwordConfirmError}
            errorChange={setPasswordConfirmError}
          />
          <TouchableOpacity
            onPress={() => handleSubmitButton()}
            style={{ marginTop: "10%" }}
          >
            <View style={styles.buttonStyle}>
              <Text style={styles.buttonText}>Бүртгүүлэх</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default RegitsterScreen;
