import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React from "react";

import { useNavigation } from "@react-navigation/native";

const HomeScreen = ({ navigation }) => {
  // const navigation = useNavigation();
  return (
    <View>
      <Image
        style={{ height: 280, width: "100%", resizeMode: "cover" }}
        source={require("../assets/testImage.jpeg")}
      />

      <View style={{ paddingTop: 30 }}>
        <Text
          style={{
            textAlign: "center",
            color: "#696969",
            fontWeight: "900",
            fontSize: 24,
            letterSpacing: 1,
          }}
        >
          {" "}
          TEST RULES -{" "}
        </Text>

        <View
          style={{
            padding: 13,
            backgroundColor: "#A9A9A9",
            borderRadius: 4,
            marginTop: 15,
            marginHorizontal: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 5,
            }}
          >
            <Text style={{ fontSize: 15, fontWeight: 600 }}>*</Text>
            <Text style={{ fontSize: 15, fontWeight: 600, marginLeft: 6 }}>
              {" "}
              For each correct answer you get 10 points.
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 5,
            }}
          >
            <Text style={{ fontSize: 15, fontWeight: 600 }}>*</Text>
            <Text style={{ fontSize: 15, fontWeight: 600, marginLeft: 6 }}>
              {" "}
              There is no negative marking for wrong answer.
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 5,
            }}
          >
            <Text style={{ fontSize: 15, fontWeight: 600 }}>*</Text>
            <Text style={{ fontSize: 15, fontWeight: 600, marginLeft: 6 }}>
              {" "}
              Each question has a time limit of 30 sec.
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 5,
            }}
          >
            <Text style={{ fontSize: 15, fontWeight: 600 }}>*</Text>
            <Text style={{ fontSize: 15, fontWeight: 600, marginLeft: 6 }}>
              {" "}
              You should answer all the questions compulsarily.
            </Text>
          </View>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate("Test")}
          style={{
            backgroundColor: "#696969",
            padding: 14,
            width: 150,
            borderRadius: 25,
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: 30,
          }}
        >
          <Text
            style={{ color: "white", fontWeight: "800", textAlign: "center",letterSpacing:1,textTransform:"uppercase" }}
          >
            Start Test
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
