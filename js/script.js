

// Descrizione:
// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
// Creare un array di oggetti di studenti.
// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.


//1 - Definisco un oggetto Studente prendendo me stesso come esempio. Inserisco le proprietà nome, cognome e età con relativi chiavi e valori.

var studente1 = {

  nome: "Tommaso",
  cognome: "Borsatti",
  eta: 31,

};
console.log(studente1);


//2 - Uso ciclo FOR IN per attraversare l'oggetto; stampo tutte le proprietà, una chiave alla volta.

for (var key in studente1) {

  console.log(key + ": " + studente1[key]);

}

//3 - Creo un Array contentente oggetti/studenti fittizi; ne metto 3.

var studente2 = {

  nome: "Pigiamino",
  cognome: "Morbidozzi",
  eta: 28,

};

var studente3 = {

  nome: "Mino",
  cognome: "Ciccini",
  eta: 33,

};

var studenti = [studente1, studente2, studente3];

console.log(studenti);

// Uso un ciclo FOR e scorro l'array Studenti; stando attento a scegliere gli indici giusti e le key giuste, stampo le proprietà nome e cognome.
// di tutti gli oggetti/studenti contenuti nell'array.
// NB - Sono costretto a usare la notation con le parentesi quadre.:

for (var i = 0; i < studenti.length; i++) {

  console.log(studenti[i]["nome"] + " " + studenti[i]["cognome"]);

}

// Uso dei prompt per definire le proprietà che costituiranno un quarto studente/oggetto.
// Parto da un oggetto vuoto e assegno le proprietà con la dot notation usando = come si fa con l assegnazione di variabili.
// Aggiungo alcune semplici validazioni dati con dei cicli while.

var studente4 = {};

studente4.nome = prompt("Definisci il nome del quarto studente della classe");

while (!isNaN(studente4.nome)) {
  studente4.nome = prompt("Hei! Il nome del nuovo studente non può essere un numero! Riscrivilo:");
}

studente4.cognome = prompt("Adesso definisci il cognome del quarto studente della classe");

while (!isNaN(studente4.cognome)) {
  studente4.cognome = prompt("Attento! Il cognome del nuovo studente non può essere un numero! Riscrivilo:");
}

studente4.eta = parseInt(prompt("Infine, definisci l'età del quarto studente della classe"));

while (isNaN(studente4.eta) || studente4.eta <= 18) {
  studente4.eta = parseInt(prompt("Fai attenzione! L'età del nuovo studente deve essere per forza un numero maggiore di 18! (Sono ammessi solo studenti maggiorenni)"));
}

console.log(studente4);

// BONUS - Inserisco il nuovo oggetto studente all'interno dell'array studenti, come se fosse aggiunto alla classe.
// Ristampo l'array studenti per controllo e verifico se la classe è stata aggiornata con il nuovo studente iscritto.

studenti.push(studente4);

console.log(studenti);
