function clear() {
    document.getElementById("inputs").value = "";
    document.getElementById("outputs").value = "";
}

function calcular() {
    var expressao = document.getElementById("inputs").value;
    
    if (expressao == "") {
        document.getElementById("outputs").value = "expressao invalida";
    } else {

        document.getElementById("outputs").value = eval(expressao);
    }
}
//inserir = (numero) => document.getElementById("inputs").value += numero;
function inserir(numero) {
    document.getElementById("inputs").value += numero;
}

function configurarBotoes() {
    obj = document.getElementsByClassName("operadores");
    console.log(obj.length);
    for (var i =0; i < obj.length; i++) {
        obj[i].addEventListener("click", function() {inserir(this.innerHTML);})
    }
}

var botoes = window.prompt("Quantos botoes deseja?", "Digite numero entre 10 e 50");
console.log(botoes);
for(var j = 0; j < botoes; j++) {
    var num = botoes - j;
    var novoBotao = document.createElement("DIV");
    var numBotao = document.createTextNode(num);
    novoBotao.appendChild(numBotao); 
    novoBotao.setAttribute("class", "operadores")
    var ParentNode = document.getElementById("botoes");
    ParentNode.insertBefore(novoBotao, ParentNode.firstChild);


}

document.getElementById("c").addEventListener("click",clear);

document.getElementById("igual").addEventListener("click", calcular);

configurarBotoes();
