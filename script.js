
// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati.
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, 
// sempre compreso tra 1 e 100. L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, 
// altrimenti si continua chiedendo all’utente un altro numero.  La partita termina quando il giocatore 
// inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che 
// l’utente ha inserito un numero consentito.


    // FASE PRELIMINARE
    let bombe = [];
    
    BombsGenerator(16)
    
    console.log(bombe)

    // FASE GAMEPLAY
    let listaUtente = [];
    let numeroUtente;
    let sconfitta = false;

    while (listaUtente.length < 100 - bombe.length && sconfitta == false) {

        let numeroUtente = parseInt(prompt("Scegli un numero da 1 a 100! :D"));

        if (bombe.includes(numeroUtente)) {
            alert("KABOOM. YOU LOSE.")
            sconfitta = true;
        } else if (listaUtente.includes(numeroUtente)) {
            alert("Hai già scelto questo numero...")
            console.log(listaUtente)
        } else if (isNaN(numeroUtente) || numeroUtente < 1 || numeroUtente > 100) {
            alert("Devi scegliere un numero tra 1 e 100. E non sono ammesse parole!!");
        } else {
            listaUtente.push(numeroUtente);
        }
        console.log(listaUtente);
    }

    // FASE FINALE
    if (listaUtente.length == 100 - bombe.length) {
        alert("HAI VINTO!!! Goditi il momento, perchè non succederà mai più.");
        }   else if (listaUtente.length == 1) {
            alert("Hai totalizzato la bellezza di " + listaUtente.length + " punto...")
        }   else {
            alert("Hai totalizzato la bellezza di " + listaUtente.length + " punti...");        
        }

        
    

    // FUNZIONI 

    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min); 
      }

    function BombsGenerator(bombs) {
        while (bombe.length != bombs) {
            let randomNumber = getRandomIntInclusive(1,100);
            while (bombe.includes(randomNumber)) {
                randomNumber = getRandomIntInclusive(1,100);    
            }   
            bombe.push(randomNumber);
        }
    }
