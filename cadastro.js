$(document).ready(function () {

    var dados = ["Pedro", "Ana", "Maria"];

    function imprimir() {

        $("#lista").empty();

        dados.forEach(function (item, idx) {

            $("#lista").append(
                "<li class='list-group-item list-group-item-action d-flex justify-content-between'>"
                + item +
                "<button idx='"
                + idx +
                "' class='btn btn-danger bt-delete'>Deletar</button>" + "</li>"
            );

        })
    } // fim do for each

    $(".bt-reordenar").click(reordenar);

    function reordenar() {

        dados.sort();

        imprimir();

    } // fim do bt reordenar

    $(".bt-add").click(add);

    function add() {

        var nome = $("#nome").val();
        var primeira = nome.charAt(0).toUpperCase();
        var restante = nome.toLowerCase().substring(1);
        var nomecomp = primeira + restante

        if ($("#lista").html().includes(nomecomp)) {

            $("#nome").val("")
            alert("Esse nome já existe")

        } else {

            dados.push(nomecomp);

            imprimir();

            $("#nome").val("")
        }
    } // fim do bt add

    $("#lista").on("click", ".bt-delete", deletar);

    function deletar() {

        var idx = $(this).attr("idx");

        dados.splice(idx, 1);

        imprimir();

    } // fim do bt del
})