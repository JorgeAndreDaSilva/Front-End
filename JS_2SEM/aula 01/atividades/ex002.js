const botao = document.querySelector("#botao");
const botaoDi = document.querySelector("#botaoDi");
const zerar = document.querySelector("#zerar");
const contadorElemento = document.querySelector("#contador");

let contador = 0;

function aumentarContador() {
    contador++;
    contadorElemento.textContent = contador;
}

botao.addEventListener("click", aumentarContador);

function diminuirContador() {
    contador--;
    alerta();
    contadorElemento.textContent = contador;
}

botaoDi.addEventListener("click", diminuirContador);

function zerarCon() {
    contador = 0;
    contadorElemento.textContent = contador;

}

zerar.addEventListener("click", zerarCon);

function alerta() {
    if (contador < 0) {
        document.querySelector("#mostrar").innerHTML = `<div class="alert alert-info fade show" role="alert">
        <span>Não existe valor menor</span>
        <button type="button" class="btn-close"data-bs-dismiss="alert"></button>
        </div>`
        contador = 0;
    }
}