import React, { useState, useEffect } from "react";
import { View, TextInput, Image, Text } from "react-native";
import style from "./style";
import styles from "./style";

const NameInput = (props) => {
  const [name, setName] = useState(props.current);

  useEffect(() => {
    props.change(name);
    props.errorChange("");
  }, [name]);
  return (
    <View style={props.error !== "" ? styles.formAreaError : styles.formArea}>
      {props.error !== "" ? (
        <>
          <View style={styles.formError}>
            <View style={styles.icon}>
              <Image
                source={require("../../../../assets/images/icons/user-avatar-err.png")}
              ></Image>
            </View>
            <TextInput
              style={styles.inputError}
              placeholder={`Өөрийн нэр`}
              placeholderTextColor={`#CC0000`}
              selectionColor={`#CC0000`}
              value={name}
              onChangeText={(text) => {
                setName(text);
              }}
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
              source={require("../../../../assets/images/icons/user-avatar.png")}
            ></Image>
          </View>
          <TextInput
            style={styles.input}
            placeholder={`Нэр`}
            placeholderTextColor={`#CED2DB`}
            selectionColor={`#CED2DB`}
            value={name}
            onChangeText={(text) => {
              setName(text);
            }}
          ></TextInput>
        </View>
      )}
    </View>
  );
};
export default NameInput;
