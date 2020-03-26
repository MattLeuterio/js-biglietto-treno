
//TODO
// INPUT:
// 1. Numero Chilometri da percorrere;
// 2. Età

var costoKM = 0.21;
var utKM = parseInt(prompt('Inserire km da percorrere', 100));
var utAge = parseInt(prompt('Inserire età', 16));

document.getElementById('costoKM').innerHTML = costoKM + "€";
document.getElementById('utKM').innerHTML = utKM;
document.getElementById('utAge').innerHTML = utAge;

console.log('costo al KM ' + costoKM);
console.log('Km utente ' + utKM);
console.log('Età utente ' + utAge);

var totale = costoKM * utKM;
var totaleParz = totale.toFixed(2);
console.log('Totale costo senza sconti ' + totaleParz);

document.getElementById('totaleParz').innerHTML = totaleParz;

var sc20 = totale * 0.2;
var sc40 = totale * 0.4;

console.log('sconto da applicare a minorenni ' + sc20);
console.log('sconto da applicare a over 65 ' + sc40);

var totMin;
var tot65;


if (utAge < 18) {
  totMin = totale - sc20;
  totale = totMin;
  document.getElementById('sconto').innerHTML = '-20%';
  console.log('totale minorenne ' + totMin);
} else if (utAge >= 65) {  
  tot65 = totale - sc40;
  totale = tot65;
  document.getElementById('sconto').innerHTML = '-40%';
  console.log('totale over 65 ' + tot65);  
} else {
  document.getElementById('sconto').innerHTML = 'Nessuno sconto applicabile';
  console.log('Nessun Sconto applicabile');
}

document.getElementById('totale').innerHTML = totale.toFixed(2);
console.log(totale);

// Funzione per Stampa Biglietto

function stampaTicket() {
  window.print();
}









// Numero chilometri * prezzo al km 
// Se minorenne applicare sconto 20%
// Se over65 applicare sconto 40%


//OUTPUT: 
// Prezzo Biglietto; Sconto se presente.

