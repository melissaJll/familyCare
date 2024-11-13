import React from "react";
import { StyleSheet, Text, View, Pressable, FlatList } from "react-native";
import SafeContainer from "../components/SafeContainer"; // Importa o componente SafeContainer
import { FontAwesome } from "@expo/vector-icons";

// Dados fictícios para os medicamentos
const medicamentos = [
  {
    id: "1",
    nome: "Paracetamol",
    jejum: "Sem jejum",
    horario: "08:00",
    dosagem: "500 mg",
    usoContinuo: true,
    instrucoes: "Tomar com água",
  },
  {
    id: "2",
    nome: "Vitamina D",
    jejum: "Com jejum",
    horario: "12:00",
    dosagem: "1000 UI",
    usoContinuo: false,
    instrucoes: "Tomar antes das refeições",
  },
  {
    id: "3",
    nome: "Ibuprofeno",
    jejum: "Sem jejum",
    horario: "18:00",
    dosagem: "200 mg",
    usoContinuo: true,
    instrucoes: "Tomar após o jantar",
  },
];

export default function Medicamentos({ navigation }) {
  const handleAddMedicamento = () => {
    navigation.navigate("AdicionarMedicamento");
  };

  return (
    <SafeContainer>
      <View style={styles.subcontainer}>
        <Text style={styles.titulo}>Medicamentos</Text>

        <FlatList
          data={medicamentos}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.medicamentoContainer}>
              <View style={styles.medicamentoInfo}>
                <Text style={styles.nome}>{item.nome}</Text>
                <Text style={styles.detalhes}>
                  <Text style={styles.label}>Horário:</Text> {item.horario} |{" "}
                  <Text style={styles.label}>Dosagem:</Text> {item.dosagem}
                </Text>
                <Text style={styles.detalhes}>
                  <Text style={styles.label}>Jejum:</Text> {item.jejum} |{" "}
                  <Text style={styles.label}>Uso Contínuo:</Text>{" "}
                  {item.usoContinuo ? "Sim" : "Não"}
                </Text>
                <Text style={styles.instrucoes}>
                  <Text style={styles.label}>Instruções:</Text> {item.instrucoes}
                </Text>
              </View>
            </View>
          )}
        />

        <Pressable style={styles.addButton} onPress={handleAddMedicamento}>
          <FontAwesome name="plus" size={20} color="#FAFFFF" />
          <Text style={styles.addButtonText}>Adicionar Medicamento</Text>
        </Pressable>
      </View>
    </SafeContainer>
  );
}

const styles = StyleSheet.create({
  subcontainer: {
    flex: 1,
    width: "100%",
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#0A67C4",
    marginBottom: 20,
  },
  medicamentoContainer: {
    backgroundColor: "#F7FDFF",
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    shadowColor: "#1A4389",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  medicamentoInfo: {
    flexDirection: "column",
  },
  nome: {
    fontSize: 20,
    fontWeight: "700",
    color: "#0A67C4",
  },
  detalhes: {
    fontSize: 16,
    color: "#4581D0",
    marginVertical: 3,
  },
  instrucoes: {
    fontSize: 14,
    color: "#2D84DA",
    marginVertical: 2,
  },
  label: {
    fontWeight: "600",
    color: "#0A67C4",
  },
  addButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0A67C4",
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  addButtonText: {
    color: "#FAFFFF",
    fontSize: 16,
    fontWeight: "600",
    marginLeft: 10,
  },
});
