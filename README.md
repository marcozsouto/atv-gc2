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

## Executar vagrant

Primeiro você deve ter o vagrant e virtualbox instalados em sua maquina
após isso deve se executar o seguinte comando

```bash
  vagrant up
```

Caso os ips default já estejam sendo usados você pode mudar os ips no arquivo Vagrantfile
Para logar na maquina você deve usar o seguinte comando

```bash
  vagrant ssh vm1
```

e rode o comando curl para testar

```bash
  curl http://<ip_address_vm2>:<port_from_env>/films
```
