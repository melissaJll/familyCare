import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Pressable, Switch } from "react-native";
import SafeContainer from "../components/SafeContainer"; // Importa o SafeContainer

export default function AdicionarMedicamento({ navigation }) {
  const [nome, setNome] = useState("");
  const [dosagem, setDosagem] = useState("");
  const [horario, setHorario] = useState("");
  const [jejum, setJejum] = useState(false);
  const [usoContinuo, setUsoContinuo] = useState(false);
  const [instrucoes, setInstrucoes] = useState("");

  const handleSalvar = () => {
    // salvamento do medicamento (backend ou atualizar estado global)
    navigation.goBack();
  };

  return (
    <SafeContainer>
      <View style={styles.subcontainer}>
        <Text style={styles.titulo}>Adicionar Medicamento</Text>

        <Text style={styles.label}>Nome do Medicamento</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o nome"
          value={nome}
          onChangeText={setNome}
        />

        <Text style={styles.label}>Dosagem</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: 500 mg"
          value={dosagem}
          onChangeText={setDosagem}
        />

        <Text style={styles.label}>Horário</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: 08:00"
          value={horario}
          onChangeText={setHorario}
        />

        <View style={styles.switchContainer}>
          <Text style={styles.label}>Necessita Jejum</Text>
          <Switch value={jejum} onValueChange={setJejum} />
        </View>

        <View style={styles.switchContainer}>
          <Text style={styles.label}>Uso Contínuo</Text>
          <Switch value={usoContinuo} onValueChange={setUsoContinuo} />
        </View>

        <Text style={styles.label}>Instruções</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Instruções adicionais"
          value={instrucoes}
          onChangeText={setInstrucoes}
          multiline
        />

        <Pressable style={styles.saveButton} onPress={handleSalvar}>
          <Text style={styles.saveButtonText}>Salvar Medicamento</Text>
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
  label: {
    fontSize: 16,
    color: "#0A67C4",
    fontWeight: "600",
    marginBottom: 8,
  },
  input: {
    backgroundColor: "#F7FDFF",
    padding: 12,
    borderRadius: 8,
    fontSize: 16,
    marginBottom: 15,
    borderColor: "#D3E8F9",
    borderWidth: 1,
  },
  textArea: {
    height: 80,
    textAlignVertical: "top",
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  saveButton: {
    backgroundColor: "#0A67C4",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },
  saveButtonText: {
    color: "#FAFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
});
