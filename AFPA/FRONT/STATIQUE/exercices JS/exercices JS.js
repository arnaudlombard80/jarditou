// exo nom prenom monsieur

var nom = window.prompt("Entrez votre nom");
var prenom = window.prompt("Entrez votre prénom");
if (window.confirm("Etes vous un homme") == true) {
    alert("Bonjour Monsieur " + nom + " " + prenom + "\nBienvenue sur notre site web");
} else {
    alert("Bonjour Madame " + nom + " " + prenom + "\nBienvenue sur notre site web");
}
document.getElementById("exo1").innerHTML = "";


//exo operateur chaine de carctere 100
var a = "100"
var b = 100
var c = 1.00
var d = true
alert("ceci est une chaine de caracteres:" + " " + a);
alert(--b)
alert(c += a)
alert(d = !d)







//EXEMPLE DE CONDITIONNELLE age
var reponse
reponse = prompt("Entre ton age", 0)
if (reponse > 20) {
    alert('tu es vieux')
}

//EXEMPLE DE CONDITIONNELLE tranche age
var age
age = prompt("Quel age as-tu ?", 0)
if (age < 12) {
    alert("tu es un enfant")
} else {
    if (age < 18) {
        alert(" tu es un adolescent")
    } else {
        alert("tu es adulte")
    }
}

//EXEMPLE oui ou non
var reponse = window.prompt("Entrez oui ou non");
if (reponse == "oui") {
    alert("Bonne réponse ");
} else {
    alert("mauvaise réponse ");
}

//EXEMPLE oui non inconnue
var reponse = window.prompt("Entrez oui ou non");
if (reponse == "oui") {
    console.log("Bonne réponse ");
} else if (reponse == "non") {
    console.log("mauvaise réponse ");
} else {
    console.log("réponse inconnue ");
}

//Exercice 1 Parité pair impair
// Ecrivez un programme qui demande un nombre à l'utilisateur puis qui teste si ce nombre est pair. Le programme doit afficher le résultat nombre pair ou nombre impair. Vous devez utiliser l'opérateur modulo % qui donne le reste d'une division. a%2 donne le reste de la division de a par 2, si ce reste est égal à zéro, a est divisible par 2.

var nb = window.prompt("Saisissez un nombre");
if (nb % 2 == 0)
    alert("Ce nombre est pair");
else
    alert("Ce nombre est impair");

//Exercice 2 Age
// Ecrivez un programme qui demande l'année de naissance à l'utilisateur. En réponse votre programme doit afficher l'âge de l'utilisateur et indiquer si l'utilisateur est majeur ou mineur.

var dob = window.prompt('Année de naissance');
var today = new Date();
var currentYear = today.getFullYear();
var age = currentYear - dob;

if (age < 18) {
    alert('Vous êtes mineur. Vous avez ' + age + 'ans.');
} else {
    alert('Vous êtes majeur. Vous avez ' + age + 'ans.');
}

// exercice 3 calculette
// Faire la saisie de 2 nombres entiers, puis la saisie d'un opérateur +, -, * ou /.
// Si l'utilisateur entre un opérateur erroné, le programme affichera un message d'erreur.
// Dans le cas contraire, le programme effectuera l'opération demandée (en prévoyant le cas d'erreur division par 0), puis affichera le résultat.

const nb1 = Number(prompt('Premier nombre'));
const nb2 = Number(prompt('Deuxième nombre'));
let op = prompt('Opérateur');
if (nb2 == 0 && op == '/') {
    alert('division par 0');
} else {
    switch (op) {
        case '/':
            alert(nb1 / nb2);
            break;
        case '+':
            alert(nb1 + nb2);
            break;
        case '*':
            alert(nb1 * nb2);
            break;
        case '-':
            alert(nb1 - nb2);
            break;
        default:
            alert('erreur');
    }
}

// exemple exercice 1 boucles JS08
//Créer une page HTML qui demande à l'utilisateur un prénom.
//La page doit continuer à demander des prénoms à l'utilisateur jusqu'à ce qu'il laisse le champ vide.
//Enfin, la page affiche sur la console le nombre de prénoms et les prénoms saisis.

let prenom = "arnaud"
let count = 0
let listNom = [];
while (prenom != "") {
    prenom = window.prompt("Entrez vos prénoms");
    listNom.push(prenom);
}
count = listNom.length - 1
alert("liste des prénoms :" + listNom +
    "\nnombre de prénoms : " + count)


// Exercice 2 - Entiers inférieurs à N
// Ecrire un programme qui affiche les nombres inférieurs à N.

var nombre = parseInt(prompt("Entrez un nombre"));
var stockage = 0;

for (test = 1; test < nombre; test++) {
    stockage = stockage + "," + test
}
alert(stockage);


// Exercice 3 - Moyenne
// Ecrire un programme qui saisit des entiers et en affiche la somme et la moyenne (on arrête la saisie avec la valeur 0).



var nbr = 1;
var moyenne = 0;
var sum = 0;
var nb_notes = 0;

while (nbr != 0) {
    nbr = parseInt(window.prompt("Saisissez un nombre"));
    sum += nbr;
    nb_notes++;
}
moyenne = sum / (nb_notes - 1);
alert("Somme : " + sum + ", Moyenne : " + moyenne);

// Exercice 4 - Multiples
// Ecrire un programme qui calcule les N premiers multiples d'un nombre entier X, N et X étant entrés au clavier.

var X = parseInt(window.prompt('Saisissez un nombre :'));
var N = parseInt(window.prompt('Saisissez le nombre de multiple :'));
var total = 0;

