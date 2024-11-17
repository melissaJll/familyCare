import {
    Image,
    StyleSheet,
    Text,
    TextInput,
    Pressable,
    View,
  } from "react-native";
  import React from "react";
  import SafeContainer from "../components/SafeContainer";
  import { FontAwesome } from "@expo/vector-icons";
  
  export default function Mensagens() {
    return (
      <SafeContainer>
        <View style={styles.subcontainer}>
          <View style={styles.header}>
            <Text style={styles.titulo}>Joana</Text>
            <View style={styles.imageWrapper}>
              <Image
                source={require("../../assets/images/avatar1.png")}
                style={styles.fotoPerfil}
              />
            </View>
          </View>
  
          <View style={styles.campoMensagensEsquerda}>
            <Text style={styles.mensagem}>
              Bom dia! Estou com a Dona Maria e ela está se sentindo bem hoje. 😊
            </Text>
          </View>
  
          <View style={styles.campoMensagensDireita}>
            <Text style={styles.mensagem}>
              Bom dia, Joana! Que ótimo saber, obrigada por avisar!
            </Text>
          </View>
  
          <View style={styles.campoMensagensEsquerda}>
            <Text style={styles.mensagem}>
              Hoje vou acompanhá-la no passeio da manhã e manterei vocês informados.
            </Text>
          </View>
  
          <View style={styles.campoMensagensDireita}>
            <Text style={styles.mensagem}>
              Agradecemos muito, Joana! Esse acompanhamento nos traz muita tranquilidade.
            </Text>
          </View>
  
          <View style={styles.campoMensagensEsquerda}>
            <Text style={styles.mensagem}>
              Fico feliz em ajudar! Vou mandando atualizações ao longo do dia.
            </Text>
          </View>
  
          <View style={styles.campoMensagensDireita}>
            <Text style={styles.mensagem}>
              É ótimo vê-la aproveitando as atividades.
            </Text>
          </View>
  
          <View style={styles.campoTexto}>
            <View style={styles.inputContainer}>
              <TextInput
                placeholder="Digite uma mensagem"
                style={styles.textInput}
              />
              <Pressable style={styles.iconContainer}>
                <FontAwesome name="microphone" size={24} color="#4581D0" />
              </Pressable>
            </View>
            <Pressable style={styles.sendButton}>
              <FontAwesome name="paper-plane" size={24} color="#4581D0" />
            </Pressable>
          </View>
        </View>
      </SafeContainer>
    );
  }
  
  const styles = StyleSheet.create({
    subcontainer: {
      flex: 1,
      width: "100%",
    },
    titulo: {
      fontSize: 24,
      fontWeight: "bold",
      color: "white",
    },
    imageWrapper: {
      borderWidth: 2,
      borderRadius: 50,
      backgroundColor: "#EEEEEE",
    },
    inputContainer: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "#f2f6f7",
      borderRadius: 10,
      paddingHorizontal: 10,
      flex: 1, // Expande o container para ocupar a largura disponível
    },
    textInput: {
      flex: 1,
      backgroundColor: "#f2f6f7",
      height: 60,
      paddingHorizontal: 15,
      borderRadius: 5,
      marginHorizontal: 8,
    },
    campoTexto: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      padding: 10,
      marginVertical: 30
    },
    iconContainer: {
      padding: 8,
    },
    sendButton: {
      marginLeft: 10,
      backgroundColor: "#f2f6f7",
      borderRadius: 50,
      padding: 15,
    },
    campoMensagensDireita: {
      backgroundColor: "#EAF5FF",
      width: "auto",
      maxWidth: "60%",
      marginTop: 30,
      marginRight: 10,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      borderBottomLeftRadius: 10,
      alignSelf: "flex-end",
      shadowColor: "#1A4389",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.15,
      shadowRadius: 4,
      elevation: 3,
    },
    campoMensagensEsquerda: {
      backgroundColor: "#BEE2FF",
      width: "auto",
      maxWidth: "60%",
      height: "auto",
      marginTop: 30,
      marginLeft: 10,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      borderBottomRightRadius: 10,
      shadowColor: "#1A4389",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.15,
      shadowRadius: 4,
      elevation: 3,
    },
    mensagem: {
      fontSize: 18,
      paddingHorizontal: 10,
      marginTop: 7,
      marginBottom: 5,
      color: "#2C6094",
    },
    header: {
      backgroundColor: "#4581D0",
      width: "100%",
      height: 70,
      justifyContent: "space-between",
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: 15,
    },
    fotoPerfil: {
      width: 35,
      height: 35,
      borderRadius: 50,
    },
  });
  