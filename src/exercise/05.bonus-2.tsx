"use client"
import { types } from "util";
// Les types alias
// http://localhost:3000/alone/exercise/04.ts

// ❌ NE PAS MODIFIER
// Utilitaire ne faisant pas partie de l'exercice
import displayText, { App, init } from "../lib/exerciseHelper"; 
const exercice = () => {
init()

// ✔️ Début de l'exercice

// 🐶 Déclare une variable `civility` et un type `Civility` avec comme valeur possible 'Mr' 'Mme' 'Mlle'

type Civility = 'Mr' | 'Mme' | 'Mlle'
let civility: Civility

// 📝 documentation Literal types https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-types
// avec displayText affiche 'Bonjour Mr' en utilisant civility

civility = 'Mr'
displayText(`Bonjour ${civility}`)

// 🐶 Déclare une variable `uploadSize` et un type `maxUploadSize` avec comme valeur possible 2048 ou 4096

type maxUploadSize = 2048 | 4096
let uploadSize: maxUploadSize

// avec displayText affiche 'Upload size 2048' en utilisant uploadSize

uploadSize = 2048
displayText(`Upload size : ${uploadSize}`)

// 🐶 Déclare un Enum  `HttpStatusCode` et code toutes les valeurs demandées par 👨‍✈️ Hugo
// 📝 documentation declaration Enum https://www.typescriptlang.org/docs/handbook/enums.html

enum HttpStatusCode {
  CONTINUE = 100,
  OK = 200,
  MOVED_PERMANENTLY = 301,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  INTERNAL_SERVER_ERROR = 500,
}

// Créér une variable `httpResponse` et initialise la avec la valeur '400' sans utliser de Magic String

let httpResponse = HttpStatusCode.BAD_REQUEST

// avec displayText affiche 'Reponse du serveur 400' en utilisant httpResponse

displayText(`Reponse du serveur ${httpResponse}`)

// 🐶 Déclare un Enum  `TransfertMessage` et code toutes les valeurs demandées par 👨‍✈️ Hugo

enum TransfertMessage {
  SUCCES = 'Transfert avec succès',
  ERROR = 'Erreur durant le transfert',
  RETRY = 'Recommencez le transfert',
}

// Créér une variable `message` et initialise la avec la valeur 'Transfert avec succès' sans utliser de Magic String

let message = TransfertMessage.SUCCES

// avec displayText affiche 'Message : Transfert avec succès' en utilisant `message`

displayText(`Message : ${message}`)

// Bonus
enum Note {
  NOTE1 = 1,
  NOTE2,
  NOTE3,
  NOTE4,
  NOTE5,
  NSP = 'Ne se prononce pas'
}

displayText(`Note: ${Note.NSP}`)

/*
eslint
  @typescript-eslint/no-unused-vars: "off"
*/
};
export default () => <App exercice={exercice} />;