import React, { useState, useEffect, useContext } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  View,
  ImageBackground,
  TouchableOpacity,
  Button,
} from "react-native";
import axios from "../../axios/index";
import config from "../../config/config.json";
import { Ionicons } from "@expo/vector-icons";
import HTML from "react-native-render-html";
import LoginContext from "../../contexts/LoginContext";

const SingleArticleScreen = ({ route, navigation }) => {
  const loginContext = useContext(LoginContext);
  const [article, setArticle] = useState({});

  const getArticle = (cid, cr, token) => {
    axios
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
    navigation.setOptions({
      headerLeft: () => (
        <View style={styles.headerButtons}>
          <TouchableOpacity
            style={styles.fheadbarButton}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="arrow-back-outline" size={20} color="black" />
          </TouchableOpacity>
        </View>
      ),
      headerRight: () => (
        <View style={styles.headerButtons}>
          <TouchableOpacity style={styles.headbarButton}>
            <Ionicons name="md-arrow-redo-outline" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.headbarButton}>
            <Ionicons name="heart-outline" size={24} color="black" />
          </TouchableOpacity>
        </View>
      ),
    });
    if (loginContext.isLoggedIn) {
      getArticle(loginContext.cu, loginContext.cr, loginContext.token);
    }
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      {loginContext.isLoggedIn ? (
        <ScrollView>
          <ImageBackground
            style={styles.thumbnail}
            source={{
              uri: `${config.FILE_SERVER_URL}/${article.thumbnail}`,
            }}
          >
            <TouchableOpacity
              style={styles.categoryContainer}
              onPress={() => navigation.navigate("LoginScreen")}
            >
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
            {/*<HTML source={{ html: JSON.parse(article.article) }} />*/}
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
  headerButtons: {
    flexDirection: "row",
  },
  headbarButton: {
    marginRight: 20,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3BBCF8",
    borderRadius: 10,
  },
  fheadbarButton: {
    marginLeft: 20,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3BBCF8",
    borderRadius: 10,
  },
});

export default SingleArticleScreen;
