import {
    Image,
    StyleSheet,
    Text,
    View,
    FlatList,
    Pressable,
  } from "react-native";
  import React from "react";
  import SafeContainer from '../components/SafeContainer'
  import { FontAwesome } from "@expo/vector-icons";
  
  // Dados fictícios para os contatos
  const contatos = [
    {
      id: "1",
      nome: "Joana",
      ultimaMensagem: "Bom dia, já estou a caminho",
      foto: require("../../assets/images/avatar1.png"),
    },
    {
      id: "2",
      nome: "Suporte",
      ultimaMensagem: "Se precisar de mais alguma coisa estamos semp...",
      foto: require("../../assets/images/Services.png"),
    },
    {
      id: "3",
      nome: "Ana",
      ultimaMensagem: "Nos vemos mais tarde!",
      foto: require("../../assets/images/avatar1.png"),
    },
    // Adicione mais contatos conforme necessário
  ];
  
  export default function Contatos({navigation}) {
    return (
      <SafeContainer>
        <View style={styles.subcontainer}>
          <View style={styles.header}>
            <Text style={styles.titulo}>Contatos</Text>
            <Pressable>
              <FontAwesome name="bell" size={24} color="#4581D0" />
            </Pressable>
          </View>
  
          <FlatList
            data={contatos}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Pressable style={({ pressed }) => [
                  styles.contato,
                  { opacity: pressed ? 0.6  : 1 }, // Mudança de opacidade quando pressionado
                ]}
                onPress={() => navigation.navigate("Mensagens")}
              >
                <Image source={item.foto} style={styles.fotoPerfil} />
                <View style={styles.info}>
                  <Text style={styles.nome}>{item.nome}</Text>
                  <Text style={styles.ultimaMensagem}>{item.ultimaMensagem}</Text>
                </View>
              </Pressable>
            )}
          />
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
      backgroundColor: "#2D84DA",
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
    contato: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "#F7FDFF",
      padding: 18,
      marginHorizontal: 10,
      marginVertical: 10,
      borderRadius: 16, // Borda arredondada
      shadowColor: "#1A4389",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 3, // Para Android
    },
    fotoPerfil: {
      width: 50,
      height: 50,
      borderRadius: 25,
      marginRight: 15,
    },
    info: {
      flex: 1,
    },
    nome: {
      fontSize: 18,
      fontWeight: "600",
      color: "#4581D0",
    },
    ultimaMensagem: {
      fontSize: 14,
      color: "#4581D0",
      opacity: 0.7, // Para deixar a última mensagem um pouco mais clara
    },
  });
  