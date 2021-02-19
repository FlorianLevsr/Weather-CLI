#!/usr/bin/env node

const program = require('commander');
const pkg = require('../package.json');

program
    .version(pkg.version)
    .command('key', 'Gestion de la clé API - https://openweathermap.org/price - option gratuite')
    .command('check', 'Voir la météo')
    .parse(process.argv);
