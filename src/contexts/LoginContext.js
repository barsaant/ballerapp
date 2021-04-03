import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "../axios/index";
import * as Facebook from "expo-facebook";
import * as Google from "expo-google-app-auth";
import {
  FB_APP_ID,
  GOOGLE_ANDROID_CLIENT_ID,
  GOOGLE_IOS_CLIEND_ID,
} from "../config/config.json";

const LoginContext = createContext();

export const LoginInfo = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState();
  const [cu, setCu] = useState(null);
  const [cr, setCr] = useState(null);
  const [token, setToken] = useState(null);
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [loading, setLoading] = useState(true);

  const LoginSuccess = async (token, cu, cr) => {
    setToken(token);
    setCu(cu);
    setCr(cr);

    await AsyncStorage.setItem(
      "user",
      JSON.stringify({ cu: cu, cr: cr, AUTHtoken: token })
    );
  };

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

  const handleFBLogin = async () => {
    const { type, token } = await fbLogin();

    if (type && token) {
      if (type === "success") {
        await axios
          .post("/users/social/facebook", {
            facebookToken: token,
          })
          .then(async (result) => {
            LoginSuccess(
              result.data.AUTHtoken,
              result.data._cu,
              result.data._cr
            );
            setIsLoggedIn(true);
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
      const { type, idToken, user } = await Google.logInAsync({
        androidClientId: GOOGLE_ANDROID_CLIENT_ID,
        iosClientId: GOOGLE_IOS_CLIEND_ID,
      });

      return { type, googleToken: idToken, user };
    } catch (e) {
      return { error: e };
    }
  };

  const handleGoogleLogin = async () => {
    const { type, googleToken, error, user } = await googleLogin();
    if (type && googleToken) {
      if (type === "success") {
        axios
          .post(`/users/social/google`, {
            googleToken: googleToken,
          })
          .then(async (result) => {
            LoginSuccess(
              result.data.AUTHtoken,
              result.data._cu,
              result.data._cr
            );
            setIsLoggedIn(true);
            console.log("Нэвтэрлээ");
            navigation.navigate("UserScreen");
          })
          .catch((err) => console.log(err.response.data));
      } else if (error) {
        console.log("Нэвтрэх хүсэлт цуцлагдлаа");
      }
    }
  };

  const handleLogin = (email, password) => {
    axios
      .post("/users/login", {
        email: email,
        password: password,
      })
      .then((result) => {
        LoginSuccess(result.data.AUTHtoken, result.data._cu, result.data._cr);
        setIsLoggedIn(true);
        // if (result.data.emailVerified === false) {
        //   navigation.navigate("EmailVerificationScreen");
        // } else {
        //   navigation.navigate("UserScreen");
        // }
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });
  };
  const handleRegister = async (capitalizeName, email, password) => {
    await axios
      .post(`/users/register`, {
        firstName: capitalizeName,
        email: email,
        password: password,
      })
      .then(async (result) => {
        console.log(result);
        LoginSuccess(result.data.AUTHtoken, result.data._cu, result.data._cr);
      })
      .catch((err) => {
        console.log(err.response.data.error.message);
        if (
          err.response.data.error.message === "Бүртгэгдсэн И-мэйл хаяг байна."
        ) {
          setError(true);
          setEmailErrorMessage("/Бүртгэгдсэн И-мэйл хаяг байна. */");
        }
      });
  };

  const logout = async () => {
    await AsyncStorage.removeItem("user");
    setIsLoggedIn(false);
    setToken(null);
    setCu(null);
    setCr(null);
  };

  return (
    <LoginContext.Provider
      value={{
        isLoggedIn,
        cu,
        setCu,
        cr,
        setCr,
        token,
        setToken,
        setIsLoggedIn,
        handleLogin,
        error,
        setError,
        handleFBLogin,
        handleGoogleLogin,
        handleRegister,
        emailErrorMessage,
        setEmailErrorMessage,
        loading,
        setLoading,
        logout,
      }}
    >
      {props.children}
    </LoginContext.Provider>
  );
};

export default LoginContext;
