//* On affiche le menu *//
function menutableau(tab = []) {

    let selection = prompt("Que souhaitez-vous faire ? : \n 1) Affichage tout les postes \n 2) Affichage du contenu d'un poste spécifique \n 3) Affichage du maximum et de la moyenne ");

    if (selection !== null && selection !== " ") {
        while (isNaN(selection)) {
            selection = prompt("Veuillez indiquez le numéro correspondant à l 'action que vous souhaiter effectuer : \n 1) Afficher tout les postes , \n 2) Rechercher un poste spécifique, \n 3) Afficher le poste maximum et la moyenne ");
        }

        switch (selection) {
            case '1 ':
                AfficherTab(tab);
                break;
            case '2 ':
                RechercheTab(tab);
                break;
            case '3 ':
                InfoTab(tab);
                break;
            default:
                alert("ce numéro de menu n'existe pas ");
                menutableau(tab);
                break;
        }

    }

}
/*
 * on affiche tout le contenu du tableau
 * */
function AfficherTab(tab = []) {
    alert(tab.join("- ")); // affiche les elements du tableau séparer par un '-'
    menutableau(tab);
}

function RechercheTab(tab = []) {
    let index = prompt("Quel index du tableau voulez-vous ? ");
    if (index !== null) {
        while (isNaN(index)) { // verifie que la valeur du tableau est un nombre
            index = prompt("L 'index saisie n'est pas un nombre , veuillez saisir l 'index du poste que vous recherchez");
            if (index == null) { // si clique sur annuler
                return;
            }

        }
        if (tab[parseInt(index - 1)] == undefined) { // si le nombre saisie n'est pas trouver dans le tableau let reco=confirm( "le tableau ne comporte pas cette donnée, recommencer ? "); if (reco) { //si il veux recommencer RechercheTab(tab); } else
            { menutableau(tab); }
        } else {
            alert(tab[parseInt(index - 1)]);
            RechercheTab(tab);
        }
    } else { menutableau(tab); }
}

function InfoTab(tab = []) {
    let max = Math.max.apply(null, tab); // selectionne la valeur la plus grande du tableau let somme=0 ; tab.forEach(function(item){
    // fait somme de tout les elements du tableau somme+=parseInt(item);}); let moy=M ath.round( (somme / tab.length)*100)/100; // calcule la moyenne , arrondi au dixieme pres alert ( " Le plus grand poste du tableau est "+ max +
    " \n La moyenne des postes est de : " + moy);
menutableau(tab);