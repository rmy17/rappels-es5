function Personne(nom,prenom,pseudo){
    this.nom = nom;
    this.prenom = prenom;
    this.pseudo = pseudo;
    this.getNomComplet = function(){
        return this.nom+" "+this.prenom+" "+this.pseudo;
    }
}

var jules =new Personne("Jules","LEMAIRE","jules77");
var paul = new Personne("Paul","LEMAIRE","paul44");

console.log("nom : "+jules.nom+"\nprenom : "+jules.prenom+"\npseudo : "+jules.pseudo+ "\nnomcomplet : "+jules.getNomComplet()+"\n");
console.log("nom : "+paul.nom+"\nprenom : "+paul.prenom+"\npseudo : "+paul.pseudo+ "\nnomcomplet : "+paul.getNomComplet()+"\n");

function affichePersonne(pers){
    console.log("nom : "+pers.nom+"\nprenom : "+pers.prenom+"\npseudo : "+pers.pseudo+ "\nnomcomplet : "+pers.getNomComplet()+"\n");
}
affichePersonne(paul);

jules.pseudo = "jules44";
console.log(jules.getNomComplet());
jules.age;
console.log(jules.age);

Personne.prototype.age ="NON RENSEIGNE";

console.log(jules.age);

jules.age = 30;
console.log(jules.age);

Personne.prototype.getIntiale = function(){
    return this.prenom.charAt(0)+" "+this.nom.charAt(0);
}

console.log(jules.getIntiale());

var robert={
    prenom : "Robert",
    nom : "LEPREFET",
    pseudo : "robert77",
    getNomComplet : function(){
        return this.nom+" "+this.prenom+" "+this.pseudo;
    }
}

affichePersonne(robert);


function Client(nom, prenom, pseudo, numero){
    Personne.call(this, nom,prenom,pseudo);
    this.numero = numero;
    this.getNomComplet = function() {
        return this.nom+" "+this.prenom+" "+this.numero;
    }
}

Client.prototype.getInfo = function(){
    return this.numero+" "+this.nom+" "+this.prenom;
}

var steve = new Client("LUCAS", "Steve","steve44","A01");
console.log(steve.prenom);

affichePersonne(steve);

console.log(steve.numero);
console.log(steve.getInfo());


