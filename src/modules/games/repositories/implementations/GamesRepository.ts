import { getRepository, Repository } from 'typeorm';

import { User } from '../../../users/entities/User';
import { Game } from '../../entities/Game';

import { IGamesRepository } from '../IGamesRepository';

export class GamesRepository implements IGamesRepository {
  private repository: Repository<Game>;

  constructor() {
    this.repository = getRepository(Game);
  }

  async findByTitleContaining(param: string): Promise<Game[]> {
    return await this.repository
      .createQueryBuilder("games")
      .where("games.title ILIKE '%'||:title||'%'", {title: param})
      .getMany();
  }

  async countAllGames(): Promise<[{ count: string }]> {
    return await this.repository.query('SELECT COUNT(*) FROM games'); 
  }

    async findUsersByGameId(id: string): Promise<User[]> {
      return this.repository
      .createQueryBuilder("user_game")
      .relation(Game, "users")
      .of(id)
      .loadMany()
       

    }
}
