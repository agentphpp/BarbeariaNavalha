# Barbearia Navalha

Aplicativo desenvolvido com React Native + Expo para uma barbearia.

## Requisitos

Antes de rodar o projeto, certifique-se de ter instalado:

- Node.js
- npm
- Expo CLI

## Instalar dependências

Na pasta do projeto, execute:

```bash
npm install
```

Se quiser instalar explicitamente as dependências principais usadas pelo projeto, rode:

```bash
npm install @react-navigation/native @react-navigation/native-stack react-native-screens react-native-safe-area-context react-native-gesture-handler react-native-reanimated
```

## Rodar o projeto

Para abrir o projeto no navegador:

```bash
npx expo start --web --clear
```

Se preferir rodar em dispositivo ou emulador, pode usar:

```bash
npx expo start
```

## Estrutura principal

- App.js: ponto inicial da aplicação
- screens/: telas do app
- components/: componentes reutilizáveis
- services/: integração com API
