// E > P > S

function soma(n1, n2) {
    var resultado = n1 + n2;
    return resultado;
}

soma(2, 3);


function oi() {
    /* alert("Teste"); */
    /* console.log(texto.value); */
    var valor = texto.value;
    mensagem.innerText = valor     /* .toUpperCase(); */

}

function maiusculas() {
    var valor = texto.value;
    /* mensagem.innerText = valor.toUpperCase(); */
    /* mensagem.innerText = valor.charAt(0).toUpperCase() + valor.toLowerCase().substring(1); */
    var primeira = valor.charAt(0).toUpperCase();
    var restante = valor.toLowerCase().substring(1);
    mensagem.innerText = primeira + restante;
}

function temp() {
    // C = (5 * (F-32) / 9).
    var valor = texto.value;
    var c1 = valor - 32;
    var c2 = 5 * c1;
    var c3 = c2 / 9;
    mensagem.innerText = c3 + " ºC";
}


function sum() {

    var valor = parseInt(num1.value) + parseInt(num2.value);
    mensagem.innerText = valor;
}

function sub() {

    var valor = parseInt(num1.value) - parseInt(num2.value);
    mensagem.innerText = valor;
}

function div() {

    var valor1 = parseInt(num1.value);
    var valor2 = parseInt(num2.value);

    if (valor2 == 0) {
        alert("O divisor não pode ser 0")
    }
    else {
        var valor = valor1 / valor2;
        mensagem.innerText = valor;
    }
}

function mul() {

    var valor = parseInt(num1.value) * parseInt(num2.value);
    mensagem.innerText = valor;
}

function parimpar() {

    var valor = texto.value;
    if (valor % 2 == 0) {
        mensagem.innerText = "Par";
    } else {
        mensagem.innerText = "Ímpar";
    }

}

function vogal() {

    // ou -> ||
    // e  -> &&

    var valor = texto.value;
    /* if (valor == "a") {
        mensagem.innerText = "Vogal";
    }
    else if (valor == "e") {
        mensagem.innerText = "Vogal";
    }
    else if (valor == "i") {
        mensagem.innerText = "Vogal";
    }
    else if (valor == "o") {
        mensagem.innerText = "Vogal";
    }
    else if (valor == "u") {
        mensagem.innerText = "Vogal";
    }
    else {
        mensagem.innerText = "Consoante";
    } */

    if (valor == "a" || valor == "e" || valor == "i" || valor == "o" || valor == "u") {
        mensagem.innerText = "Vogal";
    } else {
        mensagem.innerText = "Consoante";
    }

}