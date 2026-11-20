//const pomme0 = document.getElementById("0");

//pomme0.addEventListener("click", ()=> {
// pomme0.textContent = "image_0";
//console.log (pomme0);}

// Déclaration des tableaux (avec des paires identiques pour un jeu de Memory)
const cartes = ["1", "2", "3", "4", "5", "6"];
const cartesDouble = ["1", "2", "3", "4", "5", "6"];
const table = [];
let joueur = 1;
let coups = 0;
const bouton = document.getElementById("monBouton");

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
 
//cases.forEach((td, index) => {
  //va chercher dans la liste celle qui a le même numéro td=0 index =0 carte =jeutable=0
  //carte = nom du légume caché
// ECMAScript 2015 (ES6) a ajouté les fonctions fléchées dans lesquelles this correspond à la valeur du contexte englobant


//---------------------------------------jeu 
let bloque = false; //on peut cliquer//
function cliquer(td, index){
  //if bloque === true return arrête la fonction cliquer 
  if (bloque) return;
  //on ignore le clic si la carte est déjà retournée
  if (td.classList.contains("matched")) return;
  //ignore le clic si on a déjà une carte retournée - pour éviter de compter 2fois
  if (table.length === 1 && table[0] === index) return;
  td.querySelector("img").src = "./ressources/memory-legume/" + jeuTable[index] + ".svg";
  //ajoute le numéro de la case à la liste table, pour se souvenir des cartes retourné
  table.push(index);

  if (table.length === 2) {
    //la premier case cliquée table0
    const a = table [0];
    const b = table [1];

        coups++;
        bouton.textContent = "Nombre de coup (" + coups + ")";
    
      if(jeuTable[a] === jeuTable[b]){
        //.classList.add("matched") ajouter une ou plusieurs classes CSS à un élément HTML
          cases[a].classList.add ("matched");
          cases[b].classList.add ("matched");
          table.length = 0; //pour vider la liste
      }else {
        console.log("try again");
        bloque = true;
        setTimeout(function(){
          cases[a].querySelector("img").src = "./ressources/question.svg";
          cases[b].querySelector("img").src = "./ressources/question.svg";
          //vider la table
          table.length = 0;
          bloque = false;
        }, 5000);
      }
        
  }
}
cases.forEach((td, index) =>{
  td.addEventListener("click", function(){
    cliquer(td,index);
  });

});

const restart = document.getElementById("recommancer");
function recommancer(){
  location.reload();

}
document.addEventListener("keydown", (event) => {
  if (event.code === "Space") {
    event.preventDefault();
    recommancer();
  }
});
// pour éviter que la barre d'espace ne fasse défiler la page web vers le bas au lieu de relancer la partie.//
// Écoute du clic directement sur le <h3>
  restart.addEventListener("click", recommancer);

      
    //reinitialiser 
    //let timer = null,
    //function relancer(){
    //clearTimeout(timer)
    //table.lenght = 0,
    //bloque = false;
    //coup = 0;
    //bouton.textContent = "Nombre de coup (0)";}

  //cases.forEach((td, index) => {
  //const carte = jeuTable[index];

  //td.addEventListener("click", function () {
    // On ignore le clic dans ces cas
    //if (bloque) return;
    //if (td === premiereCase) return;
    //if (td.classList.contains("trouvee")) return;

    // On montre la carte
    //const image = td.querySelector("img");
    //image.src = "./ressources/memory-legume/" + carte + ".svg";

    // 1re carte : on la retient et on s'arrête
    //aucun carte n'a été retourné encore
  
    /*if (firstCard === null){
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
let coup = 0
const bouton = document.getElementById("monBouton");

const blocks = false
let cardreturned = []

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



document.querySelector("#monBouton").addEventListener("click", function match(event) {
  event.preventDefault();
  if (firstCard === secondCard) {
    console.log("C'est une paire !");
  } else {
    setTimeout(() => {
      console.log("Cartes retournées");
        classList.remove('flipped'))
    }, 5000);
  }
});




//compter des coups

const bouton = document.getElementById("monBouton");
    let coups = 0*/