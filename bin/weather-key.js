const program = require('commander');

const key = require('../commands/key');

program
    .command('set')
    .description('Enregistrer la clé API')
    .action(key.set);

program
    .command('show')
    .description('Montrer la clé API enregistrée')
    .action(key.show);

program
    .command('remove')
    .description('Supprimer la clé API enregistrée')
    .action(key.remove);

program.parse(process.argv);