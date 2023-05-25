// OPERAZIONI PRELILMINARI //

// Dichiaro le variabili
const suffisso = '21';
let pwd = document.getElementById('pass');
let nome;
let cognome;
let colore_preferito;

// Controllo su console
console.log(suffisso);
console.log(pwd);
console.log(nome);
console.log(cognome);
console.log(colore_preferito);



// SVOLGIMENTO //

// Chiedo input all'utente e salvo nelle relative variabili
nome = prompt('Ciao! Dimmi il tuo nome: ');
console.log(nome);

cognome = prompt('Ora il tuo cognome: ');
console.log(cognome);

colore_preferito = prompt('Qual è il tuo colore preferito? ');
console.log(colore_preferito);

// Concateno le variabili e stampo in pagina il risultato
pwd = nome + cognome + colore_preferito + suffisso;
console.log(pwd);
