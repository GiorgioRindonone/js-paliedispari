

document.getElementById('btnPalindromo').addEventListener("click", funPalindroma);

function funPalindroma() {
  // Palidroma
  // Chiedere all’utente di inserire una parola
  // Creare una funzione per capire se la parola inserita è palindroma
  // 1. chiedo all'utente di inserire una parola

  var strUtente = prompt("inserisci una parola per vedere se è palindroma");
  if (strUtente == "") {
    alert("inserisci una parola per favore");
    strUtente = prompt("inserisci una parola per vedere se è palindroma");
  }

  //2. uso la funzione split sulla parola inserita dall'Utente per crearmi due stringe della parola

  var str1 = strUtente.split("");
  var str2 = arrayInvert(strUtente.split(""));
  console.log(str1, str2);

  // 3. inverto str2

  function arrayInvert(word) {
    return word.reverse();
  };

  // 4. confronto se è palindroma
  var checkWords ;
  for (var i = 0; i < str1.length; i++) {
    if (str1[i] == str2[i]) {
      console.log("uguale");
      checkWords = "palindroma"
    }
    else {
      console.log("diverso");
      checkWords = "non è palindroma"
    }
  }

  if (checkWords == "palindroma") {
    alert("è palindroma");
  }
  else {
    alert("non è palindroma");
  }

}

document.getElementById('btnPariDisp').addEventListener("click", funPariDisp);

function funPariDisp() {
  // Pari e Dispari
  // L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
  // Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
  // Sommiamo i due numeri
  // Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
  // Dichiariamo chi ha vinto.

  // 1. chiedo all'utente di inserire pari o dispari
  var sceltaUtente = prompt("scegli scrivendo pari o dispari");
  if (sceltaUtente != "pari" && sceltaUtente != "dispari") {
    alert("inserisci le parole corrette (pari)(dispari)");
    sceltaUtente = prompt("scegli scrivendo pari o dispari");
  }
  // 2. chiedo all'utente un numero da 1 a 5
  var numUtente = parseInt(prompt("inserisci un numero da 1 a 5"));
  if (isNaN(numUtente)) {
    alert("inserisci un numero");
    numUtente = parseInt(prompt("inserisci un numero da 1 a 5"));
  } else if (numUtente > 5) {
    alert("inserisci un numero che non sia superiore a 5");
    numUtente = parseInt(prompt("inserisci un numero da 1 a 5"));
  }
  // 3. creo una funzione che mi genera numero random in base a min e max
  function getRandomInt(min, max) {
    return Math.floor((Math.random() * max) + min);
  };
  // 4. genero un numero random per il pc
  var numRandomPc = getRandomInt(1, 5);
  // 5. creo una funzione che faccia una somma
  function getSommaInt(num1, num2) {
    return num1 + num2;
  };
  // 6. uso la funzione per effettuare la somma
  var somma = getSommaInt(numRandomPc, numUtente);
  console.log(somma);

  // 7. creo la funzione per capire se la somma è pari o Dispari
  function checkPariDisp(num3) {
    if (num3 % 2 == 0 ) {
      return "pari";
    } else {
      return "dispari";
    }
  }

  // 8. uso la funzione per vedere se è pari o dispari
  var sommaCheck = checkPariDisp(somma);
  console.log(sommaCheck);
  // 9. faccio il confronto con il valore inserito nel punto 1. per vedere se l'utente ha vinto o perso
  if (sceltaUtente == sommaCheck) {
    alert("hai vinto");
  }else {
    alert("hai perso");
  }

};
