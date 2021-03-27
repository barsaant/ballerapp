import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import axios from "../../../axios/index";
import styles from "./style";
import * as Facebook from "expo-facebook";
import * as Google from "expo-google-app-auth";
import {
  FB_APP_ID,
  GOOGLE_ANDROID_CLIENT_ID,
  GOOGLE_IOS_CLIEND_ID,
} from "../../../config/config.json";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordHide, setPasswordHide] = useState(true);
  const [error, setError] = useState(false);

  const initSocialLogin = async () => {
    try {
      await Facebook.initializeAsync({
        appId: FB_APP_ID,
      });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    initSocialLogin();
  }, []);

  const fbLogin = async () => {
    try {
      const { token, type } = await Facebook.logInWithReadPermissionsAsync({
        permissions: ["public_profile", "email"],
      });

      const response = await fetch(
        `https://graph.facebook.com/me?access_token=${token}`
      );

      const user = await response.json();

      return { type, token, user };
    } catch (e) {
      return { error: e };
    }
  };

  const handleFBLoginPress = async () => {
    const { type, token } = await fbLogin();

    if (type && token) {
      if (type === "success") {
        await axios
          .post("/users/social/facebook", {
            facebookToken: token,
          })
          .then(async (result) => {
            await AsyncStorage.setItem("_cu", result.data._cu);
            await AsyncStorage.setItem("_cr", result.data._cr);
            await AsyncStorage.setItem("_AUTHtoken", result.data.AUTHtoken);
            navigation.navigate("UserScreen");
          })
          .catch((err) => console.log(err.response.data.error.message));
      } else if (error) {
        console.log("Нэвтрэх хүсэлт цуцлагдлаа");
      }
    }
  };

  const googleLogin = async () => {
    try {
      const { type, accessToken, user } = await Google.logInAsync({
        androidClientId: GOOGLE_ANDROID_CLIENT_ID,
        iosClientId: GOOGLE_IOS_CLIEND_ID,
      });

      return { type, googleToken: accessToken, user };
    } catch (e) {
      return { error: e };
    }
  };

  const handleGoogleLoginPress = async () => {
    const { type, googleToken, error, user } = await googleLogin();
    if (type && googleToken) {
      if (type === "success") {
        console.log(googleToken);
        console.log(user);
      } else if (error) {
        console.log("Нэвтрэх хүсэлт цуцлагдлаа");
      }
    }
  };

  const eyeButton = () => {
    if (passwordHide === false) {
      setPasswordHide(true);
    } else setPasswordHide(false);
  };

  const clearButton = () => {
    setError(false);
    setEmail("");
  };

  const handleSubmitButton = () => {
    axios
      .post("/users/login", {
        email: email,
        password: password,
      })
      .then(async (result) => {
        if (result.data.emailVerified === false) {
          console.log("Баталгаажуулах хуудас");
          await AsyncStorage.setItem("_cu", result.data._cu);
          await AsyncStorage.setItem("_cr", result.data._cr);
          await AsyncStorage.setItem("_AUTHtoken", result.data.AUTHtoken);
          navigation.navigate("EmailVerificationScreen");
        } else {
          await AsyncStorage.setItem("token", result.data.AUTHtoken);
          await AsyncStorage.setItem("_cu", result.data._cu);
          await AsyncStorage.setItem("_cr", result.data._cr);
          navigation.navigate("UserScreen");
        }
      })
      .catch((err) => {
        console.log(err);
        setError(true);
        setPassword("");
      });
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
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
                  setError(false);
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
                  setError(false);
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
                  setError(false);
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
                  setError(false);
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
      </View>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;
