import { StatusBar } from "expo-status-bar";
import React from "react";

import Mensagens from "./src/screens/Mensagens.js";
import Procurar from "./src/screens/Procurar.js";




export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <Mensagens />
    </>
  );
}