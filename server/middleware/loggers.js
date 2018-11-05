import chalk from 'chalk';
import clear from 'clear';
import Moment from 'moment';

export function request(req, res, next) {
  // log our request
  console.log(
    chalk.green(req.method),
    chalk.gray(req.headers.host),
    chalk.green(req.url),
    chalk.blue('Body:'),
    res.body
  );
  
  // proceed to next middleware
  next();
};

export function welcome(port, clear) {
  if (clear) { 
    clear();
  }
  console.log(
    chalk.bold(` sqlBust `),
    chalk.gray('server started at'),
    chalk.green(`http://0.0.0.0:${port}`),
    chalk.gray(`on`),
    chalk.magenta(`${Moment().format('h:mm:ss A - ddd Do of MMM')}`)
  );
};