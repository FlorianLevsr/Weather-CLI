const keyManager = require('../lib/keyManager');
const weatherAPI = require('../lib/weatherAPI');

const check = {

    async weather (cmd) {
        
        try {

            const command = new keyManager();

            const key = command.getKey();

            const api = new weatherAPI(key);

            const checkOutputData = await api.getWeatherData(cmd.city);

            console.log(checkOutputData.yellow);

        } catch (error) {

            console.error(error.red);

        }

    }

}

module.exports = check;