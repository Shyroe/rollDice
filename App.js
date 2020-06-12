import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import Main from "./src/components/Main";

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" />
      <Main />
    </>
  );
}
