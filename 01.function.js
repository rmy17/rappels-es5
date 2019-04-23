var  nombre1 = 10;
var nombre2 = 20;


function additionner(a , b){
    var resultat = a + b;
    return resultat;
}

var resultat1 = additionner(nombre1,nombre2);
console.log(resultat1);

var somme = additionner;

var resultat2 = somme(nombre1,nombre2);
console.log(resultat2);

function multiplication(nb1, nb2){
    return nb1 * nb2;
}

var resultat3 = multiplication(nombre1,nombre2);
console.log(resultat3);

function soustraction(nb1,nb2){
    return nb1 - nb2;
}

function afficherOperation(nomOpe, Ope,nb1,nb2){
    var result = Ope(nb1, nb2);
    console.log(nomOpe + "("+nb1+","+nb2+")"+" = "+result);
}


afficherOperation("Somme",somme,20,40);
afficherOperation("Multiplication",multiplication,10,20);
afficherOperation("Soustraction",soustraction,15,5);

