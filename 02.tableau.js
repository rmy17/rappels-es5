var villes = ["nantes","paris","saint-nazaire","angers","le mans"];

villes.forEach(element => {
    console.log(element)
});



console.log("lettreADansToutesLesVilles = "+villes.every(element => element.includes("a")));

console.log("auMoinsUneVilleAvecUnTiret = "+villes.some(element => element.includes("-")))

console.log("villesSansTiretSansEspace  = [" +villes.filter(
    element => !element.match("-") && !element.match(" "))+"]");

var newTab = villes.filter(element => element.endsWith("s")).map(element => element.toUpperCase());
console.log("villesMajusculeSeTerminantParS = "+newTab);

