
# Guia de Instalação do Projeto com Expo e React Native

## Pré-requisitos

1. **Instalar o Node.js**:

   - Baixe o instalador do [Node.js](https://nodejs.org/) e siga as instruções de instalação.

2. **Instalar o Expo CLI**:

   - O Expo CLI é necessário para criar e gerenciar seu projeto Expo.

   ```bash
   npm install -g expo-cli

   npm uninstall -g expo-cli


   npm install expo

   ```

## Criar um Novo Projeto

1. **Criar um novo projeto**:

   - Use o seguinte comando para criar um novo projeto com o Expo:

   ```bash
   npx create-expo-app nome-do-seu-projeto
   ```

2. **Navegar até o diretório do projeto**:

   ```bash
   cd nome-do-seu-projeto
   ```

3. **Instalar as dependências necessárias**:
   - Dependências do React Navigation:
   ```bash
   npm install @react-navigation/native @react-navigation/native-stack
   ```
   - Dependências adicionais para React Navigation:
   ```bash
   npm install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
   ```
   - Instalar ícones FontAwesome:
   ```bash
   npm install @expo/vector-icons
   ```
   - Instalar splash screen (se necessário):
   ```bash
   expo install expo-splash-screen
   ```
   - Instalar linear gradient (se necessário):
   ```bash
   expo install expo-linear-gradient
   ```

## Executar o Projeto

1. **Iniciar o projeto**:
   - Execute o seguinte comando para iniciar o servidor de desenvolvimento:
   ```bash
   npx expo start
   ```

## Resumo dos Comandos

```bash
npm install -g expo-cli
npx create-expo-app nome-do-seu-projeto
cd nome-do-seu-projeto
npx expo start

npm install @react-navigation/native @react-navigation/native-stack
npm install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
npm install @expo/vector-icons
expo install expo-splash-screen
expo install expo-linear-gradient

npm install react-native-calendars


```

- Para fazer o teclado desaparecer ao clicar em qualquer lugar fora do TextInput (ou TextArea), você pode usar um TouchableWithoutFeedback para capturar toques fora do campo de entrada. Quando o usuário clica fora do campo, você pode chamar a função Keyboard.dismiss() para ocultar o teclado.

- TouchableWithoutFeedback: Este componente envolve todo o conteúdo da tela e permite que você capture toques que não estão em um componente específico. Quando o usuário toca em qualquer lugar da tela, a função definida em onPress é chamada.

- Keyboard.dismiss(): Esta função é chamada sempre que o usuário toca fora do TextInput, fechando o teclado.

## Build

Passos para Usar o EAS Build
Instalar EAS CLI: Se você ainda não tiver o EAS CLI instalado, você pode fazer isso com o seguinte comando:

bash
Copiar código
npm install -g eas-cli
Configurar seu Projeto: Navegue até o diretório do seu projeto e configure o EAS:

bash
Copiar código
cd nome-do-seu-projeto
eas build:configure
Durante a configuração, o EAS CLI irá fazer algumas perguntas e preparar seu projeto para builds. Ele criará um arquivo chamado eas.json que contém as configurações de build.

Executar o Build: Agora você pode iniciar o build para Android (ou iOS, se desejar) com o seguinte comando:

bash
Copiar código
eas build -p android
Para iOS, o comando seria:

bash
Copiar código
eas build -p ios
Acompanhar o Progresso do Build: Após executar o comando, você verá informações sobre o progresso do build no terminal. O EAS Build pode levar algum tempo, dependendo do tamanho do seu aplicativo e da carga no servidor do Expo.

Baixar o Build: Uma vez que o build estiver completo, você receberá um link para baixar o APK (ou IPA, no caso do iOS).

Nota sobre a Conta Expo
Para usar o EAS Build, você precisará de uma conta no Expo. Se você não estiver logado, o EAS CLI solicitará que você faça login. Certifique-se de que sua conta esteja configurada corretamente para evitar problemas durante o build.

Exemplo Completo
Aqui está um resumo dos comandos que você deve executar:

bash
Copiar código
# Navegar até o diretório do projeto
cd nome-do-seu-projeto

# Instalar EAS CLI (se ainda não estiver instalado)
npm install -g eas-cli

# Configurar EAS Build
eas build:configure

# Iniciar o build para Android
eas build -p android


Passos para Usar o EAS Build
Instalar EAS CLI: Se você ainda não tiver o EAS CLI instalado, você pode fazer isso com o seguinte comando:

bash
Copiar código
npm install -g eas-cli
Configurar seu Projeto: Navegue até o diretório do seu projeto e configure o EAS:

bash
Copiar código
cd nome-do-seu-projeto
eas build:configure

Durante a configuração, o EAS CLI irá fazer algumas perguntas e preparar seu projeto para builds. Ele criará um arquivo chamado eas.json que contém as configurações de build.

Executar o Build: Agora você pode iniciar o build para Android (ou iOS, se desejar) com o seguinte comando:

bash
Copiar código
eas build -p android
Para iOS, o comando seria:

bash
Copiar código
eas build -p ios
Acompanhar o Progresso do Build: Após executar o comando, você verá informações sobre o progresso do build no terminal. O EAS Build pode levar algum tempo, dependendo do tamanho do seu aplicativo e da carga no servidor do Expo.

Baixar o Build: Uma vez que o build estiver completo, você receberá um link para baixar o APK (ou IPA, no caso do iOS).

Nota sobre a Conta Expo
Para usar o EAS Build, você precisará de uma conta no Expo. Se você não estiver logado, o EAS CLI solicitará que você faça login. Certifique-se de que sua conta esteja configurada corretamente para evitar problemas durante o build.

Exemplo Completo
Aqui está um resumo dos comandos que você deve executar:

bash
Copiar código
## Navegar até o diretório do projeto
cd nome-do-seu-projeto

## Instalar EAS CLI (se ainda não estiver instalado)
npm install -g eas-cli

## Configurar EAS Build
eas build:configure

## Iniciar o build para Android
eas build -p android

