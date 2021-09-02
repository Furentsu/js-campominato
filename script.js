// FASE PRELIMINARE
let bombe = [];
gameInitialization();
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

function bombsGenerator(bombs) {
    let bombsArray = [];
    while (bombsArray.length != bombs) {
        let randomNumber = getRandomIntInclusive(1,100);
        while (bombsArray.includes(randomNumber)) {
            randomNumber = getRandomIntInclusive(1,100);    
        }   
        bombsArray.push(randomNumber);
    }
    return bombsArray;
}

function gameInitialization() {
    let difficolta = parseInt(prompt("Seleziona il livello di difficoltà: 1, 2, 3, oppure se ti vuoi ancora più male 4."))
    
    while (difficolta <= 0 || difficolta > 3){
        difficolta = parseInt(prompt("Per favore inserisci il livello corretto di difficoltà: 1, 2, 3, oppure 4!"));
        }   
        switch(difficolta) {
            case 1:
                bombe = bombsGenerator(16);
                break;
            case 2:
                bombe = bombsGenerator(32);
                break;
            case 3:
                bombe = bombsGenerator(48);
                break;
            case 4: 
                bombe = bombsGenerator(60);
                break;
            default:
                alert("Hai voluto scherzare con il fuoco...hai una sola possibilità di vincere. Buona fortuna.")
                bombe = bombsGenerator(99);
            }   
}