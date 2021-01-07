---
title: 'Next #06 - Instalando e configurando as bibliotecas de testes Jest e Cypress'
author: Massaaki
minToRead: 30
level: Médio
stacks:
  - NextJs
  - Typescript
  - ReactJs
thumbnail: /img/publications/comecando-com-next-06.webp
publishDate: 2021-01-07T23:35:52.246Z
---
Uma boa prática, principalmente para projetos maiores é fazer testes para garantir os principais funcionamentos da plataforma.

O site [stateofjs](https://2019.stateofjs.com/pt/testing/) realizou uma pesquisa em 2019 com as principais bibliotecas classificadas por Satisfação, Interesse e percepção e o Jest e o Cypress lideram essa pesquisa.

![Lista de bibliotecas de testes ordenadas por satisfacao por desenvolvedores](/img/publications/list-de-bibliotecas-satisfacao-com-testes.png "lista de satisfacao de bibliotecas de testes")

Ao configurar o Jest e o Cypress em um projeto Next com Typescript, podem acontecer problemas de compatibilidade na tipagem. Então hoje vamos seguir instalando essas duas bibliotecas.



- - -

## Instalando, configurando e criando o primeiro teste com Jest

Primeiro, vamos instalar o Jest e as suas tipagens

```
yarn add -D jest @babel/preset-typescript @types/jest
```

Aproveite e já instale a biblioteca **Testing-library** para fazermos toda a manipulação do **DOM** no teste ( renderizar, buscar elemento etc.)

```
yarn add -D @testing-library/react @testing-library/jest-dom
```

Habilite o Jest no arquivo de configuração do seu **eslint** (por exemplo: eslint.json), habilitamos o node para evitar um erro no arquivo de configuração do jest (pois estaremos utilizando module.export)

```
env {  "jest": true,  "node": true}
```

Agora crie um arquivo jest.config.js na raiz do projeto e insira as configurações do jest

```
module.exports = {  
  testEnvironment: 'jsdom',  
  testPathIgnorePatterns: ['/node_modules/', '/next/'],  
  collectCoverage: true,  collectCoverageFrom: ['src/**/*.ts(x)?'], 
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts']
}
```

Caso você ainda não tenha, crie um arquivo .babelrc na raiz do projeto

```
{  
  "presets": [
    "next/babel", 
    "@babel/preset-typescript"
  ]
}
```

Agora vamos importar o testing library

Crie uma pasta na raiz chamada .jest e crie um arquivo chamado setup.ts

```
import '@testing-library/jest-dom'
```

Para concluir a configuração do Jest, em package.json insira os scripts para conseguir rodar o teste

```
"scripts": {  
  "test": "jest",
  "test:watch":
  "yarn test --watch"
}
```

Pronto, agora com o Jest instalado e configurado, crie o seu primeiro teste

Crie a pasta src/components/Main e dentro, crie esses dois arquivos

```
Main -index.tsx -test.tsx
```

No arquivo index.tsx insira um código simples

```
<main><h1>Some test</h1></main>
```

Agora podemos criar o nosso teste, vamos verificar se o h1 contém 'Some text'. No arquivo test.tsx insira:

```
import {render, screen} from '@testing-library/react'

import Main from '.'

describe('<Main />', () => {  
  it('should render the heading',() => {    
    render(<Main />)    
    expect(      
      screen.getByRole('heading', { name: /som test/i})
    ).toBeInTheDocument()  
  }
}
```

pronto, agora temos o jest e o nosso primeiro teste configurado, simples assim =)

## Instalando, configurando e fazendo um exemplo com Cypress

Vamos instalar o cypress e também as tipagens necessárias para rodar com o typescript

```
yarn add "cypress" "@types/mocha" "@types/chai"
```

crie um arquivo na raiz chamado cypress.json 

```
{  
  "pluginsFile": false,  
  "supportFile": false,  
  "fixturesFolder": false
}
```

Acesse o tsconfig.json localizado na raiz e altere o 'include' para direcionar as configurações apenas para a pasta src (ou onde você insere os seus arquivos que trabalha)

```
"include": [   
  ...   
  "src/**/*.ts",   
  "src/**/*.tsx"
],
```

Com isso, agora podemos extender o arquivo typescript e incluir as tipagens do cypress somente para os arquivos da pasta dos testes do cypress. Para isso se não tiver, crie uma pasta cypress na raiz do projeto e dentro de dela crie um arquivo tsconfig.json.

```
{  
  "extends": "../tsconfig.json",  
  "compilerOptions": {    
    "noEmit": false,    
    "isolatedModules": false  
  },  
  "include": [    
    "../node_modules/cypress",    
    "./*/*.ts"  
  ],  
  "exclude": ["../node_modules/cypress/**/*.js"]  
 
}  
```

Agora crie o seu primeiro teste com cypress, em nosso caso, vamos apenas fazer uma visita a url 'http://localhost:3000'. 

Dentro de cypress, crie um arquivo chamado visitHomePage.ts

```
describe('SampleTest', () => {  
  it('Shows Home page', function () {    
    cy.visit('http://localhost:3000')  
  }
})
```

Por fim, vamos configurar o package.json com os comandos para rodar o teste

```
"scripts": {  
  "cypress": "cypress run",  
  "cypress:chrome": "cypress run -b chrome",  
  "cypress:open": "cypress open"
}
```

Pronto! com isso, agora você pode criar e rodar seus testes no componente com Jest e os testes ponta a ponta com o Cypress!
