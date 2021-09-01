/**
 *  Il computer deve generare 16 numeri casuali tra 1 e 100.
    I numeri non possono essere duplicati.
    In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, 
    sempre compreso tra 1 e 100. L’utente non può inserire più volte lo stesso numero.
    Se il numero è presente nella lista dei numeri generati, la partita termina, 
    altrimenti si continua chiedendo all’utente un altro numero.  La partita termina quando il giocatore 
    inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
    Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che 
    l’utente ha inserito un numero consentito.
* 
*/

//  # PREPARATION
//  1 - Creiamo un bell'array all'interno del quale inserire (poi) le bombe
//  2 - Genero un numero randomico e lo inserisco all'interno dell'array di cui sopra ^, FINCHE' non arrivo a 16
//  3 - Crea un array per ricordare i numeri (scelti) dall'utente
// **** Creo una variable di appoggio per il punteggio

// # GAMEPLAY
// 1) Chiedere un numero all'utente
// 2) Controllare che il numero non sia presente nell'array di bombe !!! ALTRIMENTI KABOOM
// 3) Controllo se per caso lo aveva già scelto (è già presente nell'array dei numeri scelti dall'utente)
// 4) Se il numero non è esplosivo e non è stato scelto, lo aggiungo nell'array dei numeri scelti
//  

// # ENDGAME
// a. Stampiamo il messaggio di alert del gioco (se hai vinto o perso)
// b. Stampiamo il punteggio del giocatore 

    // FASE PRELIMINARE
    let bombe = [];
    
    while (bombe.length != 17) {
        let randomNumber = getRandomIntInclusive(1,100);
        while (bombe.includes(randomNumber)) {
            randomNumber = getRandomIntInclusive(1,100);    
        }   
        bombe.push(randomNumber);
    }
    
    console.log(bombe)

    // FASE GAMEPLAY
    let listaUtente = [];
    let counter = 0;
    
    
    while (counter < (100 - (bombe.length))) {
        let numeroUtente = parseInt(prompt("Scegli un numero da 1 a 100! :D"));

        if (bombe.includes(numeroUtente)) {
            alert("KABOOM. YOU LOSE.")
        } else if (listaUtente.includes(numeroUtente)) {
            numeroUtente = parseInt(prompt("Hai già scelto questo numero! Prova con un altro. ;)"));
            listaUtente.push(numeroUtente);
            console.log(listaUtente)
        } else {
            listaUtente.push(numeroUtente);
            console.log(listaUtente)
        }
        counter ++;
    }

    // FASE FINALE
    alert("HAI VINTO!!! Goditi il momento, perchè non succederà mai più.") 



    // FUNZIONI 

    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min); 
      }