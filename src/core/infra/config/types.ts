export type Env = 'development' | 'test' | 'production';
export type Server = {
  port: number;
};
export type Dialect =
  | 'mysql'
  | 'postgres'
  | 'sqlite'
  | 'mariadb'
  | 'mssql'
  | 'db2'
  | 'snowflake'
  | 'oracle';
export type Database = {
  database: string;
  username: string;
  password: string;
  host: string;
  dialect: Dialect;
  operatorsAliases: any;
  logging: any;
  pool: any;
};

export type Config = {
  ambiente: Env;
  server: Server;
  database: Database;
};
