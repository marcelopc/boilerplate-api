import { Database } from '../../core/infra/config/types';
import Sequelize from './sequelize';

export const dataBase = {
  connection: async (input: Database) => {
    await Sequelize.startConnection(input);
  },
};
