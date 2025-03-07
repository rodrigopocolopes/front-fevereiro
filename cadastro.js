$(document).ready(function () {

        $(".bt-add").click(add);
        $(".bt-reordenar").click(reordenar);
})

function add() {

    var nome = $("#nome").val();
    var primeira = nome.charAt(0).toUpperCase();
    var restante = nome.toLowerCase().substring(1);
    var nomecomp = primeira + restante

    if ($("#lista").html().includes(nomecomp)) {

        $("#nome").val("")
        alert("Esse nome já existe")

    } else {


        $("#lista").append("<li class='list-group-item list-group-item-action d-flex justify-content-between'>" + nomecomp + "<button class='btn btn-danger'>Deletar</button>" + "</li>");
        $("#nome").val("")
    }
}

function reordenar() {

    $("#lista").unique();

}