<h1 align="center">
<img src="./public/assets/mochi.png" alt="mochi-logo" width="250px"/>
</h1>

<h4 align="center">Programa de Formação FCamara - Squad 9 - Mochi.</h4>

## Sobre a Mochi :computer:
Mochi é um site que ajuda os estudantes a terem maior aproveitamento das aulas através da doação de materiais.
Nele, os responsáveis pelos alunos podem cadastrá-los e disponibilizar uma lista com os materiais que eles precisam. Já os doadores, acessam o site anonimamente e doam os materiais aos alunos, na instituição.

## Instalando e rodando o projeto :gear:
> Avisos:
> * Este projeto utiliza o MongoDB com a biblioteca mongoose, será necessário cadastrar uma conta e obter o string de conexão.
> * É necessário que seja utilizada a versão v14.16.0 do Node.js para rodar o projeto.


1. Faça um clone deste repositório na sua máquina;
`https://github.com/Mochi-squad9/Mochi.git`

2. Após clonar o repositório, navegue até a pasta /Mochi e instale as dependências do projeto;
```sh
  npm install
```
3.  Depois vá na pasta raiz do projeto, e crie um arquivo `.env`. Copie o string de conexão do MongoDB: 
```env
   DB_CONNECTION=mongodb+srv://mochiUser:mochiPassword@cluster0.1svvs.mongodb.net/mochidb?retryWrites=true&w=majority
   PORT=3000
```

4. Agora, com tudo configurado, no seu terminal, navegue até a pasta principal do projeto e execute o comando abaixo:
```sh
   npm run dev
```

5. Pronto! Agora é só ir no seu navegador favorito e acessar a rota [`http://localhost:3000`](http://localhost:3000/)

#### Você também pode acessar o projeto [aqui](https://mochi-squad9.herokuapp.com/).

## Equipe :star2:
- [Joyce Guedes (UX)](https://www.linkedin.com/in/joyce-guedes/)
- [Mirian Falconi (DEV)](https://www.linkedin.com/in/mirian-falconi-8a14a91aa/)
- [Pablo González (DEV)](https://www.linkedin.com/in/pablo-agust%C3%ADn-gonz%C3%A1lez-4243a7b2/)
- [Roberta Bononi (DEV)](https://www.linkedin.com/in/robertabononi/)
- [Roni Campos (UX)](https://www.linkedin.com/in/ronicampos/)
- [Samuel Lorena (DEV)](https://www.linkedin.com/in/samuel-wenceslau-lorena-18a008183/)
