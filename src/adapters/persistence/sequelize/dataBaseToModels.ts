import { SequelizeAuto, type AutoOptions } from 'sequelize-auto';
import Config from '../../../core/infra/config';
import { type Dialect } from 'sequelize';

const fs = require('fs');
const path = require('path');
const basename = path.basename(module.filename);

fs.readdirSync(`${process.cwd()}/src/adapters/persistence/sequelize/models`)
  .filter((file: string) => {
    const fileSlice = file.slice(-3);
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      fileSlice === '.js' &&
      file !== 'associate.js' &&
      file !== 'index.js'
    );
  })
  .forEach((file: string) => {
    fs.unlinkSync(
      `${process.cwd()}/src/adapters/persistence/sequelize/models${file}`
    );
  });

const options: AutoOptions = {
  host: Config.database.host,
  caseFile: 'c',
  caseModel: 'c',
  dialect: Config.database.dialect as Dialect,
  directory: './src/adapters/persistence/sequelize/models',
  singularize: false,
  useDefine: true,
  lang: 'ts',
  noInitModels: true,
};
const auto = new SequelizeAuto(
  Config.database.database,
  Config.database.username,
  Config.database.password,
  options
);

auto.run().catch((error) => {
  console.log(error);
});
