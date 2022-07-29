# Pesquisa de CEP
Conforme solicitado no challenge, a aplicação faz a busca do endereço pelo CEP e exibe num card.
Adicionei, também, a feature de resolver um mapa estático baseado no endereço fornecido.
Existe o tratamento de erros para CEPs inválidos e uma máscara de input para garantir um input mais limpo.

### Decisões de projeto
Decidi seguir com [Material-UI](https://mui.com/) para agilizar a implementação do front. Além do ViaCEP, estou utilizando o [geoapify](https://www.geoapify.com) para resolver o static map do card central. Tenho material com mais CSS "puro" para análise, coisas feitas realmente *from scratch*, [neste outro repositório](https://github.com/nickojs/osrs-web3-trade).

Não quis me aprofundar, ou melhor, tornar complexas as requisições feitas no projeto. Num projeto maior, eu provavelmente seguiria o padrão do repositorio supracitado.

## Rodando o projeto
Você pode acessar o projeto [nessa URL](https://eureka-cep.netlify.app/) ou simplesmente clonar este repo e rodar um ```yarn``` para instalar as dependências seguido de um ```yarn start``` para iniciar o servidor de desenvolvimento.


## Storybook
Para acessar o dashboard do [Storybook](https://storybook.js.org/) desse projeto, após instalar as dependências, basta rodar ```yarn run storybook``` e acessar em ```localhost:6006```. Note que configurei uma instância de [MSW](https://mswjs.io/) para mockar as requisições do storybook.

## Observações finais
### Sobre a API Key
Além de ter comentado no código, gostaria de ressaltar aqui que jamais utilizaria o approach de *hardcodar* uma API Key, muito menos usaria as .envs do React. Numa aplicação real, os dados das APIs usadas nesse projeto seriam servidos pelo backend.
### Sobre o Favicon
Só queria agradecer e recomendar [essa ferramenta](https://realfavicongenerator.net/).