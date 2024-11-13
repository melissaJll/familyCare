import { SafeAreaView, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import { useCallback } from "react";

export default function SafeContainer({ children }) {
  return (
    <SafeAreaView style={estilos.container} onLayout={aoAtualizarLayout}>
        {children}
    </SafeAreaView>
  );
}
const estilos = StyleSheet.create({
  container: {
    paddingLeft: 0,
    paddingRight: 0,
    flex: 1,
  },
});