import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  Image,
  Button,
  TouchableOpacity,
  TouchableHighlight,
  Keyboard,
} from "react-native";
import axios from "../../../axios/index";
import styles from "./style";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordHide, setPasswordHide] = useState(true);

  const eyeButton = () => {
    if (passwordHide === false) {
      setPasswordHide(true);
    } else setPasswordHide(false);
  };

  const handleSubmitButton = () => {
    axios
      .post("/users/login", {
        email: email,
        password: password,
      })
      .then((result) => {
        if (result.data.emailVerified === "false") {
          console.log("Баталгаажуулах хуудас");
          navigation.navigate("EmailVerificationScreen");
        }
      })
      .catch((err) => {
        console.log(err.response.data.error.message);
      });
  };
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.headerText}>Нэвтрэх</Text>
      </View>
      <View style={styles.form}>
        <View style={styles.icon}>
          <Image
            source={require("../../../../assets/images/icons/user-avatar.png")}
          ></Image>
        </View>
        <TextInput
          style={styles.inputEmail}
          placeholder={`И-мэйл`}
          placeholderTextColor='#CED2DB'
          selectionColor='#CED2DB'
          onChangeText={(text) => {
            setEmail(text);
          }}
        ></TextInput>
      </View>
      <View style={styles.form}>
        <View style={styles.icon}>
          <Image
            source={require("../../../../assets/images/icons/lock-locked.png")}
          ></Image>
        </View>
        <TextInput
          style={styles.inputPassword}
          placeholderTextColor='#CED2DB'
          placeholder={`Нууц үг`}
          secureTextEntry={passwordHide === true ? true : false}
          selectionColor='#CED2DB'
          onChangeText={(text) => {
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
      </View>

      <View style={styles.forgotPassword}>
        <TouchableOpacity>
          <Text style={styles.forgotPasswordText}>Нууц үг мартсан?</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        onPress={() => handleSubmitButton()}
        style={{ marginTop: "20%" }}
      >
        <View style={styles.buttonStyle}>
          <Text style={styles.buttonText}>Нэвтрэх</Text>
        </View>
      </TouchableOpacity>

      <View style={styles.register}>
        <Text style={styles.registerTextFirst}>Бүртгүүлээгүй байгаа юу?</Text>
        <TouchableOpacity>
          <Text style={styles.registerTextSecond}>Бүртгэл үүсгэх.</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.or}>
        <View style={styles.path}></View>
        <Text style={styles.orText}>Эсвэл</Text>
        <View style={styles.path}></View>
      </View>
      <View style={styles.social}>
        <TouchableOpacity>
          <View style={styles.socialGoogle}>
            <Image
              source={require("../../../../assets/images/icons/google.png")}
            ></Image>
            <Text style={styles.socialText}>Google</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.socialFacebook}>
            <Image
              source={require("../../../../assets/images/icons/facebook-f.png")}
            ></Image>

            <Text style={styles.socialText}>Facebook</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
