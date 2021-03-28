import React from "react";
import { StyleSheet, Text, SafeAreaView, Image, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const SingleArticleScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image
          style={styles.thumbnail}
          source={{
            uri: "https://reactnative.dev/img/tiny_logo.png",
          }}
        ></Image>
        <Text style={styles.title}>
          Лейкерсийн солилцооны талаархи фрейк вогелийн бодит бодол
        </Text>
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
            <Text style={styles.name}>234</Text>
          </View>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            Наггетс одоогоор барууны 5-р байранд бичигдэж байгаа бөгөөд аварга
            ЛА ердөө хоёр тоглолт дутуу байна.Алдагдлаа нөхөж, топ-4-ийн үрийг
            авахын тулд Нугасууд худалдааны донсолгооноос болж магадгүй юм.
            Цөөхөн хэдэн залуу хэтийн төлөв, драфтын сонголтуудын зардлаар
            найдвартай гуравдахь хувилбарыг авчрах алхам нь Joker-ийн багийн
            картанд орж магадгүй юм.
          </Text>
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
    justifyContent: 'space-between',
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
});

export default SingleArticleScreen;
