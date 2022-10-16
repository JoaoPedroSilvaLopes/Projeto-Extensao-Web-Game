const personagem = document.querySelector(".player")
const obstaculo = document.querySelector(".pipe")
const nuvem = document.querySelector(".clouds")
const pontuacao = document.querySelector('.pontos')
const fim = document.querySelector(".fim")

let contador = 0

function jump () { 
  personagem.classList.add("jump");

  setTimeout(() => {
    personagem.classList.remove("jump");
  }, 500);
};

function reiniciar () {
  location.reload()
}

function iniciar () {
  const loop = setInterval(() => {
    obstaculo.style.animation = "pipe-animation 2s infinite linear"
    nuvem.style.animation = "clouds-animation 15s infinite linear"

    const obstaculoPosition = obstaculo.offsetLeft;
    const personagemPosition = +window.getComputedStyle(personagem).bottom.replace("px", "")

    if (obstaculoPosition <= 120 && obstaculoPosition > 0 && personagemPosition < 80) {
      obstaculo.style.animation = "none"
      obstaculo.style.left = `${obstaculoPosition}px `

      personagem.style.animation = "none"
      personagem.style.left = `${personagemPosition}px `

      personagem.style.marginLeft = "50px"

      clearInterval(loop)
      fim.style.zIndex = "1000"
    }
    else {
      contador++
      pontuacao.innerHTML = `Pontuação: ${contador} pts`
    }
  }, 10);
}

document.addEventListener("keydown", (event) => {
  if(event.code === "Space" || event.code === 'ArrowUp') jump()
});
