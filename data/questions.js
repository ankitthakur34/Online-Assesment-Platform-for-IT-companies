const questions= [
  {
    question: "Which of the following is linear data structure?",
    options: [
      {
        id: "0",
        options: "A",
        answer: "Trees",
      },
      {
        id: "1",
        options: "B",
        answer: "Graphs",
      },
      {
        id: "2",
        options: "C",
        answer: "Arrays",
      },
      {
        id: "0",
        options: "D",
        answer: "None of these",
      },
    ],
    correctAnswerIndex: 2,
  },
  {
    question: "Queue is based on which principle?",
    options: [
      {
        id: "0",
        options: "A",
        answer: "FIFO",
      },
      {
        id: "1",
        options: "B",
        answer: "LIFO",
      },
      {
        id: "2",
        options: "C",
        answer: "POP",
      },
      {
        id: "0",
        options: "D",
        answer: "None of these",
      },
    ],
    correctAnswerIndex: 0,
  },
  {
    question: "Which notation is used to find the complexity of an algorithm? ",
    options: [
      {
        id: "0",
        options: "A",
        answer: "Asymptotic Notation",
      },
      {
        id: "1",
        options: "B",
        answer: "Big oh Notation",
      },
      {
        id: "2",
        options: "C",
        answer: "Omega Notation",
      },
      {
        id: "0",
        options: "D",
        answer: "None of these",
      },
    ],
    correctAnswerIndex: 0,
  },
  {
    question: "User defined data type is also called? ",
    options: [
      {
        id: "0",
        options: "A",
        answer: "Primitive",
      },
      {
        id: "1",
        options: "B",
        answer: " Non-primitive",
      },
      {
        id: "2",
        options: "C",
        answer: "Identifier",
      },
      {
        id: "0",
        options: "D",
        answer: "None of these",
      },
    ],
    correctAnswerIndex: 1,
  },
  {
    question: "Minimum how many stacks are needed to implement a queue?",
    options: [
      {
        id: "0",
        options: "A",
        answer: "0",
      },
      {
        id: "1",
        options: "B",
        answer: "3",
      },
      {
        id: "2",
        options: "C",
        answer: "2",
      },
      {
        id: "0",
        options: "D",
        answer: "1",
      },
    ],
    correctAnswerIndex: 2,
  },
  {
    question: "What is a database?",
    options: [
      {
        id: "0",
        options: "A",
        answer: "Organized collection of information that cannot be accessed, updated, and managed",
      },
      {
        id: "1",
        options: "B",
        answer: "Organized collection of data that cannot be updated",
      },
      {
        id: "2",
        options: "C",
        answer: "Collection of data or information without organizing",
      },
      {
        id: "0",
        options: "D",
        answer: "Organized collection of data or information that can be accessed, updated, and managed",
      },
    ],
    correctAnswerIndex: 3,
  },
  {
    question: "Which of the following is not a type of database?",
    options: [
      {
        id: "0",
        options: "A",
        answer: "Hierarchical",
      },
      {
        id: "1",
        options: "B",
        answer: "Decentralized",
      },
      {
        id: "2",
        options: "C",
        answer: "Distributed",
      },
      {
        id: "0",
        options: "D",
        answer: "Network",
      },
    ],
    correctAnswerIndex: 1,
  },
  {
    question: "Which of the following is not a feature of DBMS?",
    options: [
      {
        id: "0",
        options: "A",
        answer: "Minimum Duplication and Redundancy of Data",
      },
      {
        id: "1",
        options: "B",
        answer: "High Level of Security",
      },
      {
        id: "2",
        options: "C",
        answer: "Single-user Access only"
        ,
      },
      {
        id: "0",
        options: "D",
        answer: "Support ACID Property",
      },
    ],
    correctAnswerIndex: 2,
  },
  {
    question: "Which of the following is not a function of the database?",
    options: [
      {
        id: "0",
        options: "A",
        answer: "Managing stored data",
      },
      {
        id: "1",
        options: "B",
        answer: "Manipulating data",
      },
      {
        id: "2",
        options: "C",
        answer: "Security for stored data",
      },
      {
        id: "0",
        options: "D",
        answer: "Analysing code",
      },
    ],
    correctAnswerIndex: 3,
  },
  {
    question: "What does an RDBMS consist of?",
    options: [
      {
        id: "0",
        options: "A",
        answer: "Collection of Records",
      },
      {
        id: "1",
        options: "B",
        answer: "Collection of Keys",
      },
      {
        id: "2",
        options: "C",
        answer: "Collection of Tables",
      },
      {
        id: "0",
        options: "D",
        answer: "Collection of Fields",
      },
    ],
    correctAnswerIndex: 2,
  },
  {
    question: "Which is not a feature of OOP in general definitions?",
    options: [
      {
        id: "0",
        options: "A",
        answer: "Efficient Code",
      },
      {
        id: "1",
        options: "B",
        answer: "Code reusability",
      },
      {
        id: "2",
        options: "C",
        answer: "Modularity",
      },
      {
        id: "0",
        options: "D",
        answer: "Duplicate/Redundant data",
      },
    ],
    correctAnswerIndex: 3,
  },
  {
    question: "Which feature of OOP indicates code reusability?",
    options: [
      {
        id: "0",
        options: "A",
        answer: "Abstraction",
      },
      {
        id: "1",
        options: "B",
        answer: "Polymorphism",
      },
      {
        id: "2",
        options: "C",
        answer: "Encapsulation",
      },
      {
        id: "0",
        options: "D",
        answer: "Inheritance",
      },
    ],
    correctAnswerIndex: 3,
  },
  {
    question: "Why Java is Partially OOP language?",
    options: [
      {
        id: "0",
        options: "A",
        answer: "It allows code to be written outside classes",
      },
      {
        id: "1",
        options: "B",
        answer: "It supports usual declaration of primitive data types",
      },
      {
        id: "2",
        options: "C",
        answer: "It does not support pointers",
      },
      {
        id: "0",
        options: "D",
        answer: "It doesn’t support all types of inheritance",
      },
    ],
    correctAnswerIndex: 1,
  },
  {
    question: "The feature by which one object can interact with another object is _______",
    options: [
      {
        id: "0",
        options: "A",
        answer: " Message reading",
      },
      {
        id: "1",
        options: "B",
        answer: "Message Passing",
      },
      {
        id: "2",
        options: "C",
        answer: "Data transfer",
      },
      {
        id: "0",
        options: "D",
        answer: "Data Binding",
      },
    ],
    correctAnswerIndex: 1,
  },
  {
    question: "Which of the following is not true about polymorphism?",
    options: [
      {
        id: "0",
        options: "A",
        answer: "Helps in redefining the same functionality",
      },
      {
        id: "1",
        options: "B",
        answer: "Increases overhead of function definition always",
      },
      {
        id: "2",
        options: "C",
        answer: "It is feature of OOP",
      },
      {
        id: "0",
        options: "D",
        answer: "Ease in readability of program",
      },
    ],
    correctAnswerIndex: 1,
  },
];

export default questions;
