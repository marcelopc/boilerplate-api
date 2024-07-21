'use strict';

import config from './config.json';
import { Env, Server, Database, Config } from './types';
const env: Env = (process.env.NODE_ENV as Env) || 'development';

const getEnv = (env: Env): Config => {
  return {
    ambiente: env,
    server: config.server[env] as Server,
    database: config.database[env] as Database,
  };
};

export default getEnv(env);
