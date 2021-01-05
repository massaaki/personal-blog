---
title: 'Next #05 - Configurando o Husky e Lint staged'
author: Massaaki
minToRead: 15
level: Médio
stacks:
  - NextJs
  - Typescript
  - ReactJs
thumbnail: /img/publications/comecando-com-next-05.webp
publishDate: 2021-01-04T23:43:43.587Z
---
Para garantirmos que o código não tenha alterações de formatação ou coisas que não estão sendo utilizadas no código, vamos utilizar o **Husky** e o **Lint-staged**, onde basicamente é um **hook** onde iremos configurar para rodar alguns comandos antes do **commit**.

Com o terminal aberto na raiz do projeto instale as bibliotecas:

```
yarn add -D lint-staged husky
```

Vamos configurar para que o commit só possa ser executado se o eslint não encontrar nenhum erro e nenhum warning e, para isso, vamos adicionar um parametro no comando lint no arquivo package.json.

```
"script": {  
  "lint": "eslint src --max-warnings=0"  
}
```

## Configurando o Husk(v4)

Analisando a documentação do Husky, para utilizar a versão 5, é necessário o projeto ser **open source** ou ser **sponsor**, devido a isso, vamos configurar seguindo a documentação da **versão 4**.

No arquivo **package.json**, adicione as seguintes configurações:

```
  ...  
  "husky": {  
    "hooks": {  
      "pre-commit": "lint-staged",  
    }  
  }  
  
  "lint-staged": {  
    "src/**/*": ["yarn lint --fix]  
  }  
  ...
```

Com isso, toda vez que você rodar o '**git commit -m "..."**' o '**yarn lint --fix**' será executado e, assim criamos mais uma camada para prevenir subir coisas desnecessárias para o git.
