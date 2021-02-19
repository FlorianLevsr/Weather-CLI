const axios = require('axios');
const colors = require('colors');

const Factory = require('./../factory/output');

class weatherAPI {

    constructor (apiKey) {

        this.apiKey = apiKey;
        this.baseUrl = `https://api.openweathermap.org/data/2.5/weather`;

    };

    async getWeatherData (cityOption) {

        try {

            const result = await axios.get(`${this.baseUrl}?q=${cityOption}&appid=${this.apiKey}&units=metric&lang=fr`);

            let output = new Factory(result.data);

            return output.getFormatted();

        } catch (error) {

            console.error(error);

        }

    }

}

module.exports = weatherAPI;