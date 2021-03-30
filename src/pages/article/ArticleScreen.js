import React, { useEffect, useState, useRef } from "react";
import {
  Button,
  StatusBar,
  FlatList,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  TouchableOpacity,
} from "react-native";
import Headline from "../../components/article/Headline";
import ListArticle from "../../components/article/ListArticle";
import axios from "../../axios/index";
import AsyncStorage from "@react-native-async-storage/async-storage";

const wait = (timeout) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};

const ArticleScreen = ({ navigation }) => {
  const [refreshing, setRefreshing] = useState(false);
  const { width: windowWidth } = useWindowDimensions();
  const [categories, setCategories] = useState([]);
  const [articles, setArticles] = useState([]);
  const [headlines, setHeadlines] = useState([]);
  const [categoryId, setCategoryId] = useState(null);
  const [async, setAsync] = useState([]);
  const [refresh, setRefresh] = useState(0);

  const getAuth = async () => {
    const cid = await AsyncStorage.getItem("_cu");
    const token = await AsyncStorage.getItem("_AUTHtoken");
    const cr = await AsyncStorage.getItem("_cr");
    setAsync([cid, cr, token]);
  };

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setRefresh((item) => item + 1);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  const getHeadlines = (cid, cr, token) => {
    axios
      .get(`/tagarticles/1`, {
        headers: {
          Authorization: "Bearer " + token,
          cid: cid,
          cr: cr,
        },
      })
      .then((result) => {
        setHeadlines(result.data.tagArticles.articles);
        console.log(result.data.tagArticles.articles);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getAllArticles = async (cid, cr, token) => {
    axios
      .get(`/articles/posted`, {
        headers: {
          Authorization: "Bearer " + token,
          cid: cid,
          cr: cr,
        },
      })
      .then((result) => {
        setArticles(result.data.articles);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getArticles = (cid, cr, token) => {
    axios
      .get(`/categories/${categoryId}`, {
        headers: {
          Authorization: "Bearer " + token,
          cid: cid,
          cr: cr,
        },
      })
      .then((result) => {
        setArticles(result.data.categoryArticle.articles);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getCategories = (cid, cr, token) => {
    axios
      .get(`/categories`, {
        headers: {
          Authorization: "Bearer " + token,
          cid: cid,
          cr: cr,
        },
      })
      .then((result) => {
        setCategories(result.data.categories);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAuth();
    if (categoryId === null) {
      getAllArticles(async[0], async[1], async[2]);
    } else {
      getArticles(async[0], async[1], async[2]);
    }
    getCategories(async[0], async[1], async[2]);
    getHeadlines(async[0], async[1], async[2]);
  }, [categoryId, refresh]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        hidden={false}
        barStyle={"dark-content"}
        backgroundColor={"white"}
      />
      <ScrollView
        style={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View style={styles.headlines}>
          <Text style={styles.headlineTitle}>Онцлох Мэдээ</Text>
          <ScrollView
            horizontal={true}
            style={styles.scrollViewStyle}
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={1}
          >
            {headlines.map((item) => (
              <TouchableOpacity
                key={item.articleId}
                activeOpacity={0.75}
                style={{ width: windowWidth, paddingHorizontal: 20 }}
                onPress={() =>
                  navigation.navigate("SingleArticle", { id: item.articleId })
                }
              >
                <Headline item={item} />
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
        <View style={styles.newsContainer}>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={styles.categories}
          >
            <TouchableOpacity
              style={null === categoryId ? styles.active : styles.category}
              onPress={() => setCategoryId(null)}
            >
              <Text>Бүх мэдээ</Text>
            </TouchableOpacity>
            {categories.map((item) => (
              <TouchableOpacity
                key={item.categoryId}
                style={
                  item.categoryId === categoryId
                    ? styles.active
                    : styles.category
                }
                onPress={() => setCategoryId(item.categoryId)}
              >
                <Text>{item.categoryName}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
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
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headlines: {
    width: "100%",
    paddingVertical: 20,
  },
  headlineTitle: {
    paddingHorizontal: 20,
    fontWeight: "bold",
    fontSize: 24,
    marginBottom: 20,
  },
  newsContainer: {
    width: "100%",
  },
  categories: {
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
  category: {
    paddingVertical: 5,
    marginHorizontal: 10,
    borderBottomWidth: 2,
    borderColor: "white",
  },
  active: {
    paddingVertical: 5,
    marginHorizontal: 10,
    borderBottomWidth: 2,
    borderColor: "#3BBCF8",
  },
  articles: {
    width: "100%",
  },
  article: {
    paddingHorizontal: 20,
  },
});

export default ArticleScreen;
