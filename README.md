# Automação E2E com Cypress

Desafio técnico de automação E2E utilizando Cypress  
Automação de fluxos críticos com validação de integridade da interface

---

[![Cypress](https://img.shields.io/badge/Testes-Cypress-04C38E?style=for-the-badge&logo=cypress&logoColor=white)](https://www.cypress.io/)
[![JavaScript](https://img.shields.io/badge/Linguagem-JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
[![CI](https://img.shields.io/badge/CI-GitHub%20Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)](https://github.com/features/actions)

---

## Sobre o Projeto

Este projeto foi desenvolvido com foco em automação de fluxo de usuário, observando acessibilidade e usabilidade, simulando um cenário real de atuação em QA.

A automação possui:

- Validação de fluxos principais da aplicação  
- Verificação de comportamentos esperados  
- Identificação de falhas funcionais  
- Análise de inconsistências de UI/UX  
- Inspeção de anomalias no DOM  
- Execução automatizada integrada à CI  

---

## Como Executar

Clone o repositório:

```bash
git clone https://github.com/JoaoVictorcds/PS_Rubeus_Automation.git
```

Instale as dependências:

```bash
npm install
```

**Execute os testes:**

Modo interativo:

```bash
npx cypress open
```

Modo headless:

```bash
npx cypress run
```

---

## Integração Contínua

A automação está integrada ao GitHub Actions para execução automática a cada Pull Request, garantindo:

- Validação contínua
- Padronização da execução
- Detecção antecipada de falhas

---

## Relatório de Bugs e Melhorias

Durante o mapeamento e automação das páginas, foram identificadas diversas oportunidades de correção (bugs) e melhorias de usabilidade.

Para visualizar o detalhamento completo dos itens levantados nas páginas de Certificação e Site, acesse o documento abaixo:

👉 [Acessar Relatório Completo de Testes](./docs/tests_analytics.md)

---
## Autor:
### João Victor