import React, { useState, useEffect } from "react";
import { View, TextInput, Image, TouchableOpacity, Text } from "react-native";
import styles from "./style";

const PasswordInput = (props) => {
  const [error, setError] = useState(false);
  const [password, setPassword] = useState(props.current);

  const eyeButton = () => {
    if (props.passwordHide === false) {
      props.setPasswordHide(true);
    } else props.setPasswordHide(false);
  };
  useEffect(() => {
    props.change(password);
    props.errorChange("");
  }, [password]);
  return (
    <View style={props.error !== "" ? styles.formAreaError : styles.formArea}>
      <View style={props.error === "" ? styles.form : styles.formError}>
        {password !== "" ? (
          <>
            <View style={styles.icon}>
              {props.error === "" ? (
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
              placeholderTextColor={props.error === "" ? `#CED2DB` : `#CC0000`}
              placeholder={props.text}
              value={password}
              secureTextEntry={props.passwordHide === true ? true : false}
              selectionColor={props.error === "" ? `#CED2DB` : `#CC0000`}
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
              {props.error === "" ? (
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
                props.error === ""
                  ? styles.inputPassword
                  : styles.inputPasswordError
              }
              placeholderTextColor={props.error === "" ? `#CED2DB` : `#CC0000`}
              placeholder={props.text}
              value={password}
              secureTextEntry={props.passwordHide === true ? true : false}
              selectionColor={props.error === "" ? `#CED2DB` : `#CC0000`}
              onChangeText={(text) => {
                setError(false);
                setPassword(text);
              }}
            ></TextInput>
          </>
        )}
      </View>
      {props.error !== "" && (
        <View style={{ paddingLeft: "10%", marginTop: "1%" }}>
          <Text style={styles.textError}>{props.error}</Text>
        </View>
      )}
    </View>
  );
};
export default PasswordInput;
