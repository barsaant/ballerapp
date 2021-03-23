import { setStatusBarNetworkActivityIndicatorVisible } from "expo-status-bar";
import React, { useState, useRef, useEffect } from "react";
import {
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import axios from "../../../axios/index";
import styles from "./style";

const EmailVerificationScreen = () => {
  const [input1, setInput1] = useState();
  const [input2, setInput2] = useState();
  const [input3, setInput3] = useState();
  const [input4, setInput4] = useState();
  const [input5, setInput5] = useState();
  const [input6, setInput6] = useState();
  const [showImage, setShowImage] = useState(true);
  const codeInput1 = useRef();
  const codeInput2 = useRef();
  const codeInput3 = useRef();
  const codeInput4 = useRef();
  const codeInput5 = useRef();
  const codeInput6 = useRef();

  React.useEffect(() => {
    Keyboard.addListener("keyboardDidShow", _keyboardDidShow);
    Keyboard.addListener("keyboardDidHide", _keyboardDidHide);

    // cleanup function
    return () => {
      Keyboard.removeListener("keyboardDidShow", _keyboardDidShow);
      Keyboard.removeListener("keyboardDidHide", _keyboardDidHide);
    };
  }, []);

  const _keyboardDidShow = () => setShowImage(false);
  const _keyboardDidHide = () => setShowImage(true);

  const changeInput1 = (text) => {
    setInput1(text);

    if (text.length === 1) {
      codeInput2.current.focus();
    }
  };

  const changeInput2 = (text) => {
    setInput2(text);

    if (text.length === 1) {
      codeInput3.current.focus();
    } else codeInput1.current.focus();
  };

  const changeInput3 = (text) => {
    setInput3(text);

    if (text.length === 1) {
      codeInput4.current.focus();
    } else codeInput2.current.focus();
  };

  const changeInput4 = (text) => {
    setInput4(text);

    if (text.length === 1) {
      codeInput5.current.focus();
    } else codeInput3.current.focus();
  };

  const changeInput5 = (text) => {
    setInput5(text);

    if (text.length === 1) {
      codeInput6.current.focus();
    } else codeInput4.current.focus();
  };

  const changeInput6 = (text) => {
    setInput6(text);
    if (text.length === 0) {
      codeInput5.current.focus();
    }
  };

  return (
    <View style={styles.container}>
      <View>
        {showImage && (
          <View style={styles.image}>
            <Image
              source={require("../../../../assets/images/lostpassword.png")}
            />
          </View>
        )}

        <View style={styles.header}>
          <Text style={styles.headerText}>Баталгаажуулах</Text>
        </View>
        <View style={styles.email}>
          <Text style={styles.emailText}>
            Бүртгүүлсэн И-мэйл хаягт ирсэн 6 оронтой нууц кодыг оруулна уу
          </Text>
        </View>

        <View style={styles.digit}>
          <TextInput
            selectionColor='#CED2DB'
            style={styles.input}
            autoFocus={true}
            keyboardType='number-pad'
            onChangeText={(text) => changeInput1(text)}
            maxLength={1}
            ref={codeInput1}
          ></TextInput>
          <TextInput
            selectionColor='#CED2DB'
            style={styles.inputMargin}
            keyboardType='number-pad'
            maxLength={1}
            onChangeText={(text) => changeInput2(text)}
            ref={codeInput2}
          ></TextInput>
          <TextInput
            selectionColor='#CED2DB'
            style={styles.inputMargin}
            keyboardType='number-pad'
            maxLength={1}
            onChangeText={(text) => changeInput3(text)}
            ref={codeInput3}
          ></TextInput>
          <TextInput
            selectionColor='#CED2DB'
            style={styles.inputMargin}
            keyboardType='number-pad'
            maxLength={1}
            onChangeText={(text) => changeInput4(text)}
            ref={codeInput4}
          ></TextInput>
          <TextInput
            selectionColor='#CED2DB'
            style={styles.inputMargin}
            keyboardType='number-pad'
            maxLength={1}
            onChangeText={(text) => changeInput5(text)}
            ref={codeInput5}
          ></TextInput>
          <TextInput
            selectionColor='#CED2DB'
            style={styles.inputMargin}
            keyboardType='number-pad'
            maxLength={1}
            onChangeText={(text) => changeInput6(text)}
            ref={codeInput6}
          ></TextInput>
        </View>
        <View style={styles.resend}>
          <TouchableOpacity>
            <Text style={styles.resendText}>Дахин пин код авах</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity style={styles.button}>
        <View style={styles.buttonStyle}>
          <Text style={styles.buttonText}>Баталгаажуулах</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default EmailVerificationScreen;
