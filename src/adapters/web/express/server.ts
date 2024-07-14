import Express from 'express';
import routes from './routers';
import Config from '../../../core/infra/config';
import { Database } from '../../../core/infra/config/types';
import { createServer } from 'http';
import { dataBase } from '../../persistence';

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

const startServer = async (port: number, dataBaseConfig: Database) => {
  try {
    await dataBase.connection(dataBaseConfig);
    const app = Express();

    app.use('/api', routes);

    const server = createServer(app);
    server.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
    server.on('error', (error) => onError(error, port));
  } catch (error) {
    console.error(error);
  }
};

startServer(Config.server.port, Config.database);
