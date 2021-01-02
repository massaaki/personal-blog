---
title: 'Next #03 - Instalando configurando o Eslint'
author: Massaaki
minToRead: 30
level: Médio
stacks:
  - NextJs
  - ReactJs
  - Typescript
thumbnail: /img/publications/comecando-com-next-03.webp
publishDate: 2021-01-02T01:18:21.939Z
---
## Configuração e instalação do Eslint

A função do Eslint é a formatação e correção do código, ele será o responsável por nos avisar se estamos utilizando as coisas de forma corretas e também irá nos avisar se estamos com alguma importação ou variável que não está sendo utilizada.

Para instalar o Eslint, acesse o diretório do seu projeto pelo terminal e digite:

```
npx eslint --init
```

Em seguida, devemos responder alguns questionários para fazermos as configurações iniciais do Eslint:

```
How would you like to use Eslint?  
Selecione a opção: -To check syntax and find problems
```

```
What type of modules does your project use?  
Selecione a opção: -Javascript modules(import/export)
```

```
Which framework does your project use?  
Selecione a opção: -React
```

```
Does your project use Typescript?  
digite: y
```

```
Where does your project run?  
selecione a opção: -Browser
```

```
What format do you want your config file to be in?  
selecione a opção: -Json
```

```
Would you like to install using npm?  
selecione a opção: -No
```

Após finalizar o questionário, ainda no terminal (como informamos que não desejamos instalar utilizando o npm), aparecerá uma mensagem das bibliotecas que serão necessários instalar, apenas copie e instale com o yarn:

```
yarn add -D <copie as bibliotecas aqui>
```

Estamos quase finalizando! note que um arquivo chamado **.eslintrc.json** foi criado e agora vamos adicionar as extensões e algumas regras para o nosso projeto.

## Configurações adicionais

Estamos quase finalizando a configuração, vamos agora adicionar e configurar uma biblioteca para que o eslint consiga analisar os react-hooks, no terminal digite:

```
yarn add -D eslint-plugin-react-hooks
```

No arquivo .estlintrc.json insira as seguintes configurações:

```
{  "plugins":  
  [    
    ...  
    "react-hooks"  
  ],  
  "rules": {  
    ...  
    "react-hooks/rules-of-hooks": "error",  
    "react-hooks/exhaustive-deps": "warn"  
  }  
}
```

Como o typescript já nos garante a definição de tipagem, podemos desabilitar a necessidade do prop-types, adicione esta regra ao .eslint.json:

```
{  
  ...  
  "rules": {  
    ...
    "react/prop-types": "off"  
  }  
}
```

Uma particularidade do Next é que o React já é importado automaticamente nos arquivos, então podemos desabilitar esta regra:

```
{  
  ...  
  "rules": {  
    ...  
    "react/react-in-jsx-scope": "off"  
  }  
}
```

Uma boa prática para projetos typescript é tipar apenas o essencial(ou seja, os tipos que o typescript não conseguir inferir), e deixar as coisas mais básicas serem tipadas automaticamente, então podemos desabilitar esta regra:

```
{  
  ...  
  "rules": {  
    ...  
    "@typescript-eslint/explicit-module-boundary-types": "off"  
  }  
}
```

Pelo fato de estarmos utilizando os plugins do React, precisamos passar a sua versão, então adicione o settings no arquivo .eslintrc.json

```
{  
  ...  
  "settings": {  
    "react": {  
      "version": "detect"  
    }  
  }  
}
```

Agora vamos adicionar o script para rodarmos o eslint pelo terminal, no arquivo package.json, adicione o seguinte script:

```
"lint": "eslint src"
```

Simples assim, agora temos o Eslint configurado em nosso projeto NextJs, e já podemos partir para configurar o Prettier, que será responsável por formatar o nosso código de uma forma muito mais bonita e organizada.
