# Chat Realtime - ZipZop Cruz

Aplicação de chat em tempo real distribuída, desenvolvida com Node.js, Socket.IO e Redis, que possibilita a comunicação instantânea entre usuários conectados. O sistema garante a sincronização imediata das mensagens e a persistência das últimas conversas, assegurando continuidade e disponibilidade no histórico de interações.

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

**1. Clone o repositório:**
```bash
git clone <seu-repositorio>
cd chat-realtime
```

**2. Instale as dependências:**
```bash
bash
npm install
```

**3. Suba o Redis via Docker:**
```bash
docker run -d --name redis -p 6379:6379 redis
```

**4. Inicie o Redis:**
```bash
bash
redis-server
```

**6. Inicie o servidor:**
```bash
bash
npm start
node server.js
```

**8. Acesse no navegador:**
```bash
http://localhost:3000
```

**9. Para limpar os dados:** 
```bash
redis-cli del chat:messages
```

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

```bash
chat-realtime/
├── server.js           # Servidor Node.js
├── public/
│   └── index.html     # Interface do chat
├── package.json
└── README.md
```

## 👥 Autores

* **Bruno da Motta Pasquetti** - 1334141  
* **Gabriel Brocco de Oliveira** - 1135058  
* **Pedro Henrique De Bortoli** - 1129494  


## 📄 Licença

Este projeto é livre para uso educacional.
