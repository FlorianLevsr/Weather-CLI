const inquirer = require('inquirer');
const colors = require('colors');

const keyManager = require('../lib/keyManager');
const { isRequired } = require('../utils/validation');

const key = {

    async set() {

        const command = new keyManager();

        const input = await inquirer.prompt([
            {
                type: 'input',
                name: 'key',
                message: 'Entrez votre clé API'.green,
                validate: isRequired
            }
        ]);

        const key = command.setKey(input.key);

        if (key) {
            console.log('Clé API enregistrée'.blue)
        }

    },

    show() {

        try {

            const command = new keyManager();

            const key = command.getKey();

            console.log(key.yellow);


        } catch (error) {

            console.error(error.message.red);

        }

    },

    remove() {

        const command = new keyManager();

        command.deleteKey();

        console.log('Clé supprimée'.yellow)

    }

}

module.exports = key;