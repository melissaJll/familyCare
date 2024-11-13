import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import SafeContainer from '../components/SafeContainer'; // Importar seu SafeContainer
import { FontAwesome } from "@expo/vector-icons";

export default function Home({ navigation }) {
  const handleNavigation = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <SafeContainer>
      <View style={styles.subcontainer}>
        <View style={styles.header}>
          <Text style={styles.titulo}>Home</Text>
          <Pressable>
            <FontAwesome name="bell" size={24} color="#4581D0" />
          </Pressable>
        </View>
        
        <View style={styles.buttonsContainer}>
          <Pressable style={({ pressed }) => [
                styles.button,
                { opacity: pressed ? 0.5 : 1 }, // Mudança de opacidade quando pressionado
              ]} onPress={() => handleNavigation("Contatos")}>
            <Text style={styles.buttonText}>Chat</Text>
          </Pressable>
          <Pressable style={styles.button} >
            <Text style={styles.buttonText} onPress={() => handleNavigation("Calendario")}>Calendário</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={() => handleNavigation("Medicamentos")}>
            <Text style={styles.buttonText}>Medicamentos</Text>
          </Pressable>
          <Pressable style={styles.button} >
            <Text style={styles.buttonText} onPress={() => handleNavigation("CriarRelatorio")}>Relatório</Text>
          </Pressable>
 
        </View>
      </View>
    </SafeContainer>
  );
}

const styles = StyleSheet.create({
  subcontainer: {
    flex: 1,
    width: "100%",
  },
  header: {
    backgroundColor: "#FAFFFF",
    width: "100%",
    height: 60,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    margin: 5
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#4581D0",
  },
  buttonsContainer: {
    flex: 1,
    alignItems: "center",
  },
  button: {
    backgroundColor: "#FAFFFF",
    padding: 20,
    margin: 10,
    borderRadius: 16,
    width: "90%", 
    height: 110,
    justifyContent: "center",
    shadowColor: "#1A4389",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 3, // Para Android
  },
  buttonText: {
    fontSize: 28,
    color: "#4581D0",
    fontWeight: "600",
  },
});
