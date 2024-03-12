function insert(num) {
    let numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}
function clean() {
    document.getElementById('resultado').innerHTML = '';
}
function back() {
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0,resultado.length -1);
}
function calcular() {
    let resultado = document.getElementById('resultado').innerHTML;
    if(resultado) {
        document.getElementById('resultado').innerHTML = eval(resultado);
    }else {
        document.getElementById('resultado').innerHTML = 'Nada...'
    }
    
    
}
































/*let buttons = document.querySelectorAll(".botao")

buttons.forEach((button)=>{
    button.addEventListener("click", ()=>{
        let conteudo = button.textContent
        console.log(conteudo)
    })
    
})
Função nomeada
function teste(){}

Função anônima
function(){}

Arrow function (função seta)
()=>{}*/