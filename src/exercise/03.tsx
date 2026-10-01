"use client"
import { stringify } from "querystring";
// Les objets
// http://localhost:3000/alone/exercise/03.ts

// ❌ NE PAS MODIFIER
// Utilitaire ne faisant pas partie de l'exercice
import displayText, { App, init } from "../lib/exerciseHelper"; 
const exercice = () => {
init()

// ✔️ Début de l'exercice

// 🐶 Déclare une variable `person` (sans initialiser de valeur)
// definie les propriétés / types suivants
//
// - name de type string
// - age de type number
// - isActive de type boolean
// - roles un tableau de string
// - params un object non defini
// - payload peut avoir n'importe quel type

let person: {
  name: string,
  age: number,
  isActive: boolean,
  roles: string[],
  params: object,
  payload: any
  friend: {
    name: string
  }
}

// 🐶 affecte des valeurs à person
// laisse payload undefined
person = {
  name: "john",
  age: 30,
  isActive: true,
  roles: ['ADMIN', 'User', 'Tester'],
  params: {id: 50},
  payload: undefined,
  friend: {
    name: 'Mike'
  }
}

// 🤖 Affiche dans le navigateur grace à `displayText` le libellé suivant
// 'John à 30 ans et a le role ADMIN'
displayText(`${person.name} à ${person.age} ans et a le role ${person.roles[0]}`)
displayText(`${person.name} à pour ami ${person.friend.name}`)

/*
eslint
  @typescript-eslint/no-unused-vars: "off"
*/
};
export default () => <App exercice={exercice} />;