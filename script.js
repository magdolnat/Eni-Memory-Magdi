const apple = new Image();
apple.src = "./ressources/memory-legume/1.svg";

const banane = new Image();
banane.src = "./ressources/memory-legume/2.svg";

const broccoli = new Image();
broccoli.src = "./ressources/memory-legume/3.svg";

const cherry = new Image();
cherry.src = "./ressources/memory-legume/4.svg";

const pepper = new Image();
pepper.src = "./ressources/memory-legume/5.svg";

const strawberry = new Image();
strawberry.src = "./ressources/memory-legume/6.svg"

const legumes = ["apple", "banane", "broccoli", "cherry", "pepper", "strawberry"]

let joueur = 1;

shuffleCards legumes
let coups = 0;
const bouton = document.getElementById('card');


<script>
document.querySelectorAll('.card').forEach(card => {
card.addEventListener('click', function() {
this.classList.toggle('flipped');
});
});
</script>

function init() {
  $("td").on("click", function () {
    if ($(this).find("img").attr("src") !== undefined) {
      return;
    }
    if (joueur === 1) {
      $(this).find("img").attr("src");
      
    }
  });
}
