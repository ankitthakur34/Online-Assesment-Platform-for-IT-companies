import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  Pressable,
  FlatList,
  ActivityIndicator
} from "react-native";
import React, { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

import questions from "../data/questions";

const ResultScreen = ({ navigation }) => {
  const data = questions;

  const route = useRoute();
    // console.log(route.params.answers);
    // console.log(route.params.point)

    const [show,setShow] = useState(true);

    useEffect(()=>{

      setTimeout(()=>{
         setShow(false)
      },6000)

    },)

  return (
    <View style={{ margin: 10 }}> 
  
  { show? 
   <View style={{flexDirection:"column", justifyContent:"center",alignItems:"center"}} >
    <ActivityIndicator size={80} animating={show} color ="grey" />
    <Text>Calculating Result....</Text>
    </View>
    : 
    
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 7,
        }}
      >
        <Text>Your Result</Text>
        <View style={{flexDirection:"row"}} >
        <Text  >Share</Text>
        <AntDesign
          style={{ marginLeft: 4 }}
          name="sharealt"
          size={18}
          color="black"
        />
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text>Question Answered</Text>
        <Text>
          ( {route.params.answers.length} /{data.length})
        </Text>
      </View>
      <Pressable
        style={{
          backgroundColor: "white",
          height: "auto",
          borderRadius: 7,
          marginTop: 20,
        }}
      >
        <Text
          style={{
            color: "#696969",
            fontSize: 19,
            fontWeight: "500",
            textAlign: "center",
            marginTop: 8,
            textTransform:"uppercase",
            letterSpacing:1,
            marginBottom:10
          }}
        >
          Score Card
        </Text>
        <FlatList
          numColumns={2}
          data={route.params.answers}
          renderItem={({ item, i }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                margin: 10,
                flexDirection: "row",
                alignItems: "center",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <Text> Q-{item.questions}</Text>
              {item.answer === true ? (
                <AntDesign
                  style={{ marginLeft: 5 }}
                  name="checkcircle"
                  size={20}
                  color="green"
                />
              ) : (
                <AntDesign
                  style={{ marginLeft: 5 }}
                  name="closecircle"
                  size={20}
                  color="red"
                />
              )}
            </View>
          )}
        />

        <Pressable
          onPress={() => navigation.navigate("Home")}
          style={{
            backgroundColor: "green",
            padding: 8,
            marginLeft: "auto",
            marginRight: "auto",
            marginBottom: 10,
            borderRadius: 5,
          }}
        >
          <Text style={{ color: "white", textAlign: "center" }}>Continue</Text>
        </Pressable>

        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <Text>Total Points - </Text>
          <Text>{route.params.point}</Text>
        </View>
      </Pressable>
      </View>
  }
    </View>
  );
};

export default ResultScreen;

const styles = StyleSheet.create({});
