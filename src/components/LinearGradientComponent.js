import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
export default function LinearGradientComponent({ children }) {
  return (
      <LinearGradient colors={["#F4FAFE", "#ADC1D1"]} style={estilos.gradient}>
        {children}
      </LinearGradient>
  );
}
const estilos = StyleSheet.create({
  container: {
    paddingLeft: 0,
    paddingRight: 0,
    flex: 1,
  },
  gradient: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});