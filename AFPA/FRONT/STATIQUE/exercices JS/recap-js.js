/* je suis un commentaire en test
 sur plusieurs lignes*/

///////////////////////////////////////////////////////////////////////////////////////////  Saisie  ///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////  Saisie  ///////////////////////////////////////////////////////////////////////////////////////////
let exo7 = document.getElementById("saisie"); // J'appel l'ID du bouton

exo7.addEventListener("click", function() { saisie() } // Je déclenche la fonction à partir du clic sur le bouton
);

function saisie() // Je crée la fonction
{
    // déclaration des variables
    var firstname = '';
    var count = 1;
    do {
        // on demande à l'utilisateur de saisir un prénom
        firstname = window.prompt('Saisissez le prénom N° ' + count + '\n ou click sur Annuler pour arréter la saisie.');
        // on vérifie la saisie, si le prénom n'est pas null ou absent
        if (firstname != null && firstname != '') {
            // on affiche le prénom ainsi que son numéro
            console.log('Prénom N° ' + count + ': ' + firstname);
            // on incrémente la variable count
            count++;
        }
        // tant que firstname est différent de null et n'est pas une chaine de caratères vide 
    } while (firstname != null && firstname != '');
}
////////////////////////////////////////////////
function b1() {
    var div = document.getElementById("b1");
    if (div.style.display === "none") {
        div.style.display = "block";
    } else {
        div.style.display = "none";
    }
}
///////////////////////////////////////////////////////////////////////////////////////////  Parité  ///////////////////////////////////////////////////////////////////////////////////////////
let exo2 = document.getElementById("parite"); // J'appel l'ID du bouton

exo2.addEventListener("click", function() { parite() } // Je déclenche la fonction à partir du clic sur le bouton
);

function parite() // Je crée la fonction
{
    var nb = window.prompt("Saisissez un nombre");
    if (nb % 2 == 0) // Si nombre pair
        alert("Ce nombre est pair");
    else // Si non nombre impair
        alert("Ce nombre est impair");
}
/////EXERCICE AGE////////////////////////
let exo3 = document.getElementById("age"); // J'appel l'ID du bouton

exo3.addEventListener("click", function() { age() } // Je déclenche la fonction à partir du clic sur le bouton
);

function age() // Je crée la fonction
{
    var dob = window.prompt('Année de naissance');
    var today = new Date(); // Date actuelle
    var currentYear = today.getFullYear(); // Année en cours
    var age = currentYear - dob; // Age selon l'année indiquée
    // Conditions affichant un message selon l'age de l'utilisateur
    if (age < 18) {
        alert('Vous êtes mineur. Vous avez ' + age + 'ans.');
    } else {
        alert('Vous êtes majeur. Vous avez ' + age + 'ans.');
    }
}

///// ////////////////////////

//function b3() {
//  var div = document.getElementById("b3");
// if (div.style.display === "none") {
//     div.style.display = "block";
//} else {
//     div.style.display = "none";
////  }
//}


/////EXERCICE CALCULATRICE////////////////////////
let exo4 = document.getElementById("calculatrice"); // J'appel l'ID du bouton

exo4.addEventListener("click", function() { calculatrice() } // Je déclenche la fonction à partir du clic sur le bouton
);

function calculatrice() // Je crée la fonction
{
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
                alert('Pov type');
        }
    }
}

function b4() {
    var div = document.getElementById("b4");
    if (div.style.display === "none") {
        div.style.display = "block";
    } else {
        div.style.display = "none";
    }
}

var tableau = [];
var nombre = parseInt(prompt("Définissez la taille du tableau"));

for (counter = 0; counter < nombre; counter++) {
    var donnée = prompt("Entrez une donnée");
    tableau[counter] = donnée;
}
alert(tableau);
/////////////////////////////////////////////////////////////////////////////////////////// Premier tableau  ///////////////////////////////////////////////////////////////////////////////////////////
let exo21 = document.getElementById("table"); // J'appel l'ID du bouton

exo21.addEventListener("click", function() { tableau1() } // Je déclenche la fonction "tableau" à partir du clic sur le bouton exo1   
);

