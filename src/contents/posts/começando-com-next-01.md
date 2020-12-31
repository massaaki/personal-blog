---
title: 'Começando com Next #01'
author: Massaaki
minToRead: 15
level: Médio
stacks:
  - NextJs
  - Typescript
  - ReactJs
thumbnail: /img/publications/comecando-com-next-01.webp
publishDate: 2020-12-31T01:17:35.531Z
---
Antes de criar um projeto frontend, muitas pessoas começam com algo do tipo: 
_"Cria um projeto, remove todo o conteúdo desnecessário, Instala bibliotecas básicas ( como uma biblioteca de testes), configura a formatação do código (babel, eslint etc), define a melhor arquitetura para as necessidades do projeto, analisa a estrutura das páginas e configura estilos globais, inicia a construção dos componentes..._

E manter uma constância no código é algo que ajuda muito na manutenção do código. Este projeto será uma jornada pelo **NextJS** , um framework que utiliza React e que vem ganhando cada vez mais popularidade e carinho dos desenvolvedores. 

Nele, vou colocar muito conhecimento na área do frontend(alguns deles levei dias para conseguir implementar), então espero que aproveite a jornada e espero que este conteúdo te transforme em um programador muito melhor! Mas antes de iniciarmos com a mão na massa, configurarmos as bibliotecas de testes do componente, end-to-end... Vamos começar com uma pequena parte teórica ( vai ser rápido, prometo!) que com certeza que, caso você não tenha parado para analisar os benefícios, vai te ajudar muito!  

  

## Vamos entender as principais características de cada tipo de renderização (Static Site Generation, Single Page Application e Server Side Rendering)

  ****

**Static Site Generation (ou SSG):** Com esta abordagem, o uso do servidor é quase nulo e, com isso oferece a melhor performance de todas! Porém, existe um preço a se pagar, neste tipo de aplicação a atualização do conteúdo acontece apenas em tempo de Build.  

  

**Single Page Application (ou SPA):** Esta abordagem oferece uma excelente experiência de usuário, devido as interações não precisarem carregar a página toda. Porém como todo o conteúdo é gerado no lado do cliente, prejudica muito no SEO.  

  

**Sever Side Rendering (ou SSR):** Esta abordagem oferece uma experiência de usuário semelhante ao SPA, porém toda a renderização acontece no lado do servidor, com isso o SEO não é prejudicado, visto que quando os crawler do google passar pelo seu site, vai ter acesso a todo o conteúdo. Uma das desvantagens dessa abordagem é o Reload completo nas mudanças de rota e o HTML ser maior.  

  

> Existem diversas outras diferenças entre esses 3 tipos de renderização, porém acredito que estas sejam as principais que um desenvolvedor utiliza para escolher quais as características que o projeto front-end  melhor se enquadra de acordo com as necessidades da aplicação que será construída.  

\    

_Por exemplo, um dashboard para acompanhamento de receita da empresa não precisamos pensar em SEO, sendo prioritariamente importante a experiência de uso da plataforma, nesse ponto, optar por um **SPA é uma boa escolha**._  

  

_Caso tenha um blog que é pouco atualizado e que você gostaria de muita performance e precisa que as informações sejam indexadas pelos crawlers do google, um_ _**SSG é uma boa opção**._  

  

_E caso você precise garantir uma boa experiência e ainda indexar o conteúdo no google, como por exemplo, uma rede social, uma plataforma de músicas ou live stream, o **SSR passa a ser uma opção melhor**._  

  

E o mais incrível ( e também **um dos motivos** para o Next estar cada vez mais no coração dos programadores Front-end) é que ele consegue trabalhar com estes 3 tipos de renderização, assim você poderá criar uma aplicação híbrida entre elas, onde cada página tenha a melhor estratégia para a aplicação!
