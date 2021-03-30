import React, { useState, useEffect } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import axios from "../../axios/index";
import config from "../../config/config.json";
import AsyncStorage from "@react-native-async-storage/async-storage";
import HTML from "react-native-render-html";

const SingleArticleScreen = ({ route }) => {
  const [article, setArticle] = useState({});

  const getArticle = async () => {
    let cid = await AsyncStorage.getItem("_cu");
    let token = await AsyncStorage.getItem("_AUTHtoken");
    let cr = await AsyncStorage.getItem("_cr");

    await axios
      .get(`articles/${route.params.id}`, {
        headers: {
          Authorization: "Bearer " + token,
          cid: cid,
          cr: cr,
        },
      })
      .then((result) => {
        setArticle(result.data.article);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };
  useEffect(() => {
    getArticle();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <ImageBackground
          style={styles.thumbnail}
          source={{
            uri: `${config.FILE_SERVER_URL}/${article.thumbnail}`,
          }}
        >
          <TouchableOpacity style={styles.categoryContainer}>
            <Text style={styles.category}>Медиа</Text>
          </TouchableOpacity>
        </ImageBackground>
        <Text style={styles.title}>{article.title}</Text>
        <View style={styles.info}>
          <View style={styles.infoItem}>
            <Image
              style={styles.logo}
              source={{
                uri: "https://reactnative.dev/img/tiny_logo.png",
              }}
            ></Image>
            <Text style={styles.name}>Baller Crew</Text>
          </View>
          <View style={styles.infoItem}>
            <Image
              style={styles.logo}
              source={{
                uri: "https://reactnative.dev/img/tiny_logo.png",
              }}
            ></Image>
            <Text style={styles.name}>2 мин</Text>
          </View>
          <View style={styles.infoItem}>
            <Image
              style={styles.logo}
              source={{
                uri: "https://reactnative.dev/img/tiny_logo.png",
              }}
            ></Image>
            <Text style={styles.name}>{article.views}</Text>
          </View>
        </View>
        <View style={styles.textContainer}>
          {/*<HTML source={{ html: JSON.parse(article.article) }} /> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  thumbnail: {
    width: "100%",
    height: 250,
  },
  title: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontSize: 22,
    fontWeight: "bold",
  },
  info: {
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  infoItem: {
    flexDirection: "row",
    paddingVertical: 5,
    paddingHorizontal: 10,
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#3BBCF8",
  },
  textContainer: {
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  text: {
    fontSize: 16,
  },
  logo: {
    width: 30,
    height: 30,
    marginRight: 10,
    borderRadius: 15,
    overflow: "hidden",
  },
  categoryContainer: {
    width: 85,
    height: 25,
    position: "absolute",
    bottom: 15,
    left: 15,
    borderRadius: 5,
    backgroundColor: "#3BBCF8",
    justifyContent: "center",
    alignItems: "center",
  },
  category: {
    color: "white",
  },
});

export default SingleArticleScreen;
