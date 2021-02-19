# Weather CLI

Node.js CLI permettant d'obtenir la météo d'une ville choisie. L'obtention d'une clé est indispensable. https://openweathermap.org/price - obtention gratuite. Une fois l'inscription terminée, il est alors possible de récupérer sa clé: https://home.openweathermap.org/api_keys


# Packages utilisés

- Inquirer
- Commander
- Colors
- Axios
- Configstore

# Installation

```
npm install
npm link
```

# Commandes disponibles

```
# Aide & commandes
weather -h

# Version
weather -V

# Commande srelatives à la clé API
weather key set
weather key show
weather key remove

# Obtenir la météo pour une ville choisie
weather check weather '<ville de votre choix>'
```

<hr/>

<p align="center">
<img alight="center" src="https://i.ibb.co/5vgGdbV/weather-cli.png">
</p>
