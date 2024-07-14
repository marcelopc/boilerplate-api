# Node.js API com Arquitetura Hexagonal

Este projeto é uma API Node.js estruturada seguindo a arquitetura hexagonal, utilizando TypeScript, Express, Sequelize, Zod, e outras ferramentas modernas.

## Tecnologias Utilizadas

- **Node.js**: Plataforma para execução de JavaScript no lado do servidor.
- **TypeScript**: Superset de JavaScript que adiciona tipos estáticos.
- **Express**: Framework web para Node.js.
- **Sequelize**: ORM para Node.js, suportando diversos bancos de dados.
- **Zod**: Biblioteca de validação de esquemas.
- **TSUP**: Empacotador de TypeScript.
- **Vitest**: Framework de testes para projetos TypeScript.

## Estrutura de Pastas

```plaintext
src/
├── adapters/
│   ├── controllers/
│   │   └── UserController.ts
│   ├── repositories/
│   │   └── UserRepository.ts
│   └── services/
│       └── UserService.ts
├── application/
│   ├── use_cases/
│   │   ├── CreateUser.ts
│   │   └── GetUser.ts
│   └── services/
│       └── UserApplicationService.ts
├── domain/
│   ├── models/
│   │   └── User.ts
│   ├── repositories/
│   │   └── UserRepositoryInterface.ts
│   └── services/
│       └── UserDomainService.ts
├── infrastructure/
│   ├── database/
│   │   ├── migrations/
│   │   └── models/
│   │       └── UserModel.ts
│   ├── orm/
│   │   └── sequelize.ts
│   ├── server/
│   │   └── index.ts
│   └── config/
│       └── config.ts
└── shared/
    ├── utils/
    │   └── someUtil.ts
    └── errors/
        └── CustomError.ts
```

## Instalação

1. Clone o repositório:

```sh
git clone https://github.com/seu-usuario/nome-do-repositorio.git
cd nome-do-repositorio
```

2. Instale as dependências:

```sh
npm install
```

3. Configure as variáveis de ambiente criando um arquivo `.env` baseado no arquivo `.env.example`.

4. Execute as migrações do banco de dados:

```sh
npm run db:migrate
```

## Scripts Disponíveis

- `npm run build`: Compila o código TypeScript usando TSUP.
- `npm run dev`: Inicia o servidor em modo de desenvolvimento.
- `npm run start`: Inicia o servidor em modo de produção.
- `npm run test`: Executa os testes usando Vitest.

## Estrutura de Código

### Adapters

Contém implementações concretas para interfaces externas:

- **controllers/**: Controladores HTTP.
- **repositories/**: Implementações concretas de repositórios.
- **services/**: Serviços externos ou adaptações de serviços internos.

### Application

Contém a lógica de aplicação, como casos de uso e serviços de aplicação:

- **use_cases/**: Implementações dos casos de uso.
- **services/**: Serviços que coordenam casos de uso ou lógica de aplicação.

### Domain

Contém a lógica de domínio puro:

- **models/**: Modelos de domínio.
- **repositories/**: Interfaces dos repositórios de domínio.
- **services/**: Serviços específicos do domínio.

### Infrastructure

Contém implementações específicas de infraestruturas:

- **database/**: Configurações e modelos de banco de dados.
- **orm/**: Configurações e inicializações do ORM.
- **server/**: Configurações e inicializações do servidor web.
- **config/**: Configurações gerais da aplicação.

### Shared

Contém código compartilhado e utilitários:

- **utils/**: Funções utilitárias.
- **errors/**: Definições de erros personalizados.

## Contribuindo

1. Faça um fork do projeto.
2. Crie uma nova branch: `git checkout -b minha-branch`.
3. Faça suas alterações e commite: `git commit -m 'Minha nova feature'`.
4. Envie para a branch original: `git push origin minha-branch`.
5. Crie um pull request.

## Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.