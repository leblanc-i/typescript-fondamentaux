"use client"
// Les tuples
// http://localhost:3000/alone/exercise/06.ts

// ❌ NE PAS MODIFIER
// Utilitaire ne faisant pas partie de l'exercice
import displayText, { App, init } from "../lib/exerciseHelper"; 
const exercice = () => {
init()

// ✔️ Début de l'exercice

// 🐶 Déclare un type `Connexion` un tuple contennant toutes les informations utile a la connexion
// - le nom de la connexion  (ex : Connexion à Google) `string`
// - le protocole (ex : ftp, http) `string`
// - le hostname (ex : google.com) `string`
// - le port  (ex : 423) `number`
// - le username : (ex : admin) `string`
// - le password (ex : admin) `string`
// 📝 documentation tuples https://www.typescriptlang.org/docs/handbook/2/objects.html#tuple-types

enum Protocol {
    HTTP = 'http',
    HTTPS = 'https',
    FTP = 'ftp',
}

type Connexion = [string, Protocol, string, number, string, string]

// 🐶 Créer une variable 'google' qui contiendra les infos de connexion à google
// https google.com 443

let google: Connexion = ['Google', Protocol.HTTPS, 'google.com', 423, '', '']

// Affiche le resultat à l'ecran avec le code
displayText(`Connexion ${google[0]} : ${google[1]}://${google[2]}:${google[3]} `)

// 🐶 créer 3 autres connexions de ton choix et affiche le resultat à l'écran

const miscrosoft: Connexion = ['Microsoft', Protocol.HTTPS, 'outlook.com', 422, '', '']
const brave: Connexion = ['Brave', Protocol.FTP, 'brave.com', 420, '', '']
const explorer: Connexion = ['Explorer', Protocol.HTTPS, 'explorer.com', 421, '', '']

displayText(`Connexion ${miscrosoft[0]} : ${miscrosoft[1]}://${miscrosoft[2]}:${miscrosoft[3]} `)
displayText(`Connexion ${brave[0]} : ${brave[1]}://${brave[2]}:${brave[3]} `)
displayText(`Connexion ${explorer[0]} : ${explorer[1]}://${explorer[2]}:${explorer[3]} `)

// 🐶 créer un tableau `connexions` qui contiendra toutes les connexions
// Ajoute des connexion via l'initialisation et via la méthode `push`

let connections: Connexion[] = []
connections.push(google, miscrosoft, brave, explorer)

displayText(`Il y a ${connections.length} connexions`)

/*
eslint
  @typescript-eslint/no-unused-vars: "off"
*/
};
export default () => <App exercice={exercice} />;