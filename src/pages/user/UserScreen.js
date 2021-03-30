import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import LoginScreen from "../login/LoginSection/LoginScreen";
import EmailVerificationScreen from "../login/EmailVerify/EmailVerificationScreen";

const UserScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.imageContainer}>
          <TouchableOpacity>
            <Image
              style={styles.userIcon}
              source={{
                uri: "https://reactnative.dev/img/tiny_logo.png",
              }}
            ></Image>
          </TouchableOpacity>
          <Text style={styles.email}>barsaa9237@gmail.com</Text>
          <TouchableOpacity style={styles.settingsContainer}>
            <Ionicons name="md-settings-outline" size={30} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.favHallsContainer}>
          <View style={styles.heading}>
            <View style={styles.favTitleContainer}>
              <Ionicons name="basketball-outline" size={30} color="black" />
              <Text style={styles.favTitle}>Таалагдсан заалууд</Text>
            </View>
            <TouchableOpacity>
              <Text style={styles.seeAll}>See All</Text>
            </TouchableOpacity>
          </View>
          <ScrollView
            horizontal={true}
            style={styles.favHalls}
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={1}
          >
            <View style={styles.sporthall}></View>
            <View style={styles.sporthall}></View>
            <View style={styles.sporthall}></View>
            <View style={styles.sporthall}></View>
            <View style={styles.sporthall}></View>
          </ScrollView>
        </View>
        <View>
          <View style={styles.heading}>
            <View style={styles.favTitleContainer}>
              <Ionicons name="newspaper-outline" size={30} color="black" />
              <Text style={styles.favTitle}>Таалагдсан нийтлэлүүд</Text>
            </View>
            <TouchableOpacity>
              <Text style={styles.seeAll}>See All</Text>
            </TouchableOpacity>
          </View>
          <ScrollView
            style={styles.scrollViewStyle}
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={1}
          ></ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  settingsContainer: {
    position: "absolute",
    top: 20,
    right: 20,
  },
  settingsIcon: {
    flex: 1,
  },
  imageContainer: {
    width: "100%",
    height: 250,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  userIcon: {
    width: 100,
    height: 100,
    marginBottom: 15,
    borderRadius: 50,
  },
  email: {
    fontSize: 18,
    fontWeight: "bold",
  },
  favHalls: {
    borderWidth: 1,
  },
  heading: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 20,
    alignItems: "center",
  },
  favHalls: {
    width: "100%",
    padding: 20,
  },
  favTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  favTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 5,
  },
  seeAll: {
    fontSize: 14,
    color: "#6ABF8E",
  },
  sporthall: {
    width: 200,
    height: 200,
    borderWidth: 1,
    marginRight: 20,
  },
});

export default UserScreen;
