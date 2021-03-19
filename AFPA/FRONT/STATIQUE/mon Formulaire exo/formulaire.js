// Récupère l'élément via son ID
// var check = document.getElementById('envoie');
// // Ajout d'un évènement lors du click
// check.addEventListener("click", function verif(event) {
//     // Déclarations des regex
//     // regex demandant une première lettre en majuscule et les caractères spéciaux
//     var alpha = /(^[A-Z]+[a-zA-Zéèêëôœîïûüàáâæç-\s]+$)/;
//     // regex controlant les adresses mails , on autorise tout les carctères alphanumériques
//     // ainsi que ". et -" on dis qu'il faut @ ensuite plus au moins 1 caractère alphabétique
//     // puis un point suivi de 2 ou 3 caractères alphabétiques
//     var mail = /(^[\w\.-]+@[a-z]+[\.]{1}[a-z]{2,3}$)/;
//     //  regex pour le code postal 5 chiffres
//     var cp = /[0-9]{5}/;
//     // regex controlant l'adresse , il doit y avoir au moins 1 chiffre suivi de au moins
//     // 1 caractère alphabétique et une prise en compte du champ vide car non obligatoire
//     var adr = /(^[0-9]+[a-zA-Z-\s]+$)|^$/;
//     // regex controlant la ville , le meme que alpha mais prenant en compte un champ vide car non obligatoire
//     var city = /(^[A-Z]+[a-zA-Zéèêëôœîïûüàáâæç-\s]+$)|^$/;
//     // regex controlant le numéro de téléphone , 
//     var phone = /^(\+33\s[1-9]{8})|(0[1-9]\s{8})$/;

// Déclarations des variables
// Les valeurs sont récupérées grace à la fonction getElementById
var form = document.getElementById("formID");
// societe
var societeVal = document.getElementById("nameEnt");
var errorSociete = document.getElementById("errNameEnt");
// personne à contacter 
var personneContactVal = document.getElementById("persAContacter");
var errorPersonneContact = document.getElementById("errPersAContacter");
// email 
var emailVal = document.getElementById("mailID");
var errorEmail = document.getElementById("errMail");
var emailRegex = /(^[\w\.-]+@[a-z]+[\.]{1}[a-z]{2,3}$)/;
// CODE POSTAL 
var codepostalVal = document.getElementById("codepost");
var errorcodepostal = document.getElementById("errCP");
var codepostalRegex = /\d{2}[ ]?\d{3}/;
// VILLE
var villeVal = document.getElementById("ville");
var errorVille = document.getElementById("errVille");


form.addEventListener('submit', function(event) {
        // validation de l'input SOCIETE 
        if (societeVal.value.length < 1) {
            event.preventDefault();
            console.log("societe n'est pas valide");
            errorSociete.innerHTML = 'Veuillez entrer le nom de la société.';
        } else errorSociete.innerHTML = '';

        // validation de l'input PERSONNE A CONTACTER 
        if (personneContactVal.value.length < 1) {
            event.preventDefault();
            console.log("Personne à contacter n'est pas valide");
            errorPersonneContact.innerHTML = 'Veuillez entrer le nom de la personne à contacter.';
        } else errorPersonneContact.innerHTML = '';

        // validation de l'input EMAIL. 
        if (!emailRegex.test(emailVal.value)) {
            event.preventDefault();
            console.log("Votre email n'est pas valide");
            errorEmail.innerHTML = 'Email invalide';
        } else errorEmail.innerHTML = '';

        // validation de l'input CODE POSTAL. 
        if (!codepostalRegex.test(codepostalVal.value)) {
            event.preventDefault();
            alert(" Veuillez entrer un Code Postal à 5 chiffres.");
            errorcodepostal.innerHTML = 'erreur sur votre Code Postal.';
        } else errorcodepostal.innerHTML = '';

        // validation de l'input VILLE
        if (villeVal.value.length < 1) {
            event.preventDefault();
            console.log("la ville n'est pas valide");
            errorVille.innerHTML = 'Veuillez entrer votre ville.';
        } else errorVille.innerHTML = '';

    }

);



// ------- Fin de la gestion de l'evenement 'submit. 



//     // Controle du nom
//     // Vérifie que la variable respecte les paramètres
//     if (!alpha.test(nom)) {
//         // Appel de l'id "errName" et affichage du message dans une balise <p> vide de la page HTML grace à la fonction textContent
//         document.getElementById("errName").textContent = "Utilisez uniquement des caractères alphabétiques";
//         // Retour à l'évènement déterminé dans la var check en début de page
//         event.preventDefault();
//     } else {
//         // Si non, le message d'erreur n'apparait pas
//         document.getElementById("errName").textContent = "";
//     }

//     // Controle du code postal
//     if (!cp.test(codepost)) {
//         document.getElementById("errCP").textContent = "Code postal non conforme";
//         event.preventDefault();
//     } else {
//         document.getElementById("errCP").textContent = "";
//     }

//     // Controle de l'adresse
//     if (!adr.test(adresse)) {
//         document.getElementById("errAdr").textContent = "Adresse non conforme";
//         event.preventDefault();
//     } else {
//         document.getElementById("errAdr").textContent = "";
//     }

//     // Controle de la ville
//     if (!city.test(ville)) {
//         document.getElementById("errVille").textContent = "Utilisez uniquement des caractères alphabétiques";
//         event.preventDefault();
//     } else {
//         document.getElementById("errVille").textContent = "";
//     }

//     // Controle de l'email
//     if (!mail.test(email)) {
//         document.getElementById("errMail").textContent = "Adresse mail non conforme";
//         event.preventDefault();
//     } else {
//         document.getElementById("errMail").textContent = "";
//     }

//     // Controle du numéro de téléphone
//     if (!phone.test(phone)) {
//         document.getElementById("errphone").textContent = "numéro de téléphone non conforme";
//         event.preventDefault();
//     } else {
//         document.getElementById("errphone").textContent = "";
//     }

//     // Controle du sujet
//     // Si la valeur de la balise <select> ayant l'id sujet est égal 1, on affiche le message d'erreur
//     if (sujet == 1) {
//         document.getElementById("errSujet").textContent = "Selectionnez le sujet de votre requête";
//         event.preventDefault();
//     } else {
//         document.getElementById("errSujet").textContent = "";
//     }

//     // Controle de la question
//     // Si rien n'est écrit, on affiche le message d'erreur
//     if (question == "") {
//         document.getElementById("errQuest").textContent = "Ce champ est obligatoire";
//         event.preventDefault();
//     } else {
//         document.getElementById("errQuest").textContent = "";
//     }
// });