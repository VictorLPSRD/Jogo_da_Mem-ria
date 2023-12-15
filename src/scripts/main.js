//Criamos um array com varios emojis
const emojis =[
    "🐉",
    "🐉",
    "🐯",
    "🐯",
    "🐵",
    "🐵",
    "🐺",
    "🐺",
    "🦁",
    "🦁",
    "🐗",
    "🐗",
    
];

let openCards = [];

// Criamos uma variavel que recebe a const emojis e ele recebe sorts que permite criar uma ordenação com uma condição
//usamos a biblioteca math e o metodo random e criamos uma condição.
var randoEmoji = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1));

//  Criamos um laço de repetição que vai ate o tamanho de emoji e incremente de 1 em 1. 
// com isso criamos as cartas.
for (let i = 0; i < emojis.length; i++) {
  let box = document.createElement("div"); //Criamos uma tag div dinamicamente.
  box.className = "item"; //colocamos a classe item na div.
  box.innerHTML = randoEmoji[i]; // Ele vai pega o vetor de emoji de forma aleatoria.
  box.onclick = handleClick;
  document.querySelector(".JOGO").appendChild(box);
};
//Criamos a função que vai permite salvar as duas cartas para fazer a comparação
function handleClick() {
    // Se o tamanho dele for menor que dois nois adicionamos ele na classe boxOpen
    if (openCards.length < 2) {
      this.classList.add("boxOpen");
      //Alem disso quardamos ele no array
      openCards.push(this); 
      playSound("hit");     
    }
    // Ao clicar nas duas cartas
    if (openCards.length == 2) {
      setTimeout(checkMatch, 500); // chamando a função checkMatch 
    }
  
    console.log("cartaAberta");
  }

  // Tocando a musica quando ouver um click no class que tem enemy
  function playSound(audioName) {
    let audio = new Audio(`./src/audios/${audioName}.m4a`);
    audio.volume = 0.2;
    audio.play();
  }
  // essa função verifica se as catas seram iguais ou diferentes.
  function checkMatch() {
    // se for igual as cartas se mantem abertas.
    if (openCards[0].innerHTML === openCards[1].innerHTML) {
      openCards[0].classList.add("boxMatch");
      openCards[1].classList.add("boxMatch");
    } else { // se não elas se fecham.
      openCards[0].classList.remove("boxOpen");
      openCards[1].classList.remove("boxOpen");
    }
    // Para reserta as cartas 
    openCards = [];
  // Se todas as cartas forem iguais vai gera um alert de vitoria.
    if (document.querySelectorAll(".boxMatch").length === emojis.length) {
      alert("Você venceu !");
    }
  }