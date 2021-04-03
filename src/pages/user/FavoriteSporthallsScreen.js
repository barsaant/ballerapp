import React, { useEffect, useState, useContext } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import axios from "../../axios";
import LoginContext from "../../contexts/LoginContext";
import ListArticle from "../../components/article/ListArticle";

const SporthallScreen = ({ navigation }) => {
  const loginContext = useContext(LoginContext);
  const [articles, setArticles] = useState([]);
  const getArticles = (cid, cr, token) => {
    axios
      .get(`/favoritesporthalls`, {
        headers: {
          Authorization: "Bearer " + token,
          cid: cid,
          cr: cr,
        },
      })
      .then((result) => console.log(result));
  };
  useEffect(() => {
    getArticles(loginContext.cu, loginContext.cr, loginContext.token);
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.articles}
        data={articles}
        renderItem={({ item }) => (
          <TouchableOpacity
            activeOpacity={0.75}
            style={styles.article}
            onPress={() =>
              navigation.navigate("SingleArticle", { id: item.articleId })
            }
          >
            <ListArticle key={item.articleId} item={item} />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.articleId}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  articles: {
    width: "100%",
  },
});

export default SporthallScreen;
