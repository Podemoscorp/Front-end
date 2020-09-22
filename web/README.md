E necessario que vc tenha o node.js instalado e o npm.

### Instalando node.js:

#### windows:

Baixe o [Windows Installer](https://nodejs.org/pt-br/download/) diretamente do site nodejs.org, ou use o chocolatey:

```
cinst nodejs
# ou para a instalação completa com npm
cinst nodejs.install
```

#### linux:

```
$ sudo apt-get update
$ sudo apt-get install nodejs
```
_____________________________________________________________________________________________

Este projeto foi iniciado com [Create React App](https://github.com/facebook/create-react-app).

## Scripts disponíveis:

Para instalar as dependencias:

### `npm install`

No diretório do projeto, você pode executar usando:

### `npm start`

Executa o aplicativo no modo de desenvolvimento.<br />
Abra [http://localhost:3000](http://localhost:3000) para visualizá-lo no navegador.

A página será recarregada se você fizer edições.<br />
Você também verá erros de fiapos no console.

### `npm test`

Inicia o corredor de teste no modo de observação interativo.<br />
Veja a seção sobre [running tests](https://facebook.github.io/create-react-app/docs/running-tests) para mais informações.

### `npm run build`

Cria o aplicativo para produção na pasta `build`.<br />
Ele agrupa corretamente o React no modo de produção e otimiza a construção para obter o melhor desempenho.

A compilação é minificada e os nomes de arquivos incluem os hashes.<br />
Seu aplicativo está pronto para ser implantado!

Veja a seção sobre [deployment](https://facebook.github.io/create-react-app/docs/deployment) para mais informações.

### `npm run eject`

**Nota: esta é uma operação unidirecional. Depois de "ejetar"(`eject`), você não pode voltar!**

Se você não estiver satisfeito com a ferramenta de criação e as opções de configuração, poderá "ejetar" a qualquer momento. Este comando removerá a dependência de compilação única do seu projeto.

Em vez disso, ele copiará todos os arquivos de configuração e as dependências transitivas (webpack, Babel, ESLint, etc) diretamente no seu projeto, para que você tenha controle total sobre eles. Todos os comandos, exceto o `eject`, ainda funcionarão, mas apontarão para os scripts copiados para que você possa ajustá-los. Neste ponto, você está por sua conta.

Você nunca precisa usar `eject`. O conjunto de recursos selecionados é adequado para implantações pequenas e médias, e você não deve se sentir obrigado a usar esse recurso. No entanto, entendemos que essa ferramenta não seria útil se você não pudesse personalizá-la quando estiver pronta para isso.

## Saiba mais:

Você pode aprender mais em: [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

Para aprender o React, confira em: [React documentation](https://reactjs.org/).

### Divisão de código
Esta seção foi movida aqui: https://facebook.github.io/create-react-app/docs/code-splitting

### Analisando o tamanho do pacote

Esta seção foi movida aqui: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Criando um aplicativo Web progressivo

Esta seção foi movida aqui: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Configuração avançada

Esta seção foi movida aqui: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Implantação (Deployment)

Esta seção foi movida aqui: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` falha ao mimificar(fails to minify)

Esta seção foi movida aqui: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
