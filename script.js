//const pomme0 = document.getElementById("0");

//pomme0.addEventListener("click", ()=> {
// pomme0.textContent = "image_0";
//console.log (pomme0);}

// Déclaration des tableaux (avec des paires identiques pour un jeu de Memory)
const cartes = ["1", "2", "3", "4", "5", "6"];
const cartesDouble = ["1", "2", "3", "4", "5", "6"];
let bloque = false;
let premiereCase = null;
let secondCase = null;
let firstCard = null;
let secondCard = null;

// Concaténation
const jeuTable = cartes.concat(cartesDouble);
console.log(jeuTable);
//Mélanger le paquet (Algorithme de Fisher-Yates)

function melanger(paquet) {
  for (let i = paquet.length - 1; i > 0; i--) {
    // Choisir un index aléatoire entre 0 et i
    const j = Math.floor(Math.random() * (i + 1));
    // Échanger les éléments aux positions i et j
    [paquet[i], paquet[j]] = [paquet[j], paquet[i]];
    
  }
  return paquet;
}
melanger (jeuTable);
console.log("Tableau mélangé :" , jeuTable);
// Récupération du plateau lit et modifie bien les balises <td>
const cases = document.querySelectorAll("#plateau td");
// Boucle sur chaque case (td) et son index • 
// parcourt chaque <td> trouvée et remplace son texte par la valeur correspondante du tableau jeuTable
//td:lacase html , index: numéro de position à jusqu'à 11, 
//cases.forEach((td, index) => {
  //va chercher dans la liste celle qui a le même numéro td=0 index =0 carte =jeutable=0
  //carte = nom du légume caché
  //const carte = jeuTable[index];

    //td.addEventListener("click", function (){
    // console.log("Carte cliquée :", carte);

    //const image = td.querySelector("img");
    //image.src = "./ressources/memory-legume/" + carte + ".svg";
    // });
    //});

//---------------------------------------jeu 
// ECMAScript 2015 (ES6) a ajouté les fonctions fléchées dans lesquelles this correspond à la valeur du contexte englobant


cases.forEach((td, index) => {
  const carte = jeuTable[index];

  td.addEventListener("click", function () {
    // On ignore le clic dans ces cas
    if (bloque) return;
    if (td === premiereCase) return;
    if (td.classList.contains("trouvee")) return;

    // On montre la carte
    const image = td.querySelector("img");
    image.src = "./ressources/memory-legume/" + carte + ".svg";

    // 1re carte : on la retient et on s'arrête
    //aucun carte n'a été retourné encore
  
    if (firstCard === null){
        premiereCase = td;
        firstCard = carte;
      return
    }
     secondCard = carte;
     secondCase = td;
    
     if (firstCard === secondCard) {
      premiereCase.classList.add ("match")
      secondCase.classList.add ("match")
    console.log("C'est une paire !");
  } else {
    
    setTimeout(() => {
      premiereCase.classList.remove ("not matched")
      secondCase.classList.remove ("not matched")
      console.log("Cartes retournées");
      // Ajoute ici le code pour cacher à nouveau les cartes (ex: classList.remove('flipped'))
    }, 5000);
  }
});
  })


/*let joueur = 1;

let firstcard 
let secondcard 
//let firstcase 
//let secondcase 
//trouver paires correspondance
//let matchcards 
const blocks = false
let cardreturned = []

// la valeur est amenée à changer
//firstcard = "carte";
//firstcase = "td";
//seconcard = "carte"
//secondcase = "td"

function blockcards(){
    if (blocks || cardreturned.classList.contains ('retournée')){
        return
    }
    carte.classList.add

  //Object.values() retourne un tableau dont les éléments sont les valeurs des propriétés énumérables ayant des clés de type chaîne de caractères directement rattachées à l'objet. 
  // C'est similaire au fait d'accéder aux valeurs à l'intérieur d'une boucle for...in
}
if table.length < 2; {
table.push ("carte cliquée")
  if (table.lenght === 2);
  bloquer clics = true
  if (td[0] values = td.[1].values) 
  table.lenght = 0;
  bloquer clics = false
    else {
    setTimeout(() => {
      console.log("Cartes retournées");
    }, 5000);
    table.length = 0 et bloquerClics = false
  }
});





  bloque 
  if cartes idetique ("match")
  alors table.lenght = 0;

}

document.querySelector("#monBouton").addEventListener("click", function match(event) {
  event.preventDefault();
  if (firstCard === secondCard) {
    console.log("C'est une paire !");
  } else {
    setTimeout(() => {
      console.log("Cartes retournées");
      // Ajoute ici le code pour cacher à nouveau les cartes (ex: classList.remove('flipped'))
    }, 5000);
  }
});




//compter des coups

const bouton = document.getElementById("monBouton");
    let coups = 0*/