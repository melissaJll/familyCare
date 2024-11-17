import React, { useState } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { Calendar } from "react-native-calendars";
import SafeContainer from "../components/SafeContainer"; // Importa o SafeContainer

export default function Calendario({ navigation }) {
  const [selectedDate, setSelectedDate] = useState('');

  const onDayPress = (day) => {
    setSelectedDate(day.dateString);
  };

  const handleIrParaRelatorio = () => {
    if (selectedDate) {
      navigation.navigate('AvaliarRelatorio', { data: selectedDate });
    } else {
      alert("Por favor, selecione uma data.");
    }
  };

  return (
    <SafeContainer>
      <View style={styles.subcontainer}>
        <Text style={styles.titulo}>Selecionar Data do Relatório</Text>
        <Calendar
          onDayPress={onDayPress}
          markedDates={{ [selectedDate]: { selected: true, color: '#0A67C4' } }}
          style={styles.calendar}
        />
        <Pressable style={styles.saveButton} onPress={handleIrParaRelatorio}>
          <Text style={styles.saveButtonText}>Ir para Relatório</Text>
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
    textAlign: "center",
  },
  calendar: {
    marginBottom: 20,
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
