// Un alert espone 5 numeri casuali diversi.
// Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
// Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.
// Consigli del giorno:
// * Pensate prima in italiano.
// * Dividete in piccoli problemi la consegna.
// * Individuate gli elementi di cui avete bisogno per realizzae il programma.


// funzione per numeri randomici
function randomNumber(min, max) {
 var result = Math.floor(Math.random() * (max + 1 - min) + min);
 return result;
}


//Numero tentativi/inserimento numero da parte dell'utente
//Sotto array che popolerò con userInput,i numeri che l'utente inserirà;
var inputAttempts = 5;
var userInputContainer = [];
//Array che popolerò con i numeri generati randomicamente
var generatedNumber = [];
//variabile contatore delle volte che l'utente indovinerà il Numero
var counter = 0;



//Genero 5 numeri random popolando la variabile generatedNumber;
 while (generatedNumber.length < 5) {
  var createdNumber = randomNumber(1,200)
  generatedNumber.push(createdNumber);

}
alert(generatedNumber);





//Chiedo all'utente di inserire 5 numeri,controllando che l'input sia di tipo numerico
setTimeout(function() {

  for (var i = 0; i < inputAttempts; i++) {

    var userInput = parseInt(prompt('Inserisci i tuoi numeri!'))

    if (isNaN(userInput)) {
      alert('Inserisci un valore che sia numerico!')
    }
    else {
      userInputContainer.push(userInput);
    }
    //verifico le volte che l'utente indovinerà i numeri
    if (generatedNumber.includes(userInput)) {
      counter++;


    }
  }var result = alert('Numeri indovinati: ' + counter )
}, 5000)//// TODO: set timer a 30 secondi successivamente
