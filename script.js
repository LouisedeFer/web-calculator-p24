// NOTE: Louie de Ferran
// This is the starter file for a blog post "How to build a calculator". You can follow the lesson at https://zellwk.com/blog/calculator-part-1



//Note 
//1. consol log : affiche le bouton sur lequel on a cliqué quand c'est un chiffre 
//il faut attraper l'évenement chiffre 
//il faut afficher les nombres à 1 chiffre là haut
//ensuite on fait le plus
//si on tape que des 0 puis un chiffre on a le chiffre 
//faire le décimal en dernier 

// # START EDITING YOUR JAVASCRIPT HERE
// ===============

const calculator = document.querySelector('.calculator')
const keys = calculator.querySelector('.calculator__keys')

let value_1 = null
let value_2 = "0"
let operator = null

function operate(num1, num2, op) {
  switch (op) {
    case "+": return num1 + num2
    case "-": return num1 - num2
    case "*": return num1 * num2
    case "/": return num2 !== 0 ? num1 / num2 : "Erreur"
    default: return num1
  }
}


keys.addEventListener('click', e => {
  if (e.target.matches('button')) {
    const keyValue = e.target.textContent; // Récupérer la valeur du bouton
    const display = document.getElementById("display");

    // Gestion des chiffres
    if (!isNaN(keyValue)) { // Vérifie si keyValue est un chiffre
      if (display.innerHTML === "0" || operator === "=") {
        display.innerHTML = keyValue; // Remplace le contenu si c'est le début
        operator = null; // Réinitialise l'opérateur après "="
      } else {
        display.innerHTML += keyValue; // Ajoute le chiffre
      }
    }

    // Gestion du bouton "AC"
    if (e.target.dataset.action === "clear") {
      display.innerHTML = "0";
      value_1 = null;
      value_2 = "0";
      operator = null;
    }

    // Gestion des opérateurs
    if (["add", "subtract", "multiply", "divide", "calculate"].includes(e.target.dataset.action)) {
      // Convertir les actions en opérateurs valides
      const actualOperator = e.target.dataset.action === "add" ? "+" :
                             e.target.dataset.action === "subtract" ? "-" :
                             e.target.dataset.action === "multiply" ? "*" :
                             e.target.dataset.action === "divide" ? "/" : null;

      if (e.target.dataset.action !== "calculate") {
        if (value_1 === null) {
          value_1 = parseFloat(display.innerHTML); // Stocke la première valeur
          operator = actualOperator; // Stocke l'opérateur
          display.innerHTML = ""; // Efface l'affichage pour la prochaine entrée
        } else {
          value_2 = parseFloat(display.innerHTML); // Récupère la deuxième valeur
          const result = operate(value_1, value_2, operator); // Effectue l'opération
          display.innerHTML = result; // Affiche le résultat
          value_1 = result; // Met à jour value_1 pour les calculs suivants
          operator = actualOperator; // Met à jour l'opérateur
        }
      } else {
        if (value_1 !== null && operator !== null) {
          value_2 = parseFloat(display.innerHTML); // Récupère la deuxième valeur
          const result = operate(value_1, value_2, operator); // Effectue l'opération
          display.innerHTML = result; // Affiche uniquement le résultat
          value_1 = null; // Réinitialise value_1
          value_2 = "0"; // Réinitialise value_2
          operator = null; // Réinitialise l'opérateur
        }
      }
    }
  }
});

    // //const key = e.target;
    // const action = key.dataset.action
    // if (!action) {
    //   console.log('number key!')
    // }
    // if (
    //   action === 'add' ||
    //   action === 'subtract' ||
    //   action === 'multiply' ||
    //   action === 'divide'
    // ) {
    //   console.log('operator key!')
    // }
    // if (action === 'decimal') {
    //   console.log('decimal key!')
    // }

