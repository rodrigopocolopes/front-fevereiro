

function fatorial() {
    var num = valor.value;
    var fim = 1;
    var total = 1;


    while (num >= fim) {

        total = total * num;

        num = num - 1;


    }

    resultado.innerText = total;

}

function tabuada() {
    var num = valor.value;
    var ini = 1
    var fim = 10;
    var result = 1;

    while (ini <= fim) {

        result = ini * num;

        console.log(num + "x" + ini + " = " + result)

        ini = ini + 1;
    }
}

function media() {

    var nt1 = parseInt(nota1.value);
    var nt2 = parseInt(nota2.value);
    var nt3 = parseInt(nota3.value);
    var nt4 = parseInt(nota4.value);

    var mul = (nt1 + nt2 + nt3 + nt4);
    var med = mul / 4;
    resultado.innerText = "A média é " + med;

    if (med < 4) {
        alert("O aluno foi reprovado")
    } else if (med <= 7) {

        alert("O aluno está de recuperação")
    } else {
        alert("O aluno foi aprovado")
    }
}

function media2() {

    var mediana = 0;

    for (var ini = 1; ini <= 4; ini = ini + 1) {

        var nt = prompt("Digite o valor da nota " + ini);
        mediana = mediana + parseInt(nt);
    }

    var med = mediana / 4;

    if (med < 4) {
        alert("A média é " + med + ", o aluno foi reprovado")
    } else if (med <= 7) {

        alert("A média é " + med + ", o aluno está de recuperação")
    } else {
        alert("A média é " + med + ", o aluno foi aprovado")
    }
}

function fib() {

    var ini = 0;
    var ant = 0;
    var fim = parseInt(valor.value)

    while (ini <= fim) {

        var ant = ini + ini;
        var next = ant + ini;
        console.log(next)

    }


}