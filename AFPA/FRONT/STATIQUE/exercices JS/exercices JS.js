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