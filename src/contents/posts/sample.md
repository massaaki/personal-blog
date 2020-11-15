---
title: Iniciando um projeto com Next e Typescript
author: Maurício M.
minToRead: 30
level: Iniciante
stacks:
  - Typescript
  - NextJs
thumbnail: /img/publications/nextjs-why.webp
publishDate: 2020-11-14T02:50:57.192Z
---
Se você utiliza React já deve ter ouvido falar no NextJs, uma ferramenta que está ganhando cada vez mais o coração dos desenvolvedores então aqui você aprenderá como configurar uma aplicação utilizando o Next.

Mas como todo bom desenvolvedor, antes de sair por aí programando, é preciso saber qual é o problema que o Next se propõe a resolver.

O Next é um framework de frontend para react com 2 principais características.

## Performance

O Next proporciona diversos recursos para tornar nossas aplicações mais performáticas (por exemplo, StaticSiteGeneration).

## Indexar em motores de busca

Por se tratar de uma aplicação SPA, toda aplicação acaba sendo carregada no client-side (ou seja, no browser que está acessando a aplicação), e isso faz com que os motores de busca(como o google, yahoo, etc) não tenham acesso a todas as informações da página, pois eles não aguardam o javascript finalizar as chamadas assíncronas e, na maioria das vezes, uma aplicação SPA não gera todas as informações antes dos motores de busca coletarem as informações da página.

No Next, o usuário não acessa diretamente a aplicação, ele acessa um servidor Node que é responsável pela criação da interface(chamadas api, renderizar) e o browser já recebe pronto toda interface(HTML, CSS e JS).  Esse comportamento é conhecido como Server Side Rendering. E nesse caso, os motores de busca teriam acesos a todo o conteúdo da aplicação SPA.

> Como temos todo o poder de experiência do usuário de um SPA, juntamente com o SSR(Server Side Rendering) para indexar suas aplicações nos motores de busca. Posso dizer que a maioria das aplicações o Next é uma excelente alternativa. Antes de iniciar, você precisa ter instalado o Yarn e o Node.

**Descrição da aplicação**: Uma aplicação simples com Next utilizando typescript com uma rota /about

1. Iniciando uma aplicação web:
   No terminal, navegue até uma pasta onde deseja iniciar o projeto, vamos chamá-lo de blog


```
yarn create next-app blog
```

2. Instalando o Typescript:


```
yarn add typescript @types/react @types/node -D
```

3. Acesse a pasta \*\*pages\*\* e altere a extensão dos arquivos de .js para .tsx(typescrit with jsx). \
   Agora, eu normalmente removo todo o conteúdo, deixando apenas um JSX básico na tela Home


```
export const Home = (): JSX.Element => {  
  return (  
    <>  
      <h1>Blog</h1>  
      <p>Iniciando o blog com Next e Typescript</p>  
    </>  
  );  
};  
  
export default Home;  
```

4. No _app.tsx, delete a importação dos estilos globais (import ../styles/globals.css)  Deixando apenas: 


```
const MyApp = ({ Component, pageProps }): JSX.Element => {
  return <Component {...pageProps} />;
};

export default MyApp;
```

5. Para organizar melhor o projeto, crie uma pasta chamada **src** e mova a pasta **pages** para ela, aproveite e delete a pasta api e styles
   ![Estrutura de pastas](/img/publications/post01-pages-structure.png "Estrutura de pastas")


6. Agora vamos finalmente iniciar o nosso projeto\
   Vamos adicionar uma rota **sobre** que ficará em <url>/about
   Para isso, basta criar uma o arquivo no caminho /src/pages/about/index.tsx


```
yarn dev
```

7. Adicionando rota /about


```
const AboutPage = (): JSX.Element => {
  return (
    <>
      <h1>Sobre</h1>
      <p>Sobre mim...</p>
    </>
  );
};

export default AboutPage;
```

Com isso, agora é possível acessar a rota /about. Simples assim
localhost:3000/about.\
Espero que você tenha gostado desse pequeno start com o Next! Um Grande abraço.
