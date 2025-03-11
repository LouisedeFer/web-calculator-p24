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


keys.addEventListener('click', e => {
  if (e.target.matches('button')) {
    for (let i=0 ; i<=9; i++) {
        if (e.target.textContent === `${i}`) {
            if (document.getElementById("display").innerHTML==="0") {
                document.getElementById("display").innerHTML=i
            }
            else {
                document.getElementById("display").innerHTML+=i
            }
            console.log(`${i}`)
        }
        if (e.target.textContent === "AC") {
            document.getElementById("display").innerHTML=0
        }


    }
  }
  const key = e.target
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
