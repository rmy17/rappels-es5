
function afficher(resultat){
    console.log(resultat);
}

function recupOperation(add){
    if(add){
    return function(a, b){
    return a+b;
    } 
}else{
        return function(a, b){
            return a - b;
        }
    }
}

afficher(recupOperation()(10,20));
