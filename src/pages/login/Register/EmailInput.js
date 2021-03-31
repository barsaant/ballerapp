import React, { useState, useEffect } from "react";
import { View, TextInput, Image, Text } from "react-native";
import styles from "./style";

const EmailInput = (props) => {
  const [email, setEmail] = useState(props.current);
  console.log();
  useEffect(() => {
    props.change(email);
    props.errorChange("");
    props.loginContext.setEmailErrorMessage("");
  }, [email]);
  return (
    <View style={props.error !== "" ? styles.formAreaError : styles.formArea}>
      {props.error !== "" ? (
        <>
          <View style={styles.formError}>
            <View style={styles.icon}>
              <Image
                source={require("../../../../assets/images/icons/email-err.png")}
              ></Image>
            </View>
            <TextInput
              style={styles.inputError}
              placeholder={`И-Мэйл`}
              placeholderTextColor={`#CC0000`}
              selectionColor={`#CC0000`}
              value={email}
              onChangeText={(text) => {
                setEmail(text);
              }}
              keyboardType={`email-address`}
              textContentType={`emailAddress`}
            ></TextInput>
          </View>
          <View style={{ paddingLeft: "10%", marginTop: "1%" }}>
            <Text style={styles.textError}>{props.error}</Text>
          </View>
        </>
      ) : (
        <View style={styles.form}>
          <View style={styles.icon}>
            <Image
              source={require("../../../../assets/images/icons/email.png")}
            ></Image>
          </View>
          <TextInput
            style={styles.input}
            placeholder={`И-Мэйл`}
            placeholderTextColor={`#CED2DB`}
            selectionColor={`#CED2DB`}
            value={email}
            onChangeText={(text) => {
              setEmail(text);
            }}
            keyboardType={`email-address`}
            textContentType={`emailAddress`}
          ></TextInput>
        </View>
      )}
    </View>
  );
};
export default EmailInput;
