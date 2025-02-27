var cidade = "Curitiba";

// lista -> vetores -> array
var cidades = ["Curitiba", "Pinhais", "Araucária"];

console.log(cidades);

// adicionar ites no final do vetor
cidades.push("Colombo");

console.log(cidades);

// adicionar itens no começo do vetor
cidades.unshift("Almirante Tamandaré");

console.log(cidades);

// remover primeiro cidades.shift()
// remover ultimo cidades.pop()
// remover item X cidades.splice(1, 1) "O primeiro é a posição, e o segundo é a quantidade que quer "apagar""

cidades.splice(1, 1);

console.log(cidades);

/* cidades[1] = "Piraquara" */

/* console.log(cidades);

console.log(cidades[1]); */

// loop -> repetições

/* var ini = 0
var fim = cidades.length - 1; */

/* while (ini <= fim) {
    console.log(cidades[ini]);

    ini = ini + 1;
} */


/* for (var ini = 0; ini<= fim; ini = ini + 1)
{
    console.log(cidades[ini]);
} */

var fim = 0;

for (var ini = cidades.length - 1; ini >= fim; ini = ini - 1)
    {
        console.log(cidades[ini]);
    }

var n1 = 2;
var n2 = 3;
var n3 = 8;

function soma(n1, n2){

    var resultado = n1 + n2 + n3;
    return resultado

}

var val = soma(3, 5);

console.log(val);
