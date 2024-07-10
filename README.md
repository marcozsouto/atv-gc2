# Atividade GC2

API de films utilizando o github flow

## Documentação da API

#### Requisitos

```http
  "node": "^20.11.21"
```

#### Retorna todos os itens

```http
  GET http://localhost:3001/films
```

#### Cadastra um item

```http
  POST http://localhost:3001/films
```

| Parâmetro | Tipo     | Descrição                        |
| :-------- | :------- | :------------------------------- |
| `name`    | `string` | **Obrigatório**. O nome do filme |

#### Remover Item

```http
  DELETE http://localhost:3001/films/id
```

## Instalação

Instale utilizando os seguintes comandos

```bash
  npm install
  npm run build
```

## Execute

Execute

```bash
  npm start
```
