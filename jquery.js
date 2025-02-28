function mudar() {
    var cor = $("#cor").val();
    $(".titulo").css("color", cor)
}

function add() {

    var city = $("#cidade").val();
    var primeira = city.charAt(0).toUpperCase();
    var restante = city.toLowerCase().substring(1);
    var nomecomp = primeira + restante

    if ($("#lista").html().includes(nomecomp)) {

        $("#cidade").val("")
        alert("Essa cidade já existe")

    } else {


        $("#lista").append("<li>" + nomecomp + "</li>");
        $("#cidade").val("")
    }
}
//documento carregado
$(document).ready(function () {

    // adicionando evento
    $(".bt-add").click(add);

    $(".titulo").css("color", "red")

    $("h1, li").click(function () {
        var cor = $("#cor").val();
        $(this).css("color", cor);
    })

    
});