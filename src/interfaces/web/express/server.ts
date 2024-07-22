import Express, { json, urlencoded } from 'express';
import routes from './routers';
import { Database } from '../../../infra/config/types';
import { createServer as createServerHttp } from 'http';
import { dataBase } from '../../../infra/persistence';

export interface ErrnoException extends Error {
  errno?: number;
  code?: string;
  path?: string;
  syscall?: string;
  stack?: string;
}
const onError = (error: ErrnoException, port: number) => {
  if (error.syscall !== 'listen') {
    throw error;
  }
  const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

  // // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
    default:
      throw error;
  }
};

const createServer = async (port: number, dataBaseConfig: Database) => {
  try {
    await dataBase.connection(dataBaseConfig);
    const app = Express();
    app.use(json({ limit: '50mb' }));
    app.use(urlencoded({ extended: false, limit: '50mb' }));

    app.use('/api', routes);

    const server = createServerHttp(app);
    server.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
    server.on('error', (error) => onError(error, port));
  } catch (error) {
    console.error(error);
  }
};

export default createServer;
