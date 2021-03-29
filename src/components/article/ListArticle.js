import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Feather } from "@expo/vector-icons";
import config from "../../config/config.json";
const Headline = ({ navigation, item }) => {
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
    } else if (current.month < 12) {
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
      <Image
        style={styles.image}
        source={{
          uri: `${config.FILE_SERVER_URL}/${item.thumbnail}`,
        }}
      ></Image>
      <View style={styles.text}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{item.title}</Text>
        </View>
        <View style={styles.dateContainer}>
          <Feather name="clock" size={16} color="black" />
          <Text style={styles.date}>{`${calcDate(
            item.updatedAt,
            getTomorrow(item.updatedAt)
          )}`}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  image: {
    width: 150,
    height: 120,
    borderRadius: 15,
    backgroundColor: "gray",
  },
  text: {
    flex: 1,
  },
  titleContainer: {
    flex: 1,
    paddingLeft: 10,
    justifyContent: "center",
  },
  title: {
    fontSize: 14,
  },
  dateContainer: {
    flexDirection: "row",
    paddingLeft: 10,
    height: 24,
    alignItems: "center",
  },
  date: {
    marginLeft: 5,
    fontSize: 12,
  },
});

export default Headline;
