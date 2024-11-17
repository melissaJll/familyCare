import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Mensagens from "./src/screens/Mensagens.js";
import Procurar from "./src/screens/Procurar.js";
import AdicionarMedicamento from "./src/screens/AdicionarMedicamento.js";
import AvaliarRelatorio from "./src/screens/AvaliarRelatorio.js";
import Calendario from "./src/screens/Calendario.js";
import Contatos from "./src/screens/Contatos.js";
import CriarRelatorio from "./src/screens/CriarRelatorio.js";
import Home from "./src/screens/Home.js";
import Medicamentos from "./src/screens/Medicamento.js";

const Stack = createStackNavigator(); // Criação do Stack Navigator

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" />
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Contatos" component={Contatos} />
        <Stack.Screen name="Calendario" component={Calendario} />
        <Stack.Screen name="Medicamentos" component={Medicamentos} />
        <Stack.Screen name="CriarRelatorio" component={CriarRelatorio} />
        <Stack.Screen name="Mensagens" component={Mensagens} />
        <Stack.Screen name="Procurar" component={Procurar} />
        <Stack.Screen name="AdicionarMedicamento" component={AdicionarMedicamento} />
        <Stack.Screen name="AvaliarRelatorio" component={AvaliarRelatorio} ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}