## Desafio Ignit Trilha Node.js chapter 3 Database Queries
***
## Sobre o desafio Database Queries
Nesse desafio, você realizará consultas no banco de dados com o TypeORM de três maneiras:
- Usando o ORM 
- Usando Query Builder
- Usando Raw Query

A aplicação possui dois módulos: users e games. Um usuário pode ter vários jogos e um mesmo jogo pode estar associado a vários usuários. 

### UsersRepository:
- **Método findUserWithGamesById**: Esse método deve receber o Id de um usuário e retornar os dados do usuário encontrado juntamente com os dados de todos os games que esse usuário possui.
- Método findAllUsersOrderedByFirstName: Esse método deve retornar a listagem de usuários cadastrados em ordem alfabética (ASC) Lembre-se que aqui deve ser usado raw query para a consulta.
- **Método findUserByFullName**: Esse método deve receber first_name e last_name e retornar um usuário que possua os mesmos first_name e last_name. Aqui você deve encontrar o usuário ignorando se o argumento passado está em caixa alta ou não. Por exemplo, suponhamos que existe um usuário onde o first_name é Danilo e o last_name é Vieira. O método deve retornar o usuário mesmo que os argumentos passados sejam daNiLo para first_name e vIeiRA para last_name. Essa consulta deve ser realizada utilizando raw query e você pode buscar pelo uso do LOWER no Postgres para resolver esse problema.

### GamesRepository:
- **Método findByTitleContaining** : Esse método deve receber parte do título de um jogo ou o título inteiro e retornar um ou mais jogos que derem match com a consulta. A  consulta também deve ser feita de forma case insensitive, ignorando caixa alta onde no banco não existe. Para exemplo, considerando a busca exemplificada acima, o retorno deve ser o mesmo caso o parâmetro passado seja uma string "nEEd". Você pode buscar pelo uso do ILIKE no Postgres para resolver esse problema. Lembre-se que aqui deve ser usado query builder para realizar a consulta.
- **Método countAllGames**: Esse método deve retornar uma contagem do total de games existentes no banco. Deve ser usada raw query para essa consulta.
- **Método findUsersByGameId**: Esse método deve receber o Id de um game e retornar uma lista de todos os usuários que possuem o game do Id informado