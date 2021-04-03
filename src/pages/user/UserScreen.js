import React, { useState, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Button,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import LoginContext from "../../contexts/LoginContext";

const SettingsScreen = ({ navigation }) => {
  const loginContext = useContext(LoginContext);
  const HandleLogout = () => {
    loginContext.logout();
  };

  return (
    <View style={styles.container}>
      {loginContext.isLoggedIn ? (
        <ScrollView>
          <View style={styles.imageContainer}>
            <TouchableOpacity
              activeOpacity={0.5}
              style={styles.userIconContainer}
            >
              <Image
                style={styles.userIcon}
                source={{
                  uri: "https://reactnative.dev/img/tiny_logo.png",
                }}
              ></Image>
              <View style={styles.addIcon}>
                <Ionicons name="add" size={24} color="white" />
              </View>
            </TouchableOpacity>
            <Text style={styles.email}>barsaa9237@gmail.com</Text>
          </View>
          <View style={styles.buttons}>
            <TouchableOpacity activeOpacity={0.5} style={styles.button}>
              <Ionicons name="person-outline" size={30} color="black" />
              <Text style={styles.title}>Миний мэдээлэл</Text>
              <Ionicons name="chevron-forward" size={18} color="black" />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.5}
              style={styles.button}
              onPress={() => navigation.navigate("FavoriteSporthallsScreen")}
            >
              <Ionicons name="basketball-outline" size={30} color="black" />
              <Text style={styles.title}>Таалагдсан заалууд</Text>
              <Ionicons name="chevron-forward" size={18} color="black" />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.5}
              style={styles.button}
              onPress={() => navigation.navigate("FavoriteArticlesScreen")}
            >
              <Ionicons name="newspaper-outline" size={30} color="black" />
              <Text style={styles.title}>Таалагдсан нийтлэлүүд</Text>
              <Ionicons name="chevron-forward" size={18} color="black" />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5} style={styles.button}>
              <Ionicons name="person-add-outline" size={30} color="black" />
              <Text style={styles.title}>Найзаа урих</Text>
              <Ionicons name="chevron-forward" size={18} color="black" />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5} style={styles.button}>
              <Ionicons name="help-buoy-outline" size={30} color="black" />
              <Text style={styles.title}>Тусламж</Text>
              <Ionicons name="chevron-forward" size={18} color="black" />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.5}
              style={styles.button}
              onPress={() => HandleLogout()}
            >
              <Ionicons name="log-out-outline" size={30} color="black" />
              <Text style={styles.title}>Гарах</Text>
              <Ionicons name="chevron-forward" size={18} color="black" />
            </TouchableOpacity>
          </View>
        </ScrollView>
      ) : (
        <View style={styles.container}>
          <Text>Нэвтрэнэ үү!</Text>
          <Button
            title="Go to Login"
            onPress={() => navigation.navigate("LoginScreen")}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  imageContainer: {
    width: "100%",
    height: 250,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  userIconContainer: {
    position: "relative",
    marginBottom: 15,
  },
  userIcon: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  addIcon: {
    position: "absolute",
    backgroundColor: "#2B8FAE",
    width: 30,
    height: 30,
    borderRadius: 15,
    bottom: 0,
    right: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  email: {
    fontSize: 18,
    fontWeight: "bold",
  },
  buttons: {
    width: "100%",
    paddingHorizontal: 20,
  },
  button: {
    height: 60,
    borderRadius: 15,
    flexDirection: "row",
    backgroundColor: "#F3F4F8",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  title: {
    flex: 1,
    paddingLeft: 20,
  },
});

export default SettingsScreen;
