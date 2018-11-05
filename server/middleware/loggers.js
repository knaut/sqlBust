import chalk from 'chalk';
import clear from 'clear';
import Moment from 'moment';

export function request(req, res, next) {
  // log our request

  if (req.method === 'GET') {
    console.log(
      chalk.cyan.bold(req.method),
      chalk.gray(req.headers.host),
      chalk.green(req.url),
    );
  }

  if (req.method === 'POST') {
    console.log(
      chalk.green.bold(req.method),
      chalk.gray(req.headers.host),
      chalk.green(req.url)
    );
  }
  
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
  console.log(`Using platform:`, chalk.magenta( process.env.PLATFORM ))
};