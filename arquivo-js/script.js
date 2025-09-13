const containerCarrosel = document.querySelector(".containerCarrosel");
const itens = Array.from(document.querySelectorAll(".title"));
const btnNext = document.querySelector("#next");
const btnPrev = document.querySelector("#prev");

btnNext.addEventListener("click", () => {
  let divActived = itens.filter((e) => e.classList.contains("actived"));
  divActived[0].classList.remove("actived");
  let indice = itens.indexOf(divActived[0]);
  if (indice <= 1) {
    itens[indice + 1].classList.add("actived");
  } else if (indice === 2) {
    itens[0].classList.add("actived");
  }
  background();
});

btnPrev.addEventListener("click", () => {
  let divActived = itens.filter((e) => e.classList.contains("actived"));
  divActived[0].classList.remove("actived");
  let indice = itens.indexOf(divActived[0]);
  if (indice === 0) {
    itens[2].classList.add("actived");
  } else if (indice > 0) {
    itens[indice - 1].classList.add("actived");
  }
  background();
});

function background() {
  let divActived = itens.filter((e) => e.classList.contains("actived"))[0];
  let classList = containerCarrosel.classList;
  if (divActived === itens[1]) {
    containerCarrosel.classList.replace(classList[1], "corGuarana");
  } else if (divActived === itens[2]) {
    containerCarrosel.classList.replace(classList[1], "corFanta");
  } else if (divActived === itens[0]) {
    containerCarrosel.classList.replace(classList[1], "corCoca");
  }
}

