import { Sequelize, Dialect } from 'sequelize';

type InputStartConnection = {
  database: string;
  username: string;
  password: string;
  host: string;
  dialect: Dialect;
  operatorsAliases: any;
  logging: any;
  pool: any;
};
export const startConnection = async (input: InputStartConnection) => {
  try {
    const sequelizeInstance = new Sequelize(
      input.database,
      input.username,
      input.password,
      {
        host: input.host,
        dialect: input.dialect,
        operatorsAliases: input.operatorsAliases,
        logging: input.logging,
        pool: input.pool,
      }
    );

    await sequelizeInstance.authenticate();
    console.log('Connection has been established successfully.');
    return sequelizeInstance;
  } catch (error) {
    throw error;
  }
};

export default {
  startConnection,
};
