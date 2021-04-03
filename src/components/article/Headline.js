import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import config from "../../config/config.json";

const Headline = ({ item }) => {
  function getTomorrow(date) {
    let days = new Date(
      parseInt(date.slice(5, 7)),
      parseInt(date.slice(0, 4)),
      0
    ).getDate();
    if (parseInt(date.slice(8, 10)) < days) {
      return {
        year: parseInt(date.slice(0, 4)),
        month: parseInt(date.slice(5, 7)),
        date: parseInt(date.slice(8, 10)) + 1,
      };
    } else if (date.slice(5, 7) < 12) {
      return {
        year: parseInt(date.slice(0, 4)),
        month: parseInt(date.slice(5, 7)) + 1,
        date: 1,
      };
    } else {
      return {
        year: parseInt(date.slice(0, 4)) + 1,
        month: 1,
        date: 1,
      };
    }
  }
  function calcDate(date, tomorrow) {
    const now = new Date();
    if (
      now.getFullYear() === parseInt(date.slice(0, 4)) &&
      now.getMonth() + 1 === parseInt(date.slice(5, 7)) &&
      now.getDate() === parseInt(date.slice(8, 10))
    ) {
      let x =
        (now.getHours() - parseInt(date.slice(11, 13))) * 3600 +
        (now.getMinutes() - parseInt(date.slice(14, 16))) * 60 +
        (now.getSeconds() - parseInt(date.slice(17, 19)));
      if (x >= 3600) {
        return `${Math.round(x / 3600)} цагийн өмнө`;
      } else if (x >= 60) {
        return `${Math.round(x / 60)} минутын өмнө`;
      } else {
        return `${x} секундын өмнө`;
      }
    } else if (
      now.getFullYear() === tomorrow.year &&
      now.getMonth() + 1 === tomorrow.month &&
      now.getDate() === tomorrow.date
    ) {
      let x =
        (now.getHours() - parseInt(date.slice(11, 13))) * 3600 +
        (now.getMinutes() - parseInt(date.slice(14, 16))) * 60 +
        (now.getSeconds() - parseInt(date.slice(17, 19))) +
        24 * 3600;
      if (x <= 24 * 3600) {
        if (x >= 3600) {
          return `${Math.round(x / 3600)} цагийн өмнө`;
        } else if (x >= 60) {
          return `${Math.round(x / 60)} минутын өмнө`;
        } else {
          return `${x} секундын өмнөg`;
        }
      } else {
        return `${date.slice(0, 4)}.${date.slice(5, 7)}.${date.slice(8, 10)}`;
      }
    } else {
      return `${date.slice(0, 4)}.${date.slice(5, 7)}.${date.slice(8, 10)}`;
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <View style={styles.publisher}>
          <Image
            style={styles.logo}
            source={{
              uri: "https://reactnative.dev/img/tiny_logo.png",
            }}
          ></Image>
          <Text style={styles.name}>{item.publisher}</Text>
        </View>
        <Text style={styles.date}>{`${calcDate(
          item.updatedAt,
          getTomorrow(item.updatedAt)
        )}`}</Text>
      </View>
      <Text style={styles.title}>{item.title}</Text>
      <ImageBackground
        source={{
          uri: `${config.FILE_SERVER_URL}/${item.thumbnail}`,
        }}
        style={styles.image}
      >
        <View style={styles.categoriesContainer}>
          {item.tagArticles.map((element) => {
            <TouchableOpacity
              key={element.tagId}
              style={styles.categoryContainer}
            >
              <Text style={styles.category}>{element.tagName}</Text>
            </TouchableOpacity>;
          })}
        </View>
      </ImageBackground>
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
  heading: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  publisher: {
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    width: 30,
    height: 30,
    marginRight: 10,
    borderRadius: 15,
    overflow: "hidden",
  },
  name: {
    fontWeight: "bold",
  },
  date: {
    fontWeight: "bold",
  },
  title: {
    width: "100%",
    marginVertical: 10,
    fontSize: 18,
    fontWeight: "bold",
  },
  image: {
    width: "100%",
    height: 250,
    overflow: "hidden",
    borderRadius: 15,
    position: "relative",
  },
  categoriesContainer: {
    position: "absolute",
    bottom: 15,
    left: 15,
    flexDirection: "row",
  },
  categoryContainer: {
    marginRight: 5,
    width: 85,
    height: 25,
    borderRadius: 5,
    backgroundColor: "#3BBCF8",
    justifyContent: "center",
    alignItems: "center",
  },
  category: {
    color: "white",
  },
});

export default Headline;
