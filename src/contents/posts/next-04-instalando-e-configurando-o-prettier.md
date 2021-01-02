---
title: 'Next #04 - Instalando e configurando o Prettier'
author: Massaaki
minToRead: 15
level: Médio
stacks:
  - NextJs
  - Typescript
  - ReactJs
thumbnail: /img/publications/comecando-com-next-04.webp
publishDate: 2021-01-02T14:18:25.720Z
---
O Prettier foi uma das ferramentas mais incríveis que surgiram no universo front-end, essa biblioteca será responsável por manter todo o nosso projeto com a mesma formatação!

E instalar e configurar o Prettier é bem simples

## Configuração e Instalação

Abra o terminal, acesse a raiz do projeto e instale:

```
yarn add -D eslint-config-prettier eslint-plugin-prettier
```

Agora crie o arquivo de configuração **.prettierrc** na raiz do projeto e insira o seguinte código:

```
{  
  "trailingComma": "none",  
  "semi": false,  
  "singleQuote": true  
}
```

Agora para o eslint entender que estaremos utilizando o prettier para formatar o nosso código, é só adicionar o plugin do Prettier no arquivo **.eslintrc.json**

```
{  
  ...
  "extends": ["plugin:prettier/recommended"]  
  ...
}
```

  

## Configuração adicional

Vamos adicionar uma configuração(apenas se você utiliza o VSCODE) para formatar o arquivo sempre que salvarmos o arquivo

Crie o uma pasta .vscode na raiz do projeto e dentro da pasta crie um arquivo chamado settings.json 

```
.vscode/settings.json
```

Agora adicione a seguinte configuração

```
  "editor.formatOnSave": false,  
    
  "editor.codeActionsOnSave": {  
    // For ESLint  
    "source.fixAll.eslint": true,  
    // For TSLint  
    "source.fixAll.tslint": true,  
    // For Stylelint  
    "source.fixAll.stylelint": true  
  },  
```

Simples assim, agora com o eslint e o prettier devidamente instaldos e configurados, garantimos que a formatação e a detecção de diversos erros sejam evitados em nosso projeto.
