# 🚀 User Management API

API REST para **gestão de usuários** com autenticação JWT, desenvolvida em **Node.js** seguindo boas práticas de back-end.

Este projeto foi criado com foco em **organização de código**, **segurança**, **padrões REST** e **pronto para produção**, sendo ideal para portfólio e aplicações reais.

---

## 🛠️ Tecnologias Utilizadas

* **Node.js**
* **Express**
* **Sequelize** (ORM)
* **MySQL / PostgreSQL** (compatível)
* **JWT (JSON Web Token)**
* **bcryptjs** (hash de senhas)
* **dotenv**

---

## 📂 Estrutura do Projeto

```
user-management-api/
├── src/
│   ├── controllers/
│   ├── database/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── app.js
│   └── server.js
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

---

## 🔐 Autenticação

A API utiliza **JWT** para autenticação.

Após o login, um token é gerado e deve ser enviado no header das requisições protegidas:

```
Authorization: Bearer SEU_TOKEN_AQUI
```

---

## 📌 Rotas da API

### 🔑 Autenticação

#### Registrar usuário

```
POST /auth/register
```

**Body:**

```json
{
  "name": "João",
  "email": "joao@email.com",
  "password": "123456"
}
```

---

#### Login

```
POST /auth/login
```

**Body:**

```json
{
  "email": "joao@email.com",
  "password": "123456"
}
```

**Resposta:**

```json
{
  "token": "jwt_token_aqui"
}
```

---

### 👤 Usuário

#### Buscar usuário autenticado

```
GET /users/me
```

🔒 **Rota protegida**

**Resposta:**

```json
{
  "id": 1,
  "name": "João",
  "email": "joao@email.com",
  "createdAt": "2026-02-24T21:42:40.000Z"
}
```

---

### ❤️ Health Check

```
GET /health
```

**Resposta:**

```json
{
  "status": "ok"
}
```

---

## ⚙️ Variáveis de Ambiente

Crie um arquivo **.env** na raiz do projeto:

```
PORT=3000
JWT_SECRET=sua_chave_secreta
DB_HOST=localhost
DB_USER=seu_usuario
DB_PASS=sua_senha
DB_NAME=user_management
DB_DIALECT=mysql
```

📌 **O arquivo `.env` não é versionado**, garantindo segurança.

---

## ▶️ Como Rodar o Projeto

```bash
# instalar dependências
npm install

# rodar o servidor
npm run dev
```

Servidor disponível em:

```
http://localhost:3000
```

---

## ✅ Boas Práticas Aplicadas

* Hash de senha com bcrypt
* Autenticação JWT
* Middleware de autenticação
* Separação de responsabilidades
* Padrão REST
* Variáveis sensíveis protegidas

---

## 📌 Próximas Melhorias (Roadmap)

* [ ] Validação de dados (Zod)
* [ ] Refresh Token
* [ ] Paginação de usuários
* [ ] Testes automatizados
* [ ] Docker

---

## 👨‍💻 Autor

**João Kelvin**
Desenvolvedor Back-end

🔗 GitHub: [https://github.com/JoaoKelvinDev](https://github.com/JoaoKelvinDev)

---

⭐ Se esse projeto te ajudou, considere deixar uma estrela!
