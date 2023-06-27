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
            color: "magenta",
            fontSize: 20,
            fontWeight: "600",
          }}
        >
          {" "}
          TEST RULES-{" "}
        </Text>

        <View
          style={{
            padding: 10,
            backgroundColor: "#F88379",
            borderRadius: 6,
            marginTop: 15,
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
              For each correct answer you get 5 points
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
              There is no negative marking for wrong answer
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
              Each question has a time limit of 30 sec
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
              You should answer all the questions compulsarily
            </Text>
          </View>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate("Test")}
          style={{
            backgroundColor: "magenta",
            padding: 14,
            width: 150,
            borderRadius: 25,
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: 30,
          }}
        >
          <Text
            style={{ color: "white", fontWeight: "600", textAlign: "center" }}
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
