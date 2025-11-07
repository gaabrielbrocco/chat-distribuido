# Chat Realtime - ZipZop Cruz

Chat em tempo real distribuído usando WebSockets, Node.js e Redis.

## 🚀 Tecnologias

- ***Node.js*** - Runtime JavaScript
- ***Express*** - Framework web
- ***Socket.IO*** - Comunicação em tempo real
- ***Redis*** - Armazenamento de mensagens
- ***HTML/CSS/JS*** - Interface responsiva

## 📋 Pré-requisitos

- Node.js instalado
- Redis instalado e rodando

## 🔧 Instalação

1. **Clone o repositório:**
bash
git clone <seu-repositorio>
cd chat-realtime


2. **Instale as dependências:**
bash
npm install


3. **Suba o Redis via Docker:**
docker run -d --name redis -p 6379:6379 redis


4. **Inicie o Redis:**
bash
redis-server


6. **Inicie o servidor:**
bash
npm start
node server.js


8. **Acesse no navegador:**
http://localhost:3000


9. **Para limpar os dados:** 
redis-cli del chat:messages


## 📱 Funcionalidades

- ✅ Chat em tempo real
- ✅ Histórico de mensagens (últimas 20)
- ✅ Interface responsiva para mobile
- ✅ Identificação de usuários
- ✅ Horário das mensagens
- ✅ Persistência com Redis

## 🎯 Como usar

1. Abra o chat no navegador
2. Digite seu nome quando solicitado
3. Envie mensagens pressionando Enter
4. As mensagens aparecem em tempo real para todos os usuários conectados

## 📦 Estrutura do Projeto


chat-realtime/
├── server.js           # Servidor Node.js
├── public/
│   └── index.html     # Interface do chat
├── package.json
└── README.md


## 👥 Autores

Bruno Pasquetti - 1134141
Gabriel Brocco - 1135058
Pedro H. De Bortoli - 1129494


## 📄 Licença

Este projeto é livre para uso educacional.
