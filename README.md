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

e rode o comando para gerar as chaves ssh

```bash
  ssh-keygen
```

Copiando a chave pública para os nós gerenciados:

```bash
  ssh-copy-id vagrant@192.168.56.10
```

testar comunicação:

```bash
  cd /vagrant_data
  ansible servidores -i inventory.ini -m ping
```

Copiando a chave pública para os nós gerenciados:

```bash
  cd /vagrant_data
  ansible-playbook -i inventory.ini configurar-node.yml
```

Teste que esta com o node instalando na vm2 (abra outro terminal ou saia do atual):

```bash
  vagrant ssh vm2
  node --version
  npm --version
```

se tudo deu certo seu console deve ter printado a versão do node e do npm, caso você quera executar a aplicação:

```bash
  cd /vagrant_data
  npm install
  npm run start:dev
```

se quiser testar volte a vm1

```bash
  vagrant ssh vm1
  curl http://192.168.56.10:3001/films
```