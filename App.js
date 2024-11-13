import { StatusBar } from "expo-status-bar";
import React from "react";

import Mensagens from "./src/screens/Mensagens.js";
import Procurar from "./src/screens/Procurar.js";
import AdicionarMedicamento from "./src/screens/AdicionarMedicamento.js";
import Calendario from "./src/screens/Calendario.js";
import Contatos from "./src/screens/Contatos.js";
import CriarRelatorio from "./src/screens/CriarRelatorio.js";
import Home from "./src/screens/Home.js";
import Medicamentos from "./src/screens/Medicamento.js";




export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      {/* <Mensagens /> */}
      {/* <AdicionarMedicamento /> */}
      {/* <Calendario /> */}
      {/* <Contatos /> */}
      {/* <CriarRelatorio/> */}
      <Home/>
      {/* <Medicamentos/> */}
    </>
  );
}