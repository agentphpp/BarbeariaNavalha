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


Instalar o pacote Expo
```bash
npx expo install @react-navigation/stack react-native-gesture-handler
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

# Cliente
## Tela Inicial
<br>
<img width="569" height="654" alt="image" src="https://github.com/user-attachments/assets/595031c6-2939-4d8f-9057-2d2448b698e1" />

## Tela Login Cliente
<br>
<img width="591" height="651" alt="image" src="https://github.com/user-attachments/assets/06f1dc89-d3b4-410b-9070-847d44a920aa" />

## Tela Home Cliente
<br>
<img width="493" height="632" alt="image" src="https://github.com/user-attachments/assets/9c68d45f-8466-4f1e-9b42-722d840c509d" />

# Barbeiro
## Tela Login Barbeiro
<br>
<img width="435" height="610" alt="image" src="https://github.com/user-attachments/assets/1aebc246-f70c-4929-afad-91e601380b33" />

## Tela Home Barbeiro
<br>
<img width="464" height="604" alt="image" src="https://github.com/user-attachments/assets/eacc1621-516e-4d3e-93bb-e693ce67c1c6" />


## Estrutura principal

- App.js: ponto inicial da aplicação
- screens/: telas do app
- components/: componentes reutilizáveis
- services/: integração com API
