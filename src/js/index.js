const btnAvancar = document.getElementById("btn-avancar")
let cartaoAtual = 0;
const cartoes = document.querySelectorAll(".cartao")
const btnVoltar = document.getElementById("btn-voltar")


btnAvancar.addEventListener("click", function () {
   const ehUltimoCartao = cartaoAtual === cartoes.length - 1
   if (ehUltimoCartao) return

   esconderCartaoSelecionado();
   cartaoAtual++;
   mostrarCartao();
})

btnVoltar.addEventListener("click", function () {
   const ehPrimeiroCartao = cartaoAtual === 0
   if (ehPrimeiroCartao) return

   esconderCartaoSelecionado();
   cartaoAtual--;
   mostrarCartao();

})


function mostrarCartao() {

   cartoes[cartaoAtual].classList.add("selecionado");

}

function esconderCartaoSelecionado() {
   const cartaoSelecionado = document.querySelector(".selecionado");
   cartaoSelecionado.classList.remove("selecionado");
}



const btnAvancarMassas = document.getElementById("btn-avancar1")
let cartaoAtualMassas = 0;
const cartoesMassa = document.querySelectorAll(".cartao-massas")
const btnVoltarMassas = document.getElementById("btn-voltar1")


btnAvancarMassas.addEventListener("click", function () {
   const ehUltimoCartaoMassas = cartaoAtualMassas === cartoes.length - 1
   if (ehUltimoCartaoMassas) return

   esconderCartaoSelecionadoMassas();
   cartaoAtualMassas++;
   mostrarCartaoMassas();
})

btnVoltarMassas.addEventListener("click", function () {
   const ehPrimeiroCartaoMassas = cartaoAtualMassas === 0
   if (ehPrimeiroCartaoMassas) return

   esconderCartaoSelecionadoMassas();
   cartaoAtualMassas--;
   mostrarCartaoMassas();

})


function mostrarCartaoMassas() {

   cartoesMassa[cartaoAtualMassas].classList.add("selecionado-massas");

}

function esconderCartaoSelecionadoMassas() {
   const esconderCartaoSelecionadoMassas = document.querySelector(".selecionado-massas");
   esconderCartaoSelecionadoMassas.classList.remove("selecionado-massas");
}


const btnAvancarDoce = document.getElementById("btn-avancar2")
let cartaoAtualDoce = 0;
const cartoesDoce = document.querySelectorAll(".cartao-doce")
const btnVoltarDoce = document.getElementById("btn-voltar2")

btnAvancarDoce.addEventListener("click", function () {
   const ehUltimoCartaoDoce = cartaoAtualDoce === cartoes.length - 1
   if (ehUltimoCartaoDoce) return

   esconderCartaoSelecionadoDoce();
   cartaoAtualDoce++;
   mostrarCartaoDoce();
})

btnVoltarDoce.addEventListener("click", function () {
   const ehPrimeiroCartaoDoce = cartaoAtualDoce === 0
   if (ehPrimeiroCartaoDoce) return

   esconderCartaoSelecionadoDoce();
   cartaoAtualDoce--;
   mostrarCartaoDoce();

})


function mostrarCartaoDoce() {

   cartoesDoce[cartaoAtualDoce].classList.add("selecionado-doces");

}

function esconderCartaoSelecionadoDoce() {
   const esconderCartaoSelecionadoDoce = document.querySelector(".selecionado-doces");
   esconderCartaoSelecionadoDoce.classList.remove("selecionado-doces");
}



const btnAvancarPudin = document.getElementById("btn-avancar3")
let cartaoAtualPudin = 0;
const cartoesPudin = document.querySelectorAll(".cartao-pudin")
const btnVoltarPudin = document.getElementById("btn-voltar3")


btnAvancarPudin.addEventListener("click", function () {
   const ehUltimoCartaoPudin = cartaoAtualPudin === cartoes.length - 1
   if (ehUltimoCartaoPudin) return

   esconderCartaoSelecionadoPudin();
   cartaoAtualPudin++;
   mostrarCartaoPudin();
})

btnVoltarPudin.addEventListener("click", function () {
   const ehPrimeiroCartaoPudin = cartaoAtualPudin === 0
   if (ehPrimeiroCartaoPudin) return

   esconderCartaoSelecionadoPudin();
   cartaoAtualPudin--;
   mostrarCartaoPudin();

})


function mostrarCartaoPudin() {

   cartoesPudin[cartaoAtualPudin].classList.add("selecionado-pudin");

}

function esconderCartaoSelecionadoPudin() {
   const esconderCartaoSelecionadoPudin = document.querySelector(".selecionado-pudin");
   esconderCartaoSelecionadoPudin.classList.remove("selecionado-pudin");
}