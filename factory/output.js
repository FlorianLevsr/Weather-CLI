class createOutput {

    constructor (data) {
        this.city = data.name,
        this.description = data.weather[0].description,
        this.temp = data.main.temp,
        this.humidity = data.main.humidity
    };

    getFormatted() {
        return ` Ville: ${this.city}, \n Ciel: ${this.description}, \n Température: ${this.temp}°C, \n Humidité: ${this.humidity}%`
    };

};

module.exports = createOutput;
