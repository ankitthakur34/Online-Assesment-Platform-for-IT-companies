import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import questions from "../data/questions";
import { useNavigation } from "@react-navigation/native";

const TestScreen = () => {
  const navigation = useNavigation();

  // points for progress bar
  const [point, setPoint] = useState(0);

  // index of question

  const [index, setindex] = useState(0);

  // answerStatus true or false

  const [answerStatus, setAnswerStatus] = useState(null);

  // answer array containg all the right and wrong answer of user

  const [answers, setAnswers] = useState([]);

  // selected answer index
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);

  // counter 15 sec

  const [counter, setCounter] = useState(5);

  // interval btw next question

  let interval = null;

  // useEffect for checking answer is correct or not.
  useEffect(() => {
    if (selectedAnswerIndex !== null) {
      if (selectedAnswerIndex === currentQuestion?.correctAnswerIndex) {
        //  setPoint((point)=>point+10);
        setAnswerStatus(true);
        //    answers.push({questions: index+1,answer: true})
      } else {
        setAnswerStatus(false);
        //  answers.push({questions: index+1,answer: false})
      }
    }
  }, [selectedAnswerIndex]);

  // console.warn(point)

  // useEffect for adding answers in answer array after every question
  useEffect(() => {
    if (answerStatus !== null) {
      answers.push({ questions: index, answer: answerStatus });
    }

    if (answerStatus === true) {
      setPoint(point + 10);
    }
  }, [index]);

  // console.warn(answers)

  useEffect(() => {
    const myInterval = () => {
      if (counter >= 1) {
        setCounter((counter) => counter - 1);
      }
      if (counter === 0) {
        setindex(index + 1);
        setCounter(5);
      }
    };

    interval = setTimeout(myInterval, 1000);

    // cleanUp timer when its over

    return () => {
      clearTimeout(interval);
    };
  }, [counter]);

  // useEffect for making answer null on chnaging question.
  useEffect(() => {
    setSelectedAnswerIndex(null);
    setAnswerStatus(null);
  }, [index]);

  useEffect(() => {
    if (!interval) {
      setCounter(5);
    }
  }, [index]);

  // console.warn(selectedAnswerIndex)

  const data = questions;
  const currentQuestion = data[index];

  const progressPercentage = Math.floor((index / data.length) * 100);

  // if questions are over navigate to result screen
  useEffect(() => {
    if (index >= data.length) {
      navigation.navigate("Result", {
        answers: answers,
        point: point,
      });
    }
  }, [currentQuestion]);
  return (
    <View>
      <View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            padding: 10,
          }}
        >
          <Text>Quiz Challenge</Text>
          <Text>{counter}</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginHorizontal: 10,
          }}
        >
          <Text>your Progress</Text>
          <Text>
            ({index} /{data.length}) Questions Answered
          </Text>
        </View>
        {/* Progress Bar */}
        <View
          style={{
            backgroundColor: "white",
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
            height: 10,
            borderRadius: 20,
            justifyContent: "center",
            marginTop: 20,
            marginLeft: 10,
          }}
        >
          <Text
            style={{
              backgroundColor: "#FFC0CB",
              borderRadius: 12,
              position: "absolute",
              left: 0,
              height: 10,
              right: 0,
              width: `${progressPercentage}%`,
              marginTop: 20,
            }}
          />
        </View>
      </View>

      <View
        style={{
          marginTop: 30,
          backgroundColor: "#F0F8FF",
          padding: 10,
          borderRadius: 6,
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>
          {currentQuestion?.question}
        </Text>

        <View style={{ marginTop: 12 }}>
          {currentQuestion?.options.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => setSelectedAnswerIndex(index)}
              style={{
                flexDirection: "row",
                alignItems: "center",
                borderWidth: 0.5,
                borderRadius: 20,
                marginVertical: 10,
              }}
            >
              <Text
                style={{
                  backgroundColor:
                    selectedAnswerIndex === index ? "grey" : "white",
                  textAlign: "center",
                  borderWidth: 0.5,
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                  padding: 10,
                  marginRight: 20,
                }}
              >
                {item.options}
              </Text>
              <Text>{item.answer} </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <View>
        {index + 1 >= questions.length ? (
          <Pressable
            onPress={() =>
              navigation.navigate("Result", {
                point: point,

                answers: answers,
              })
            }
            style={{
              backgroundColor: "green",
              padding: 10,
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: 20,
              borderRadius: 6,
            }}
          >
            <Text style={{ color: "white" }}>SUBMIT</Text>
          </Pressable>
        ) : answerStatus === null ? null : (
          <Pressable
            onPress={() => setindex(index + 1)}
            style={{
              backgroundColor: "green",
              padding: 10,
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: 20,
              borderRadius: 6,
            }}
          >
            <Text style={{ color: "white" }}>Next Question</Text>
          </Pressable>
        )}
      </View>
    </View>
  );
};

export default TestScreen;

const styles = StyleSheet.create({});
