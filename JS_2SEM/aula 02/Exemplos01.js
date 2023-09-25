// selecionando o botão pelo id
const botao = document.querySelector("#botao");
const contadorElemento = document.querySelector("#contador");

// inicializando contador 
let contador = 0;

// função que sera chamanda quando o botão for clicado
function aumentarContador()
{
    contador++;
    contadorElemento.textContent = contador;
}

// adicionando ouvinte do evento para o clique do botão

botao.addEventListener("click", aumentarContador);