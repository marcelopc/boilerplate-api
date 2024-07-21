import Config from './infra/config';
import createServer from './interfaces/web/express/server';

createServer(Config.server.port, Config.database);
