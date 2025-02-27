function adicionar(){
    let meuSelect = document.getElementById("produto")
    let minhaOpccao = meuSelect.options[meuSelect.selectedIndex];
    console.log(minhaOpccao)
}
function limpar(){
    document.querySelector(".carrinho__produtos__produto").innerHTML = "";
    document.getElementById("valor-total").innerHTML = "R$0";
}