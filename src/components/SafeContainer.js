import React, { useCallback } from "react";
import { SafeAreaView, StyleSheet, StatusBar, TouchableWithoutFeedback, Keyboard } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";

SplashScreen.preventAutoHideAsync();

export default function SafeContainer({ children }) {

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <LinearGradient colors={["#FAFFFF", "#FAFFFF"]} style={estilos.gradient}>
        <SafeAreaView style={estilos.container}>
          <StatusBar barStyle="dark-content" backgroundColor="#D3E8F9" />
          {children}
        </SafeAreaView>
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
}

const estilos = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight || 0,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
