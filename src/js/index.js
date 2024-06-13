const btnAvancar = document.getElementById("btn-avancar")
 let cartaoAtual = 0;
 const cartoes = document.querySelectorAll(".cartao")
 const btnVoltar = document.getElementById("btn-voltar")

 btnAvancar.addEventListener("click", function(){
   const ehUltimoCartao = cartaoAtual === cartoes.length - 1
   if(ehUltimoCartao) return

   esconderCartaoSelecionado();
    cartaoAtual++;
    mostrarCartao();
 })

 btnVoltar.addEventListener("click", function(){
   const ehPrimeiroCartao = cartaoAtual === 0 
   if(ehPrimeiroCartao) return

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

 btnAvancarMassas.addEventListener("click", function(){
   const ehUltimoCartaoMassas = cartaoAtualMassas === cartoes.length - 1
   if(ehUltimoCartaoMassas) return

   esconderCartaoSelecionadoMassas();
    cartaoAtualMassas++;
    mostrarCartaoMassas();
 })

 btnVoltarMassas.addEventListener("click", function(){
   const ehPrimeiroCartaoMassas = cartaoAtualMassas === 0 
   if(ehPrimeiroCartaoMassas) return

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






