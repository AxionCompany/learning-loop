# Learning Loop

## Road map

### 1. Fundamentos e Boas Práticas de Programação

- 1.1. O que são boas práticas?
- 1.2 Importância de escrever código limpo e sustentável.
- 1.3 Impactos de boas práticas na manutenção de software.
- 1.4 Exemplos de más práticas e como evitá-las.

### 2. Paradigmas de Programação

- 2.1. Programação Estruturada
  - Fluxo sequencial, condicional e de repetição.
  - Uso de sub-rotinas e modularidade.
- 2.2. Programação Funcional
  - Conceitos: funções puras, imutabilidade, e first-class functions.
  - Funções de alta ordem: map, filter, reduce.
  - Principais linguagens funcionais: Haskell, Clojure, e exemplos em JavaScript.
- 2.3. Programação Orientada a Objetos (POO)
  - Conceitos: encapsulamento, herança, polimorfismo e abstração.
  - Princípios básicos: coesão, acoplamento e reutilização.
  - Diferenças entre composição e herança.
- 2.4. Outros paradigmas
  - Programação lógica (ex.: Prolog).
  - Programação reativa.
  - Programação baseada em eventos.

### 3. Clean Code

- 3.1. Conceitos Fundamentais

  - O que caracteriza código limpo.
  - Diferença entre código que funciona e código de qualidade.
  - A importância de código legível e sustentável.
  - Exemplos de antes e depois de aplicar boas práticas de Clean Code.

- 3.2. Boas Práticas de Nomeação

  - Variáveis:
    - Nomes que revelam intenção.
    - Evitar nomes genéricos como data, info, temp.
  - Funções:
    - Verbos no início dos nomes de funções (ex.: calculateTax, validateInput).
    - Tamanho ideal de funções.
  - Classes e objetos:
    - Nomes no singular para classes.
    - Aderência ao domínio do problema.

- 3.3. Estruturação de Código

  - Funções:
    - Cada função deve fazer apenas uma coisa (Single Responsibility).
    - Evitar múltiplos níveis de abstração em uma mesma função.
    - Evitar parâmetros excessivos: trabalhar com objetos, se necessário.
  - Classes:
    - Evitar classes "Deus" (God Classes).
    - Limitar o número de métodos e atributos em uma classe.

- 3.4. Comentários

  - Quando e onde utilizar comentários.
  - Comentários úteis:
    - Explicar por que algo foi feito, não como.
    - Documentar hacks temporários ou limitações técnicas.
  - Comentários ruins:
    - Repetir o óbvio do código.
    - Comentários desatualizados que causam confusão.

- 3.5. Tratamento de Erros

  - Uso correto de exceções em vez de códigos de erro.
  - Criação de mensagens de erro claras e descritivas.
  - Evitar try-catch excessivos; pensar em design mais robusto.

- 3.6. Reduzindo Complexidade

  - Cohesão e acoplamento:
    - O que é alta coesão e baixo acoplamento?
    - Estratégias para reduzir dependências entre componentes.
  - Evitar complexidade desnecessária:
    - Princípio KISS (Keep It Simple, Stupid).
    - Refatorar lógica para evitar duplicação (DRY).

- 3.7. Boas Práticas de Formatação

  - Indentação e espaçamento:
    - Escolha de um padrão consistente (tabs ou espaços).
  - Linhas de código:
    - Manter linhas curtas (ex.: máximo de 80-120 caracteres).
  - Blocos de código:
    - Separar blocos de lógica com linhas em branco para melhorar a legibilidade.

- 3.8. Code Smells e Como Evitá-los

  - Tipos comuns de code smells:
    - Funções muito grandes.
    - Classes que fazem "tudo".
    - Repetição de código.
    - Dependências ocultas ou circulares.
  - Estratégias para identificação e resolução:
    - Refatoração incremental.
    - Revisão de código em equipe.

- 3.9. Refatoração: Transformando Código em Código Limpo

  - Técnicas de refatoração:
    - Extrair métodos.
    - Substituir código duplicado por funções reutilizáveis.
    - Dividir classes ou arquivos grandes.
  - Ferramentas de suporte:
    - IDEs com suporte a refatoração (ex.: IntelliJ, VS Code).
    - Linters e formatadores automáticos (ex.: ESLint, Prettier).

- 3.10. Testes Automatizados e Clean Code

  - 3.10.1 Escrevendo testes limpos:
    - Nomes claros para testes.
    - Configuração simples para casos de teste.
    - Evitar duplicação nos testes.
  - 3.10.2 TDD (Test-Driven Development):
    - Como TDD incentiva a escrita de código limpo.

- 3.11. Aplicando Clean Code em Diferentes Paradigmas
  - Programação Orientada a Objetos (POO):
    - Refatoração de herança para composição.
    - Aplicação de Design Patterns alinhados a Clean Code.
  - Programação Funcional:
    - Reduzir mutabilidade.
    - Uso de funções puras.
  - Programação Estruturada:
    - Quebras de funções complexas em subrotinas.

### 4. Princípios de Desenvolvimento de Software

- 4.1. Princípios SOLID
  - 4.1.1 - S: Single Responsibility Principle (SRP).
  - 4.1.2 - O: Open/Closed Principle (OCP).
  - 4.1.3 - L: Liskov Substitution Principle (LSP).
  - 4.1.4 - I: Interface Segregation Principle (ISP).
  - 4.1.5 - D: Dependency Inversion Principle (DIP).
- 4.2. Outros princípios importantes
  - DRY: Don't Repeat Yourself.
  - KISS: Keep It Simple, Stupid.
  - YAGNI: You Aren’t Gonna Need It.
  - Law of Demeter (ou Least Knowledge Principle).

### 5. Design Patterns

- 5.1. O que são Design Patterns?
  - Origem do conceito (Gang of Four - GoF).
  - Importância de padrões para resolver problemas comuns.
- 5.2. Padrões de Criação
  - 5.2.1 Factory Method.
  - 5.2.2 Abstract Factory.
  - 5.2.3 Singleton.
  - 5.2.4 Builder.
- 5.3. Padrões Estruturais
  - 5.3.1 Adapter.
  - 5.3.2 Composite.
  - 5.3.3 Decorator.
  - 5.3.4 Proxy.
- 5.4. Padrões Comportamentais
  - 5.4.1 Strategy.
  - 5.4.2 Observer.
  - 5.4.3 Command.
  - 5.4.4 Chain of Responsibility.
- 5.5. Padrões estruturais (separação de responstabilidades)
  - 5.5.1 MVC (Model-View-Controller).
  - 5.5.2 MVVM (Model-View-ViewModel).

### 6. Testes e Refatoração

- 6.1. Escrevendo testes de unidade - TDD (Test-Driven Development). - Boas práticas para testar diferentes paradigmas.
- 6.2. Refatoração - Técnicas de refatoração em código legado. - Identificação de code smells.

### 7. Ferramentas e Recursos Auxiliares

- 7.1. Linters e formatadores de código
  - ESLint, Prettier, etc.
- 7.2. Documentação
  - Uso de ferramentas como JSDoc, Sphinx, Doxygen.
- 7.3. Controle de versão
  - Boas práticas com Git e revisão de código.

## This is a Next.js application generated with

[Create Fumadocs](https://github.com/fuma-nama/fumadocs).

Run development server:

```bash
npm run dev
# or
pnpm dev
# or
yarn dev
```

Open http://localhost:3000 with your browser to see the result.

## Learn More

To learn more about Next.js and Fumadocs, take a look at the following
resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js
  features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Fumadocs](https://fumadocs.vercel.app) - learn about Fumadocs
