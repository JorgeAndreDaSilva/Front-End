function Entregar() {
    var nomes = document.querySelector(".Nome")
    var idades = document.querySelector(".Idade")
    var cidades = document.querySelector(".Cidade")
    var Revelar = document.querySelector("#mostra")
    
    if (nomes.value == "" || idades.value == "" || cidades.value == "") {
        Revelar.innerHTML = `<div class="alert alert-danger fade show" role="alert">
        <span> Por Favor complete os Campos</span>
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        </div>`
    }  else if(idades <= 0 || idades > 100){
        Revelar.innerHTML = ` <div class="alert alert-success fade show" role="alert">
        <span> Idade Invalida</span>
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        </div>`
        return;
    }
    else {
        Revelar.innerHTML = ` <div class="alert alert-success fade show" role="alert">
        <span> Informações: ${nomes.value}, ${idades.value}, ${cidades.value}</span>
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        </div>`
    }
}
