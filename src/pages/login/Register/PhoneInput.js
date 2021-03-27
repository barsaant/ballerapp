import React, { useState, useEffect } from "react";
import { View, TextInput, Image, Text } from "react-native";
import style from "./style";
import styles from "./style";

const PhoneInput = (props) => {
  const [phone, setPhone] = useState(props.current);
  useEffect(() => {
    props.change(phone);
    props.errorChange("");
  }, [phone]);
  return (
    <View style={props.error !== "" ? styles.formAreaError : styles.formArea}>
      {props.error !== "" ? (
        <>
          <View style={styles.formError}>
            <View style={styles.icon}>
              <Image
                source={require("../../../../assets/images/icons/phone-err.png")}
              ></Image>
            </View>
            <TextInput
              style={styles.input}
              placeholder={`Утасны дугаар`}
              placeholderTextColor={`#CC0000`}
              selectionColor={`#CC0000`}
              value={phone}
              onChangeText={(text) => {
                setPhone(text);
              }}
              keyboardType='numeric'
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
              source={require("../../../../assets/images/icons/phone.png")}
            ></Image>
          </View>
          <TextInput
            style={styles.input}
            placeholder={`Утасны дугаар`}
            placeholderTextColor={`#CED2DB`}
            selectionColor={`#CED2DB`}
            value={phone}
            onChangeText={(text) => {
              setPhone(text);
            }}
            keyboardType='numeric'
          ></TextInput>
        </View>
      )}
    </View>
  );
};
export default PhoneInput;
