import React, { useState } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import SafeContainer from "../components/SafeContainer"; // Importa o SafeContainer

export default function AvaliarRelatorio({ navigation }) {
  const [avaliacao, setAvaliacao] = useState(null); // Estado para a avaliação

  // Função para formatar a data.
  const formatarData = (data) => {
    const opcoes = { day: "numeric", month: "long", year: "numeric" };
    return data.toLocaleDateString("pt-BR", opcoes); // Formato para português
  };
  const dataAtual = new Date(); // Obtém a data atual
  const dataFormatada = formatarData(dataAtual); // Formata a data

  const handleAvaliar = (nota) => {
    setAvaliacao(nota);
  };
  
  const salvar = () => {
    navigation.goBack();
    // Você pode adicionar lógica adicional aqui, como salvar a avaliação.
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

        <View style={styles.textContainer}>
            <Text style={styles.label}>Condição Geral:</Text>
            <Text style={styles.text}>
                O idoso apresentou bom estado geral, sem queixas significativas. Mostrou-se
                ativo durante o dia, mantendo boa interação com o cuidador. Nenhuma
                anormalidade foi observada durante a aferição dos sinais vitais.
            </Text>
            </View>

            <View style={styles.textContainer}>
            <Text style={styles.label}>Observações Adicionais:</Text>
            <Text style={styles.text}>
                Participou das atividades diárias com disposição. Alimentação ocorreu
                normalmente, com boa aceitação de todos os alimentos oferecidos. Demonstrou
                interesse em assistir TV e interagir com familiares durante o período da
                tarde.
            </Text>
        </View>


        <Text style={styles.label}>De 1 a 5, sendo 5-Excelente e 1-péssimo, avalie seu cuidador</Text>
        <View style={styles.ratingContainer}>
          {[1, 2, 3, 4, 5].map((nota) => (
            <Pressable
              key={nota}
              style={[
                styles.ratingButton,
                avaliacao === nota && styles.selectedButton,
              ]}
              onPress={() => handleAvaliar(nota)}
            >
              <Text
                style={[
                  styles.ratingButtonText,
                  avaliacao === nota && styles.selectedButtonText,
                ]}
              >
                {nota}
              </Text>
            </Pressable>
          ))}
        </View>

        <Pressable style={styles.saveButton} onPress={salvar}>
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
    marginBottom: 22,
  },
  infoText: {
    fontSize: 16,
    color: "#0A67C4",
    marginBottom: 4,
  },
  textContainer: {
    marginBottom: 25,

  },
  label: {
    fontSize: 20,
    color: "#0A67C4",
    fontWeight: "600",
    marginBottom: 8,
    marginTop: 15
  },
  text: {
    color: "#4173A5",
    fontSize: 16
  },
  ratingContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  ratingButton: {
    width: 50,
    height: 50,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#0A67C4",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
  },
  ratingButtonText: {
    fontSize: 18,
    color: "#0A67C4",
    fontWeight: "600",
  },
  selectedButton: {
    backgroundColor: "#0A67C4",
  },
  selectedButtonText: {
    color: "#FFFFFF",
  },

  saveButton: {
    backgroundColor: "#0A67C4",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 30,
  },
  saveButtonText: {
    color: "#FAFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
});
