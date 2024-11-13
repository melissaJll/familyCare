import { StatusBar } from "expo-status-bar";
import React from "react";

import Mensagens from "./src/screens/Mensagens.js";
import Procurar from "./src/screens/Procurar.js";
import Contatos from "./src/screens/Contatos.js";

import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";


export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      {/* <Home /> */}
      {/* <Procurar /> */}
      {/* <Mensagens /> */}
      <Contatos />
    </>
  );
}