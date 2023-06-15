// OPERAZIONI PRELILMINARI //
// Dichiaro le variabili
const suffisso = '21';
let pwd = document.getElementById('pass');

// Chiedo input all'utente e salvo nelle relative variabili
const nome = prompt('Ciao! Dimmi il tuo nome: ');
const cognome = prompt('Ora il tuo cognome: ');
const colore_preferito = prompt('Qual è il tuo colore preferito? ');

// SVOLGIMENTO //
// Concateno le variabili e stampo in pagina il risultato
pwd = nome + cognome + colore_preferito + suffisso;

// Stampo nella pagina il risultato
pass.innerText = pwd;