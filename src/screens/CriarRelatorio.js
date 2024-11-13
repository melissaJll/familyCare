import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import SafeContainer from "../components/SafeContainer"; // Importa o SafeContainer

export default function CriarRelatorio({ navigation }) {
  const [condicaoGeral, setCondicaoGeral] = useState("");
  const [observacoes, setObservacoes] = useState("");

  // Função para formatar a data
  const formatarData = (data) => {
    const opcoes = { day: 'numeric', month: 'long', year: 'numeric' };
    return data.toLocaleDateString('pt-BR', opcoes); // Formato para português
  };
  const dataAtual = new Date(); // Obtém a data atual
  const dataFormatada = formatarData(dataAtual); // Formata a data


  const handleSalvar = () => {
    // salvamento do relatório 
    navigation.goBack();
  };

  return (
    <SafeContainer>
      <View style={styles.subcontainer}>
        <Text style={styles.titulo}>Relatório Diário – {dataFormatada}</Text>

        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>Nome do Idoso: João</Text>
          <Text style={styles.infoText}>Cuidador: Lara Cardoso</Text>
          <Text style={styles.infoText}>Horário de atendimento: 08h00 - 18h00</Text>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Condição Geral</Text>
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Digite a condição geral do idoso..."
            value={condicaoGeral}
            onChangeText={setCondicaoGeral}
            multiline
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Observações Adicionais:</Text>
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Adicione observações adicionais..."
            value={observacoes}
            onChangeText={setObservacoes}
            multiline
          />
        </View>

        <Pressable style={styles.saveButton} onPress={handleSalvar}>
          <Text style={styles.saveButtonText}>Salvar Relatório</Text>
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
    textAlign: "center", // Centraliza o título
  },
  infoContainer: {
    marginBottom: 20,
  },
  infoText: {
    fontSize: 16,
    color: "#0A67C4",
    marginBottom: 4,
  },
  inputContainer: {
    marginBottom: 15,
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
    borderColor: "#D3E8F9",
    borderWidth: 1,
  },
  textArea: {
    height: 150,
    textAlignVertical: "top",
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
