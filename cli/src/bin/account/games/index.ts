import commander from 'commander';

export function gamesCommand(program: commander.Command) {
  const account = program.command('games');

  const add = account
    .command('add')
    .arguments('[email]')
    .description(`Add games to an existing shift account.

Available games:
  bl1  Borderlands 1
  bl2  Borderlands 2
  tps  Borderlands: The Pre-Sequel
  bl3  Borderlands 3`)
    .option('-s, --steam [games...]', 'Steam games')
    .option('-x, --xbox [games...]', 'Xbox games')
    .option('-p, --psn [games...]', 'Playstation games')
    .option('-e, --epic [games...]', 'Epic Store games')

    .action(async (email) => {
      const opts = add.opts();

      // If email provided, use it
      // Else use "current" email
      // If none, fail
    });


  const remove = account
    .command('remove')
    .arguments('[email]')
    .description(`Remove games to an existing shift account.

Available games:
  bl1  Borderlands 1
  bl2  Borderlands 2
  tps  Borderlands: The Pre-Sequel
  bl3  Borderlands 3`)
    .option('-s, --steam [games...]', 'Steam games')
    .option('-x, --xbox [games...]', 'Xbox games')
    .option('-p, --psn [games...]', 'Playstation games')
    .option('-e, --epic [games...]', 'Epic Store games')

    .action(async (email) => {
      const opts = remove.opts();

      // If email provided, use it
      // Else use "current" email
      // If none, fail
    });

  return account;
}