for (i = 0; i <= N; i++) {
    total = i * X;
}
alert(X + ' x ' + (i - 1) + ' = ' + total);


// Exercice 5 - Nombre de voyelles.
// Ecrire le programme qui compte le nombre de voyelles d’un mot saisi au clavier, en utilisant :

var word = window.prompt('Saisir un mot :').toLowerCase();
var wordLength = word.length;
var count = 0;

for (i = 0; i < wordLength; i++) {
    switch (word[i]) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
        case 'y':

            count++;
            break;
        default:
            ' ';
    }
}
alert('Nombre de voyelle(s) dans le mot ' + word + ' : ' + count);

// EXERCICE 1 FONCTIONS
//Créer la fonctions suivante :
//produit(x, y) qui retourne le produit des 2 variables x, y passées en paramètre.

function produit(x, y) {
    return x * y;
}
let resultat = alert(produit(2, 4));

// Exercice 1bis - fonctions
function affichageImg(image)
let imgDiv = document.getElementById("imgDiv")
let imgelement

// Exercice 2 - string token 



// Exercice 1 - TABLEAUX
//Ecrivez un programme permettant de créer un tableau, dont la taille est saisie au clavier.
//Ensuite l'utilisateur doit rentrer les différentes valeurs du tableau.
//Puis votre programme doit afficher le contenu du tableau.

var tableau = [];
var nombre = parseInt(prompt("Définissez la taille du tableau"));

for (counter = 0; counter < nombre; counter++) {
    var donnée = prompt("Entrez une donnée");
    tableau[counter] = donnée;
}
alert(tableau);



//Exercice 2 - TABLEAUX
//Créer le programme qui fournira un menu permettant d’obtenir les fonctionnalités suivantes à partir d’un tableau à une dimension :
//Affichage du contenu de tous les postes du tableau,
//Affichage du contenu d’un poste dont l’index est saisi au clavier,
//Affichage du maximum et de la moyenne des postes du tableau
//Ce programme sera structuré de la manière suivante :
//une fonction GetInteger pour lire un entier au clavier,
//une fonction InitTab pour créer et initialiser l’instance de tableau : le nombre de postes souhaité sera entré au clavier,
//une fonction SaisieTab pour permettre la saisie des différents postes du tableau,
//une fonction AfficheTab pour afficher tous les postes du tableau,
//une fonction RechercheTab pour afficher le contenu d’un poste de tableau dont le rang est saisi au clavier
//une fonction InfoTab qui affichera le maximum et la moyenne des postes.
//Les fonctions seront appelées successivement.

function SaisieTab(nb) {

    let tab = new Array();
    for (let i = 1; i <= nb; i++) {
        let index = prompt("veuillez saisir la donnée numéro " + i + " : ");

        if (index !== null && index !== "") { //si l'utilisateur a rentrer une valeur et qu'il n'a pas cliqué sur annuler
            while (isNaN(index)) {
                index = prompt("L' index saisi n'est pas un nombre , veuillez saisir le numéro du poste a entrer");
                if (index == null) {
                    return;
                }

            }
            tab.push(index);

        } else {
            return;
        }
    }

    menutableau(tab);
}

/*
 * On affiche le menu
 * */
function menutableau(tab = []) {

    let selection = prompt("Que voulez-vous faire ? : \n 1) Afficher tout les poste  \n 2) Rechercher un poste spécifique \n 3) Afficher le poste maximum et la moyenne ");

    if (selection !== null && selection !== "") {
        while (isNaN(selection)) {
            selection = prompt("Veuillez indiquez le numéro correspondant à l'action que vous souhaiter effectuer : \n 1) Afficher tout les postes , \n 2) Rechercher un poste spécifique, \n 3) Afficher le poste maximum et la moyenne ");
        }

        switch (selection) {
            case '1':
                AfficherTab(tab);
                break;
            case '2':
                RechercheTab(tab);
                break;
            case '3':
                InfoTab(tab);
                break;
            default:
                alert("ce numéro de menu n'existe pas");
                menutableau(tab);
                break;
        }

    }

}
/*
 * on affiche tout le contenu du tableau
 * */
function AfficherTab(tab = []) {
    alert(tab.join("-")); // affiche les elements du tableau séparer par un '-'
    menutableau(tab);
}

function RechercheTab(tab = []) {
    let index = prompt("Quel index du tableau voulez-vous ?");
    if (index !== null) {
        while (isNaN(index)) { // verifie que la valeur du tableau est un nombre
            index = prompt("L'index saisie n'est pas un nombre , veuillez saisir l'index du poste que vous recherchez");
            if (index == null) { // si clique sur annuler
                return;
            }

        }
        if (tab[parseInt(index - 1)] == undefined) { // si le nombre saisie n'est pas trouver dans le tableau
            let reco = confirm("le tableau ne comporte pas cette donnée, recommencer ? ");
            if (reco) { //si il veux recommencer
                RechercheTab(tab);
            } else {
                menutableau(tab);
            }
        } else {
            alert(tab[parseInt(index - 1)]);
            RechercheTab(tab);

        }

    } else {
        menutableau(tab);
    }


}

function InfoTab(tab = []) {
    let max = Math.max.apply(null, tab); // selectionne la valeur la plus grande du tableau
    let somme = 0;
    tab.forEach(function(item) { // fait somme de tout les elements du tableau
        somme += parseInt(item);
    });
    let moy = Math.round((somme / tab.length) * 100) / 100; // calcule la moyenne , arrondi au dixieme pres

    alert(" Le plus grand poste du tableau est " + max + " \n La moyenne des postes est de : " + moy);
    menutableau(tab);
}