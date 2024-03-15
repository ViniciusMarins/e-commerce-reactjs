# E-commerce Reactjs

Projeto front-end de desenvolvimento de um site e-commerce utilizando a API do mercado livre

[>> Link para a aplicação <<](https://e-commerce-reactjs-shopstore.netlify.app/)

## React + TypeScript + Vite

**Tecnologias:** HTML5, CSS3 e ReactJs.

## Deploy

### Instalar dependências e rodar aplicação

```bash
yarn
yarn dev
```

## Documentação da API

#### [>> Documentação Oficial <<](https://developers.mercadolivre.com.br/pt_br/itens-e-buscas)

#### Realizar a busca de um produto

```http
  GET https://api.mercadolibre.com/sites/MLB/search?q=${query}
```

| Parâmetro | Tipo     | Descrição                     |
| :-------- | :------- | :---------------------------- |
| `query`   | `string` | Nome do produto a ser buscado |

## Bibliotecas Utilizadas

- [axios](https://axios-http.com/ptbr/docs/intro)
- [react-toastify](https://fkhadra.github.io/react-toastify/introduction/)
- [react-icons](https://react-icons.github.io/react-icons/)
