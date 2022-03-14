# Data Lovers

## Índice

- [1. Introdução](#1-introdução)
- [2. Definição de produto](#2-definição-de-produto)
- [3. Objetivos de aprendizagem](#3-objetivos-de-aprendizagem)
- [4. Considerações gerais](#4-considerações-gerais)
- [5. Critérios mínimos de aceitação do
  projeto](#5-critérios-mínimos-de-aceitação-do-projeto)
- [6. Hacker edition](#6-hacker-edition)
- [7. Considerações técnicas](#7-considerações-técnicas)
- [8. Pistas, dicas e leituras
  complementares](#8-pistas-dicas-e-leituras-complementares)
- [9. Checklist](#9-checklist)

---

## 1. Introdução

A série trata das aventuras de Rick Sanchez, um cientista brilhante (com sérios problemas de alcoolismo) e seu sobrinho Morty Smith (não tão brilhante) através de galáxias e realidades paralelas onde encontram todos os tipos de personagens estranhos e, inclusive, outras versões de si mesmos. 

## 2. Definição de produto

Aplicativo web adaptado para dispsitivos Mobile, criado para fãs e pessoas que desejam saber mais sobre a série Rick and Morty, onde podem encontrar todos os personagens da série, filtrar os personagens por ordem alfabética, por gênero, status, espécie, pesquisar pelo nome e mais.

Os filtros “Status”, “Gender”, "Spescies" e o input de pesquisar pelo nome fornecem também o percentual de personagens que possuem a característica selecionada.

## 3. Objetivos de aprendizagem

Reflita e depois enumere os objetivos que quer alcançar e aplique no seu projeto. Pense nisso para decidir sua estratégia de trabalho.

### HTML

- [ ] **Uso de HTML semântico**

    <details><summary>Links</summary><p>

  - [HTML semántico](https://curriculum.laboratoria.la/pt/topics/html/02-html5/02-semantic-html)
  - [Semantics in HTML - MDN](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#Semantics_in_HTML)
  </p></details>

### CSS

- [ ] **Uso de seletores de CSS**

    <details><summary>Links</summary><p>

  - [Intro a CSS](https://curriculum.laboratoria.la/pt/topics/css/01-css/01-intro-css)
  - [CSS Selectors - MDN](https://developer.mozilla.org/es/docs/Web/CSS/CSS_Selectors)
  </p></details>

- [ ] **Empregar o modelo de caixa (box model): borda, margem, preenchimento**

    <details><summary>Links</summary><p>

  - [Modelo de Caixa e Display](https://curriculum.laboratoria.la/pt/topics/css/01-css/02-boxmodel-and-display)
  - [The box model - MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model)
  - [Introduction to the CSS box model - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)
  - [CSS display - MDN](https://developer.mozilla.org/pt-BR/docs/Web/CSS/display)
  - [display - CSS Tricks](https://css-tricks.com/almanac/properties/d/display/)
  </p></details>

- [ ] **Uso de flexbox en CSS**

    <details><summary>Links</summary><p>

  - [A Complete Guide to Flexbox - CSS Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
  - [Flexbox Froggy](https://flexboxfroggy.com/#pt-br)
  - [Flexbox - MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox)
  </p></details>

### Web APIs

- [ ] **Uso de seletores de DOM**

    <details><summary>Links</summary><p>

  - [Modificando o DOM](https://curriculum.laboratoria.la/pt/topics/browser/02-dom/03-1-dom-methods-selection)
  - [Introdução ao DOM - MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/Document_Object_Model/Introduction)
  - [Locating DOM elements using selectors - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors)
  </p></details>

- [ ] **Gerenciamento de eventos de DOM**

    <details><summary>Links</summary><p>

  - [Introdução a eventos - MDN](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Building_blocks/Events)
  - [EventTarget.addEventListener() - MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/EventTarget/addEventListener)
  - [EventTarget.removeEventListener() - MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/EventTarget/removeEventListener)
  - [El objeto Event](https://developer.mozilla.org/pt-BR/docs/Web/API/Event)
  </p></details>

- [ ] **Manipulação dinâmica de DOM**

    <details><summary>Links</summary><p>

  - [Introdução ao DOM](https://developer.mozilla.org/pt-BR/docs/DOM/Referencia_do_DOM/Introdu%C3%A7%C3%A3o)
  - [Node.appendChild() - MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/Node/appendChild)
  - [Document.createElement() - MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/Document/createElement)
  - [Document.createTextNode()](https://developer.mozilla.org/pt-BR/docs/Web/API/Document/createTextNode)
  - [Element.innerHTML - MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/Element/innerHTML)
  - [Node.textContent - MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/Node/textContent)
  </p></details>

### JavaScript

- [ ] **Diferenciar entre tipos de dados primitivos e não primitivos**

- [ ] **Manipular arrays (filter, map, sort, reduce)**

    <details><summary>Links</summary><p>

  - [Arrays](https://curriculum.laboratoria.la/pt/topics/javascript/04-arrays)
  - [Array.prototype.sort() - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
  - [Array.prototype.forEach() - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
  - [Array.prototype.map() - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
  - [Array.prototype.filter() - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
  - [Array.prototype.reduce() - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
  </p></details>

- [ ] **Manipular objects (key | value)**

    <details><summary>Links</summary><p>

  - [Objetos em JavaScript](https://curriculum.laboratoria.la/pt/topics/javascript/05-objects/01-objects)
  </p></details>

- [ ] **Variáveis (declaração, atribuição, escopo)**

    <details><summary>Links</summary><p>

  - [Valores, tipos de dados e operadores](https://curriculum.laboratoria.la/pt/topics/javascript/01-basics/01-values-variables-and-types)
  - [Variáveis](https://curriculum.laboratoria.la/pt/topics/javascript/01-basics/02-variables)
  </p></details>

- [ ] **Uso de condicionais (if-else, switch, operador ternário)**

    <details><summary>Links</summary><p>

  - [Estruturas condicionais e repetitivas](https://curriculum.laboratoria.la/pt/topics/javascript/02-flow-control/01-conditionals-and-loops)
  - [Tomando decisões no seu código — condicionais - MDN](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Building_blocks/conditionals)
  </p></details>

- [ ] **Uso de laços (for, for..of, while)**

    <details><summary>Links</summary><p>

  - [Laços (Loops)](https://curriculum.laboratoria.la/pt/topics/javascript/02-flow-control/02-loops)
  - [Laços e iterações - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Loops_and_iteration)
  </p></details>

- [ ] **Uso de funções (parâmetros, argumentos, valor de retorno)**

    <details><summary>Links</summary><p>

  - [Funções (controle de fluxo)](https://curriculum.laboratoria.la/pt/topics/javascript/02-flow-control/03-functions)
  - [Funções clásicas](https://curriculum.laboratoria.la/pt/topics/javascript/03-functions/01-classic)
  - [Arrow Functions](https://curriculum.laboratoria.la/pt/topics/javascript/03-functions/02-arrow)
  - [Funções — blocos reutilizáveis de código - MDN](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Building_blocks/Functions)
  </p></details>

- [ ] **Testes unitários**

    <details><summary>Links</summary><p>

  - [Introdução ao Jest - Documentação oficial](https://jestjs.io/docs/pt-BR/getting-started)
  </p></details>

- [ ] **Uso ES modules**

    <details><summary>Links</summary><p>

  - [import - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/import)
  - [export - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/export)
  </p></details>

- [ ] **Uso de linter (ESLINT)**

- [ ] **Uso de identificadores descritivos (Nomenclatura | Semântica)**

- [ ] **Diferença entre expression e statements**

### Git e GitHub

- [ ] **Git: Instalação e configuração**

- [ ] **Git: Controle de versão com git (init, clone, add, commit, status, push, pull, remote)**

- [ ] **Git: Integração de mudanças entre ramos (branch, checkout, fetch, merge, reset, rebase, tag)**

- [ ] **GitHub: Criação de contas e repositórios, configuração de chave SSH**

- [ ] **GitHub: Implantação com GitHub Pages**

    <details><summary>Links</summary><p>

  - [Site oficial do GitHub Pages](https://pages.github.com/)
  </p></details>

- [ ] **GitHub: Colaboração pelo Github (branches | forks | pull requests | code review | tags)**

### user-centricity

- [ ] **Desenhar a aplicação pensando e entendendo a usuária**

### product-design

- [ ] **Criar protótipos para obter feedback e iterar**

- [ ] **Aplicar os princípios de desenho visual (contraste, alinhamento, hierarquia)**

### research

- [ ] **Planejar e executar testes de usabilidade**

## 4. Considerações gerais

- Este projeto será executado em duplas.
- Este projeto será entregue através do GitHub e a interface deve ser publicada
  no [GitHub Pages](https://pages.github.com/).
- Tempo para completá-lo: Tome como referencia 4 semanas.

## 5. Critérios mínimos de aceitação do projeto

Os critérios considerados para que tenha terminado este projeto são:

### Definição de produto

Documente brevemente seu trabalho no arquivo `README.md` de seu repositório,
contando como foi o processo de desenho e como você acredita que o produto possa
resolver o problema (ou problemas) de seu usuário.

### Histórias de usuário

Uma vez que entenda a necessidade dos usuários, escreva as [Historias de
Usuario](https://pt.wikipedia.org/wiki/Hist%C3%B3ria_de_usu%C3%A1rio) que
representem tudo que o usuário precisa fazer/ver. As **histórias de usuário**
devem ser o resultado de seu processo de investigação/pesquisa de seus usuários.

Não esqueça de incluir a definição de pronto (_definition of done_) e os
critérios de aceitação para cada uma.

Na medida do possível, termine uma história de usuário antes de passar para a
seguinte (cumpra com as definições de pronto + critérios de aceitação).


#### Protótipo de alta fidelidade


#### Testes de usabilidade

Durante o desafio você deverá fazer testes de usabilidade com usuários
diferentes, e com base nos resultados desses testes, iterar seus desenhos de
interface. Conte-nos quais problemas de usabilidade você detectou através dos
testes e como os resolveu na proposta final.

### Implementação da interface de usuário (HTML/CSS/JS)

Após desenhar sua interface de usuário, deverá trabalhar na sua implementação.
**Não** é necessário que construa a interface exatamente da mesma forma que
desenhou. Terá um tempo limitado para trabalhar no projeto, então você deve
priorizar as tarefas.

No mínimo, sua implementação deverá:

1. Mostrar os dados em uma interface: pode ser em cards, tabelas, listas, etc.
2. Permitir ao usuário interagir com a interface para obter as informações que
   necessita;
3. Ser _responsiva_, ou seja, deve ser visualizada sem problemas a partir de
   diversos tamanhos de tela: celulares, tablets, notebooks, etc.
4. Que a interface siga os fundamentos de _visual design_.

### Testes unitários

O _boilerplate_ do projeto não inclui testes unitários. Assim, você terá que
escrever seus próprios testes para as funções encarregadas de _processar_,
_filtrar_ e _ordenar_ os dados, assim como _calcular_ estatísticas.

Seus testes unitários devem ter cobertura mínima de 70% de _statements_
(_sentenças_), _functions_ (_funções_), _lines_ (_linhas_), e _branches_
(_ramos_) do arquivo `src/data.js`, que irá conter suas funções e que está
detalhado na seção de [Considerações técnicas](#srcdatajs).