function tableau1() // Je crée la fonction tableau
{
    // Je déclare les variables
    var tableau = []; // Je crée la variable tableau []
    var nombre = parseInt(prompt("Définissez la taille du tableau")); // Affiche le texte et demande une réponse en nombre (Int)

    for (counter = 0; counter < nombre; counter++) // Boucle (nombre de tours défini par l'utilisateur avec la variable "nombre")
    {
        var donnée = prompt("Entrez une donnée"); // Demande des données (leur nombre correspondra au nombre indiqué par l'utilisateur)
        tableau[counter] = donnée; // La variable tableau rempli le tableau avec les données entrées par l'utilisateur
    }
    alert(tableau); // Affichage du tableau
}
/////////TABLE MULTIPLICATION ///////////////////////
let exo19 = document.getElementById("multi"); // J'appel l'ID du bouton

exo19.addEventListener("click", function() { multi() } // Je déclenche la fonction à partir du clic sur le bouton
);

function multi() // Je crée la fonction
{
    var controle = /^[0-9]+$/;
    // Déclaration du regex controlant que l'on ne rentre que des chiffres en paramettre
    function _TableMultiplication()
    // Déclaration d'une fonction
    {
        // Déclaration des variables utilisé dans la fonction
        var res = 0;
        var i = 0;
        var tab = [];
        var X = prompt("Entrez le nombre correspondant à la table de multiplication souhaité");
        if (X == null) {
            window.close();
        } else {
            X = parseInt(X);
            if (!controle.test(X))
            // Si la valeur rentré en paramettre grace a la fonction prompt ne correspond pas aux critères
            // du regex on entre dans la condition
            {
                alert("Il faut entrer un nombre \n Recommencez !");
                window.location.reload(_TableMultiplication());
                // La page est rechargé et la fonction réexcuté
            }
            while (i <= 10)
            // lancement d'une boucle tant que i est plus petit que 10
            {
                res = i * X;
                tab[i] = (i + " x " + X + " = " + res + "\n");
                // La valeur trouvé dans res est stocké dans un index du tableau correspondant a 
                // mon compteur "i" . Elle est stocké au sein d'une phrase
                i++;
            }
            if (tab != 0) {
                tab = tab.join("");
                alert(tab);
            }
            if (confirm("Voulez vous recommencer ?") == true) {
                window.location.reload(_TableMultiplication());
                // La page est rechargé et la fonction réexcuté
            }
        }
    }
    _TableMultiplication();
    // Execution de la fonction
}


/////////////TRANCHE AGE //////////////////////////////////////////////////////////////////////////////  Tranches d'âges  ///////////////////////////////////////////////////////////////////////////////////////////
let exo15 = document.getElementById("tranche"); // J'appel l'ID du bouton

exo15.addEventListener("click", function() { tranche() } // Je déclenche la fonction à partir du clic sur le bouton
);

function tranche() // Je crée la fonction
{
    var controle = /^[0-9]+$/;
    // Déclaration du regex controlant que l'on ne rentre que des chiffres en paramettre
    function _calcul()
    // Déclaration d'une fonction
    {
        // Déclaration des variables utilisé dans la fonction
        var age = 0;
        var j = 0;
        var m = 0;
        var v = 0;
        // Lancement d'une boucle tant que la variable "age" est plus petite que 100
        age = prompt("Quelle est l'age de la personne ?")
        if (age == null) {
            window.close();
        } else {
            if (!controle.test(age)) {
                alert("Il faut entrer un nombre \n Recommencez !");
                window.location.reload(_calcul());
                // La page est rechargé et la fonction réexcuté
            } else {
                age = parseInt(age);
                if (age > 100) {
                    v++;
                } else if (age < 20) {
                    j++;
                } else {
                    m++;
                }
                while (age < 100) {
                    age = parseInt(prompt("Quelle est l'age de la personne ?"));
                    // Utilisation d'un parseInt pour passer la valeur de "age" en int 
                    if (!controle.test(age))
                    // Si la valeur rentré en paramettre grace a la fonction prompt ne correspond pas aux critères
                    // du regex on entre dans la condition 
                    {
                        alert("Il faut entrer un nombre \n Recommencez !");
                        window.location.reload(_calcul());
                        // La page est rechargé et la fonction réexcuté
                    }
                    // Incrément des compteurs correspondant aux valeurs paramettré en fonction de leur conditios
                    if (age < 20) {
                        j++;
                    } else if (age >= 20 && age <= 40) {
                        m++;
                    } else {
                        v++;
                    }
                }
            }
        }

        alert("Il y a " + j + " jeunes \n Il y a " + m + " moyens \n Il y a " + v + " vieux");
        if (confirm("Voulez vous recommencer ?") == true) {
            window.location.reload(_calcul());
            // La page est rechargé et la fonction réexcuté
        } else {
            window.close();
            // Fonction fermant la page
        }
    }
    _calcul();
    // Execution de la fonction
}