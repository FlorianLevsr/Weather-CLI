const program = require('commander');
const check = require('../commands/check')

program
    .command('weather')
    .description('Voir la météo')
    .option('--city <city>', 'Ville dont on souhaite avoir la météo', 'Paris')
    .action((cmd) => check.weather(cmd));

program.parse(process.argv);