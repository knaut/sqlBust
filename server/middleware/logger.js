import chalk from 'chalk';

export default function logger(req, res, next) {
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
}