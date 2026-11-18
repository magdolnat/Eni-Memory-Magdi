//const pomme0 = document.getElementById("0");

//pomme0.addEventListener("click", ()=> {
 // pomme0.textContent = "image_0";
  //console.log (pomme0);}


// Déclaration des tableaux (avec des paires identiques pour un jeu de Memory)
const cartes = ["0", "1", "2", "3", "4", "5"];
const cartesDouble = ["0", "1", "2", "3", "4", "5"];

// Concaténation
const jeuTable = cartes.concat(cartesDouble);
console.log(jeuTable);

// Récupération du plateau lit et modifie bien les balises <td>
const cases = document.querySelectorAll("#plateau td");
console.log(jeuTable);
// Boucle sur chaque case (td) et son index • 
// parcourt chaque <td> trouvée et remplace son texte par la valeur correspondante du tableau jeuTable via td.textContent = carte;
cases.forEach((td, index) => {
  const carte = jeuTable[index];
  
  // Affiche la valeur directement dans la case HTML
  td.textContent = carte;

  td.addEventListener("click", function ()
  {
    console.log("Carte cliquée :", );
  });
});


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
console.log("Tableau mélangé :" , jeuTable)


