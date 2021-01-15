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


//Genero 5 numeri random e ne creo un array;
var generatedNumber = [];

 while (generatedNumber.length < 5) {
  var createdNumber = randomNumber(1,200)
  generatedNumber.push(createdNumber);

}
alert(generatedNumber);




//Numero tentativi/inserimento numero da parte dell'utente
//Sotto array che popolerò con userInput
var inputAttempts = 5;
var userInputContainer = [];


  setTimeout(function() {

    for (var i = 0; i < inputAttempts; i++) {

      var userInput = parseInt(prompt('Inserisci i tuoi numeri!'))
    if (isNan(userInput)) {
      alert('Inserisci un valore che sia numerico!')
    }
    else {
    userInputContainer.push(userInput);
    }

    }




  }, 5000)//// TODO: set timer a 30 secondi successivamente
