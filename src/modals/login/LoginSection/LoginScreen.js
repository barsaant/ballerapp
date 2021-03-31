import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState, useEffect, useContext } from "react";
import {
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";
import styles from "./style";
import LoginContext from "../../../contexts/LoginContext";

const LoginScreen = ({ navigation }) => {
  const loginContext = useContext(LoginContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordHide, setPasswordHide] = useState(true);
  const error = loginContext.error;

  const handleFBLoginPress = () => {
    loginContext.handleFBLogin();
  };

  const handleGoogleLoginPress = () => {
    loginContext.handleGoogleLogin();
  };

  const eyeButton = () => {
    if (passwordHide === false) {
      setPasswordHide(true);
    } else setPasswordHide(false);
  };

  const clearButton = () => {
    loginContext.setError(false);
    setEmail("");
  };

  const handleSubmitButton = () => {
    loginContext.handleLogin(email, password);
    console.log("Дарагдлаа");
    console.log(error);
  };

  useEffect(() => {
    if (loginContext.error === true) {
      setPassword("");
    }
  }, [loginContext.error]);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollView style={styles.container}>
        <View>
          <Text style={styles.headerText}>Нэвтрэх</Text>
        </View>

        <View style={!error ? styles.form : styles.formError}>
          {email !== "" ? (
            <>
              <View style={styles.icon}>
                {!error ? (
                  <Image
                    source={require("../../../../assets/images/icons/user-avatar.png")}
                  ></Image>
                ) : (
                  <Image
                    source={require("../../../../assets/images/icons/user-avatar-err.png")}
                  ></Image>
                )}
              </View>
              <TextInput
                style={!error ? styles.inputEmail : styles.inputEmailError}
                placeholder={`И-мэйл`}
                value={email}
                placeholderTextColor={!error ? `#CED2DB` : `#CC0000`}
                selectionColor={!error ? `#CED2DB` : `#CC0000`}
                onChangeText={(text) => {
                  loginContext.setError(false);
                  setEmail(text);
                }}
              ></TextInput>
              {error && (
                <View style={styles.icon}>
                  <TouchableOpacity onPress={() => clearButton()}>
                    <Image
                      source={require("../../../../assets/images/icons/clear.png")}
                    ></Image>
                  </TouchableOpacity>
                </View>
              )}
            </>
          ) : (
            <>
              <View style={styles.icon}>
                {!error ? (
                  <Image
                    source={require("../../../../assets/images/icons/user-avatar.png")}
                  ></Image>
                ) : (
                  <Image
                    source={require("../../../../assets/images/icons/user-avatar-err.png")}
                  ></Image>
                )}
              </View>
              <TextInput
                style={
                  !error ? styles.inputEmail : styles.inputEmailWithClearError
                }
                placeholder={`И-мэйл`}
                value={email}
                placeholderTextColor={!error ? `#CED2DB` : `#CC0000`}
                selectionColor={!error ? `#CED2DB` : `#CC0000`}
                onChangeText={(text) => {
                  loginContext.setError(false);
                  setEmail(text);
                }}
              ></TextInput>
            </>
          )}
        </View>

        <View style={!error ? styles.form : styles.formError}>
          {password !== "" ? (
            <>
              <View style={styles.icon}>
                {!error ? (
                  <Image
                    source={require("../../../../assets/images/icons/lock-locked.png")}
                  ></Image>
                ) : (
                  <Image
                    source={require("../../../../assets/images/icons/lock-locked-err.png")}
                  ></Image>
                )}
              </View>
              <TextInput
                style={styles.inputPasswordWithEye}
                placeholderTextColor={!error ? `#CED2DB` : `#CC0000`}
                placeholder={`Нууц үг`}
                value={password}
                secureTextEntry={passwordHide === true ? true : false}
                selectionColor={!error ? `#CED2DB` : `#CC0000`}
                onChangeText={(text) => {
                  loginContext.setError(false);
                  setPassword(text);
                }}
              ></TextInput>
              <View style={styles.icon}>
                <TouchableOpacity onPress={() => eyeButton()}>
                  <Image
                    source={require("../../../../assets/images/icons/eye-slash.png")}
                  ></Image>
                </TouchableOpacity>
              </View>
            </>
          ) : (
            <>
              <View style={styles.icon}>
                {!error ? (
                  <Image
                    source={require("../../../../assets/images/icons/lock-locked.png")}
                  ></Image>
                ) : (
                  <Image
                    source={require("../../../../assets/images/icons/lock-locked-err.png")}
                  ></Image>
                )}
              </View>
              <TextInput
                style={
                  !error ? styles.inputPassword : styles.inputPasswordError
                }
                placeholderTextColor={!error ? `#CED2DB` : `#CC0000`}
                placeholder={`Нууц үг`}
                value={password}
                secureTextEntry={passwordHide === true ? true : false}
                selectionColor={!error ? `#CED2DB` : `#CC0000`}
                onChangeText={(text) => {
                  loginContext.setError(false);
                  setPassword(text);
                }}
              ></TextInput>
            </>
          )}
        </View>

        <View style={styles.forgotPassword}>
          <TouchableOpacity>
            <Text style={styles.forgotPasswordText}>Нууц үг мартсан?</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={() => handleSubmitButton()}
          style={{ marginTop: "10%" }}
        >
          <View style={styles.buttonStyle}>
            <Text style={styles.buttonText}>Нэвтрэх</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.register}>
          <Text style={styles.registerTextFirst}>Бүртгүүлээгүй байгаа юу?</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("RegisterScreen")}
          >
            <Text style={styles.registerTextSecond}>Бүртгэл үүсгэх.</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.or}>
          <View style={styles.path}></View>
          <Text style={styles.orText}>Эсвэл</Text>
          <View style={styles.path}></View>
        </View>

        <View style={styles.social}>
          <TouchableOpacity onPress={() => handleGoogleLoginPress()}>
            <View style={styles.socialGoogle}>
              <Image
                source={require("../../../../assets/images/icons/google.png")}
              ></Image>
              <Text style={styles.socialText}>Google</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleFBLoginPress()}>
            <View style={styles.socialFacebook}>
              <Image
                source={require("../../../../assets/images/icons/facebook-f.png")}
              ></Image>

              <Text style={styles.socialText}>Facebook</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;
