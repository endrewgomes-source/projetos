function IMC() {
    let nome = document.getElementById("nome");
    let altura = document.getElementById("altura");
    let peso = document.getElementById("peso");
    let tela = document.getElementById("resultado");

    let alturaCal = altura.value;
    let pesoCal = peso.value;

    let imc = pesoCal / (alturaCal * alturaCal);

    tela.textContent = `O IMC de ${nome.value} é ${imc.toFixed(2)}`;

}

let button = document.getElementById("calcular");

button.addEventListener("click", IMC);