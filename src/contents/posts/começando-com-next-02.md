---
title: 'Começando com Next #02'
author: Massaaki
minToRead: 30
level: Médio
stacks:
  - NextJs
  - Typescript
  - ReactJs
thumbnail: /img/publications/comecando-com-next-02.webp
publishDate: 2021-01-01T01:43:31.123Z
---
Agora que você já entendeu um pouco sobre os tipos de renderização e que podemos utiliza-los com o Next, vamos agora iniciarmos a base do nosso projeto. Para isso, tenha instalado o Node v10+ e o Yarn.

1. Iniciando uma aplicação web:
   No terminal, navegue até uma pasta onde deseja iniciar o projeto, e como será o nosso projeto base, vamos chamálo de next-boilerplate


```
yarn create next-app next-boilerplate
```

2. Ainda no terminal, instale o Typescript:


```
yarn add typescript @types/react @types/node -D
```

3. Na raiz do projeto, crie um arquivo chamado **tsconfig.json**  
4. Acesse a pasta \*\*pages\*\* e altere a extensão dos arquivos de .js para .tsx(typescrit with jsx). \
   Agora, remova todo o conteúdo, e escreva apenas um JSX básico na tela Home


```
export const Home = (): JSX.Element => {  
  return (  
    <>  
      <h1>Home</h1>  
      <p>Boilerplate Next com Typescript</p>  
    </>  
  );  
};  
  
export default Home;  
```

5. No _app.tsx, delete a importação dos estilos globais (import ../styles/globals.css)  Deixando apenas: 


```
const MyApp = ({ Component, pageProps }): JSX.Element => {
  return <Component {...pageProps} />;
};

export default MyApp;
```

6. Para organizar melhor o projeto, crie uma pasta chamada **src** e mova a pasta **pages** para ela, aproveite e delete a pasta api e styles\
   ![Estrutura de pastas](/img/publications/post01-pages-structure.png "Estrutura de pastas")  
7. Agora vamos finalmente iniciar o nosso projeto


```
yarn dev
```

Agora que temos a base do nosso projeto já com Typescript e no próximo passo de nossa jornada já podemos configurar o eslint e o babel, que serão responsáveis pela formatação e organização do nosso código.
