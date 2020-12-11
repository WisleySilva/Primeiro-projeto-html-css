// Criando uma variável para capturar o elemento
// do HTML pelo Id. Este elemento mostrará os valores no display.

let inputResult = document.getElementById("inputResult")

// Objeto para mantermos controle dos dados e funcão para calcular.
let calculo = {
    valorSalvo: null,
    funcaoParaCalcular: null
}
// Ao carregar a janela, inicializa os métodos e variaveis
window.addEventListener("load", function(){
    atribuirEventos();
})

// Adiciona o número na tela

function inserirNumero() {
    if (isNaN(inputResult.value)){
        inputResult.value = event.target.textContent;
    } else{
        if(inputResult.value == 0){
            inputResult.value = event.target.textContent;
        }else{
            inputResult.value += event.target.textContent;
        }
     }
    }

function atribuirEventos(){
    document.getElementById("btnValor0").addEventListener("click", inserirNumero);
    document.getElementById("btnValor1").addEventListener("click", inserirNumero);
    document.getElementById("btnValor2").addEventListener("click", inserirNumero);
    document.getElementById("btnValor3").addEventListener("click", inserirNumero);
    document.getElementById("btnValor4").addEventListener("click", inserirNumero);
    document.getElementById("btnValor5").addEventListener("click", inserirNumero);
    document.getElementById("btnValor6").addEventListener("click", inserirNumero);
    document.getElementById("btnValor7").addEventListener("click", inserirNumero);
    document.getElementById("btnValor8").addEventListener("click", inserirNumero);
    document.getElementById("btnValor9").addEventListener("click", inserirNumero);

    document.getElementById("btnLimpar").addEventListener("click", limparDados);
    document.getElementById("btnPonto").addEventListener("click", inserirPonto);

    document.getElementById("btnDividir").addEventListener("click", clicarOperador);
    document.getElementById("btnSoma").addEventListener("click", clicarOperador);
    document.getElementById("btnSubtrair").addEventListener("click", clicarOperador);
    document.getElementById("btnMultiplicar").addEventListener("click", clicarOperador);

    document.getElementById("btnResultado").addEventListener("click", clicarResult);

}

function somarValores(valor1, valor2) {
    return valor1 + valor2;
}
function subtrairValores(valor1, valor2) {
    return valor1 - valor2;
}
function multiplicarValores(valor1, valor2) {
    return valor1 * valor2;
}
function dividirValores(valor1, valor2) {
    if(valor2 == 0){
        return "Erro, divisão por zero!";
    }
    else{
        return valor1 / valor2;
    }
}
function limparDados() {
    inputResult.value = "";

    calculo.valorSalvo = null;
    calculo.funcaoParaCalcular = null;
}
function inserirPonto(){
    if(inputResult.value === "" || isNaN(inputResult.value)){
        inputResult.value = "0.";
    }else if(!inputResult.value.includes(".")){
        inputResult.value = inputResult.value + ".";
    }
}
function clicarOperador() {
    if(!isNaN(inputResult.value)){
        if(calculo.valorSalvo == null){
            calculo.valorSalvo = Number(inputResult.value);
        }else if(calculo.funcaoParaCalcular != null){
            calculo.valorSalvo = calculo.funcaoParaCalcular(calculo.valorSalvo, Number(inputResult.value));
        }
    }
    let operador = event.target.textContent;
    atribuirOperacao(operador);
    inputResult.value = operador;
}
function atribuirOperacao(operador){
    if(operador == "+"){
        calculo.funcaoParaCalcular = somarValores;
    } else if(operador == "-"){
        calculo.funcaoParaCalcular = subtrairValores;
    } else if(operador == "*"){
        calculo.funcaoParaCalcular = multiplicarValores;
    } else {
        calculo.funcaoParaCalcular = dividirValores;
    }
}

function clicarResult() {
    if(!isNaN(inputResult.value) && calculo.funcaoParaCalcular != null){
        let resultado = calculo.funcaoParaCalcular(calculo.valorSalvo, Number(inputResult.value));
        inputResult.value = resultado;
        calculo.valorSalvo = resultado;
        calculo.funcaoParaCalcular = null;
    }
}

