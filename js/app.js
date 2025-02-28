// Função para adicionar a quantidade de valor ao carrinho
function adicionar(){
    let qtd = document.getElementById("quantidade").value;
    let meuSelect = document.getElementById("produto");
    let minhaOpccao = meuSelect.options[meuSelect.selectedIndex].value;
    let minhaSection = document.createElement("section");
    let total;
    let valor = document.getElementById("valor-total");

    if(minhaOpccao == "Fone de ouvido - R$100"){
        total = total + (100 * qtd)
        minhaSection.innerHTML = `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${qtd}x</span> Fone de ouvido <span class="texto-azul">R$100</span>
        </section>`
        document.getElementById("lista-produtos").append(minhaSection)
        valor.innerHTML = `<p class="carrinho__total">
        Total: <span class="texto-azul" id="valor-total">R$${total}</span>
      </p>`
    }else if(minhaOpccao == "Celular - R$1400"){
        total = total + 1400
        minhaSection.innerHTML = `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${qtd}x</span> Celular <span class="texto-azul">R$1400</span>
        </section>`
        document.getElementById("lista-produtos").append(minhaSection)
    }else if(minhaOpccao == "Oculus VR - R$5000"){
        total = total + 5000
        minhaSection.innerHTML = `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${qtd}x</span> Oculos VR <span class="texto-azul">R$5000</span>
        </section>`
        document.getElementById("lista-produtos").append(minhaSection)
    }

}
// Função para limpar Os valores
function limpar(){
    document.getElementById("lista-produtos").innerHTML = "";
    document.getElementById("valor-total").innerHTML = "R$0";
}