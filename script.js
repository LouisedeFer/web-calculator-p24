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
    for (let i=0 ; i<=9; i++) {
        if (e.target.textContent === `${i}`) {
            if (document.getElementById("display").innerHTML==="0") {
                document.getElementById("display").innerHTML=`${i}`
            }
            else {
                document.getElementById("display").innerHTML+=`${i}`
            }
    if (operator) {
      value_2 += keyValue // Concaténation de la chaîne
    } else {
      value_1 = (value_1 === null) ? keyValue : value_1 + keyValue
    }
  }
    if (e.target.textContent === "AC") {
        document.getElementById("display").innerHTML="0"
        value_1 = null
        value_2 = "0"
        operator = null
    }
    else if (["+", "-", "*", "/"].includes(e.target.textContent)) {
      operator = e.target.textContent
      console.log("l'opérateur est")
      console.log(`${operator}`)
      if (value_1===null) {
        value_1 = parseFloat(document.getElementById("display").innerHTML)
        document.getElementById("display").innerHTML="0"
      }
      else if (value_1!==null) {
        res=operate(value_1,parseFloat(value_2),operator)
        console.log("le vrai résultat est")
        console.log(`${res}`)
        document.getElementById("display").innerHTML=res
      }
          }
      else if (e.target.textContent === "=") {
        document.getElementById("display").innerHTML
          }
        }
        }

    const key = e.target;
    const action = key.dataset.action
    if (!action) {
      console.log('number key!')
    }
    if (
      action === 'add' ||
      action === 'subtract' ||
      action === 'multiply' ||
      action === 'divide'
    ) {
      console.log('operator key!')
    }
    if (action === 'decimal') {
      console.log('decimal key!')
    }
})
