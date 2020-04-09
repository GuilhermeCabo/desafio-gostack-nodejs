<img alt="GoStack" src="https://storage.googleapis.com/golden-wind/bootcamp-gostack/header-desafios.png" />

<h3 align="center"> Desafio 02 - Módulo 01 - Node.js </h3>

<p>
  Esse projeto faz parte do Bootcamp GoStack da Rocketseat, e foi proposto como um desafio do Módulo 01 referente aos conceitos básicos de Node.js
</p>

<p>
  Nesse desafio, é proposto que se faça um CRUD de repositórios de projeto, utilizando-se da memória da aplicação, e não de um banco de dados, para armazenar as informações. Isso foi feito para que apenas sejam fixados os conceitos básicos ensinados no Módulo 01.
</p>

## Rotas da aplicação

- **`POST /repositories`**: Rota para criação de um novo repositório na aplicação

- **`GET /repositories`**: Rota para listagem dos repositórios criados

- **`PUT /repositories/:id`**: Rota para atualização de informações do repositório por meio de sua ID (somente título, url e techs são alteráveis por essa rota)

- **`DELETE /repositories/:id`**: Rota para exclusão de um projeto por meio de sua ID

- **`POST /repositories/:id/like`**: Rota para incrementação no número de LIKES de um projeto por meio de sua ID


:heavy_check_mark: Etapa concluída!
