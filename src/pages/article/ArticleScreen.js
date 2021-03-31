import React, { useEffect, useState, useContext } from "react";
import {
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
import LoginContext from "../../contexts/LoginContext";

const wait = (timeout) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};

const ArticleScreen = ({ navigation }) => {
  const [refreshing, setRefreshing] = useState(false);
  const { width: windowWidth } = useWindowDimensions();
  const data = [];
  const [categories, setCategories] = useState([]);
  const [articles, setArticles] = useState([]);
  const [headlines, setHeadlines] = useState([]);
  const [categoryId, setCategoryId] = useState(0);
  const [refresh, setRefresh] = useState(0);
  const loginContext = useContext(LoginContext);

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
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getAllArticles = () => {
    axios
      .get(`/articles/posted`)
      .then((result) => {
        setArticles(result.data.articles);
        data.push({
          id: 0,
          articles: result.data.articles,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getArticles = () => {
    axios
      .get(`/categories/${categoryId}`)
      .then((result) => {
        setArticles(result.data.categoryArticle.articles);
        data.push({
          id: categoryId,
          articles: result.data.categoryArticle.articles,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getCategories = () => {
    axios
      .get(`/categories`)
      .then((result) => {
        setCategories(result.data.categories);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getCategories();
    getHeadlines(loginContext.cu, loginContext.cr, loginContext.token);
  }, [refresh]);
  useEffect(() => {
    if (data.some((item) => item.id === categoryId)) {
      setArticles(data.find((item) => item.id === categoryId).articles);
    } else if (categoryId === 0) {
      getAllArticles();
    } else {
      getArticles();
    }
  }, [categoryId]);

  return (
    <SafeAreaView style={styles.container}>
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
              style={0 === categoryId ? styles.active : styles.category}
              onPress={() => setCategoryId(0)}
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
