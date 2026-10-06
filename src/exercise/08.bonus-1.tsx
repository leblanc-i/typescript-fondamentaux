"use client"
// Les fonctions
// http://localhost:3000/alone/exercise/08.ts

// ❌ NE PAS MODIFIER
// Utilitaire ne faisant pas partie de l'exercice
import displayText, { App, init } from "../lib/exerciseHelper"; 
const exercice = () => {
init()

// ✔️ Début de l'exercice
// 🐶 Remplace le type `any` de `doSomeThing` qui est trop généraliste
//  pour ques les fonctions `doSomeThing` ci-après fonctionnement
let doSomeThing: Function

// ❌ NE PAS MODIFIER
doSomeThing = () => {
  displayText(`Hello developpeur`)
}
doSomeThing()

doSomeThing = (name: string) => {
  displayText(`Hello ${name}`)
}
doSomeThing('John')
// ❌ END

// 🐶 Implemente et spécifie les paramètres et types de la fonction `sum`
// n'oublie pas de spécifier le type de retour
function sum(a: number, b: number): string {
  return (`La somme de ${a} et ${b} donne ${a+b}`)
}
displayText(`${sum(2, 3)}`)

// 🚀 N'oublie pas les bonus

let carre: Function
carre = (base: number): number => {
    return base * base
}

function carreExp(cb: Function, base: number): string {
    return `${base} au carré ${cb(base)}`
}
displayText(`${carreExp(carre, 5)}`)

/*
eslint
  @typescript-eslint/no-unused-vars: "off"
*/
};
export default () => <App exercice={exercice} />;