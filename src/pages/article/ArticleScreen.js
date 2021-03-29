import React, { useEffect, useState } from "react";
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
  const [article, setArticle] = useState({});
  const [categoryId, setCategoryId] = useState(null);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    getArticles();
    getCategories();
    wait(2000).then(() => setRefreshing(false));
  }, []);

  const getAllArticles = async () => {
    try {
      const result = await axios.get(`articles/posted`);
      setArticles(result.data.articles);
    } catch (error) {
      console.log(error);
    }
  };
  const getArticles = async () => {
    try {
      const result = await axios.get(`categories/${categoryId}`);
      setArticles(result.data.categoryArticle.articles);
    } catch (error) {
      console.log(error);
    }
  };
  const getCategories = async () => {
    try {
      const result = await axios.get(`categories`);
      setCategories(result.data.categories);
    } catch (error) {
      console.log(error);
    }
  };
  const getArticle = async () => {
    try {
      const result = await axios.get(`articles/8`);
      setArticle(result.data.article);
      console.log(result.data.article);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (categoryId === null) {
      getAllArticles();
    } else {
      getArticles();
    }
    getArticle();
    getCategories();
  }, [categoryId]);

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
            <View style={{ width: windowWidth, paddingHorizontal: 20 }}>
              <Headline />
            </View>
            <View style={{ width: windowWidth, paddingHorizontal: 20 }}>
              <Headline />
            </View>
            <View style={{ width: windowWidth, paddingHorizontal: 20 }}>
              <Headline />
            </View>
            <View style={{ width: windowWidth, paddingHorizontal: 20 }}>
              <Headline />
            </View>
            <View style={{ width: windowWidth, paddingHorizontal: 20 }}>
              <Headline />
            </View>
            <View style={{ width: windowWidth, paddingHorizontal: 20 }}>
              <Headline />
            </View>
          </ScrollView>
        </View>
        <View style={styles.newsContainer}>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={styles.categories}
          >
            <Button
              style={styles.category}
              title="Бүх мэдээ"
              onPress={() => setCategoryId(null)}
            />
            {categories.map((item) => (
              <Button
                key={item.categoryId}
                style={styles.category}
                title={item.categoryName}
                onPress={() => setCategoryId(item.categoryId)}
              />
            ))}
          </ScrollView>
          <FlatList
            style={styles.articles}
            data={articles}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.article}
                onPress={() => {
                  navigation.navigate("SingleArticle", { id: item.articleId });
                  console.log(item.articleId);
                }}
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
    borderBottomWidth: 2,
    borderColor: "#3BBCF8",
    marginHorizontal: 10,
  },
  articles: {
    width: "100%",
  },
  article: {
    paddingHorizontal: 20,
  },
});

export default ArticleScreen;
