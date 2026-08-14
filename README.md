# Tarefa Viagens EBAC

## Deploy:
A aplicação está publicada em: viagenslist-c5nghhwd1-lucas-lrds.vercel.app

## CI/CD (Integração Contínua e Deploy):
A cada push ou pull request na branch `main`, o pipeline automatizado executa as seguintes etapas:
- **Lint:** Verifica padrões de código com ESLint
- **Testes automatizados:** Executa testes unitários (Vitest/Testing Library)
- **Build de produção:** Gera os arquivos otimizados para deploy
- **Deploy automático:** Publica a aplicação na Vercel

Você pode acompanhar a execução dessas etapas acessando a aba **Actions** deste repositório no GitHub.

## Comandos úteis
Execute os comandos dentro da pasta `viagenslist`:

- **Instalar dependências:**
```bash
  npm ci

  Executar em ambiente de desenvolvimento:
  npm run dev

  Rodar lint:
  npm run lint

  Rodar testes:
  npm run test

  Gerar build de produção:
  npm run build

```

##Organização do Projeto:
Toda a aplicação principal está localizada na pasta viagenslist.

##Funcionamento do pipeline:
Sempre que houver um push ou pull request na branch main, o workflow do GitHub Actions é acionado automaticamente. Para verificar os detalhes das execuções e logs, acesse a aba Actions do repositório no GitHub.

Projeto desenvolvido por [Lucas Ribeiro da Silva] para o exercício EBAC Front-End.
