$(document).ready(function () {

    $("#bt-cadastrar").click(function () {

        $("input, select").removeClass("is-invalid");
        $("label").removeClass("text-danger fw-bold");

        var nome = $("#input-nome").val();

        if (nome.trim().length <= 1) {

            $("#input-nome").addClass("is-invalid");
            $("#label-nome").addClass("text-danger fw-bold");
        }

        var tel = $("#input-tel").val();
        if (tel.trim().length < 10) {
            $("#input-tel").addClass("is-invalid");
            $("#label-tel").addClass("text-danger fw-bold");
        }

        var email = $("#input-email").val();
        if (email.trim() == "") {
            $("#input-email").addClass("is-invalid");
            $("#label-email").addClass("text-danger fw-bold");
        }

        var city = $("#input-city").val();
        if (city.trim() == "") {
            $("#input-city").addClass("is-invalid");
            $("#label-city").addClass("text-danger fw-bold");
        }

        var estado = $("#input-state").val();
        if (estado == "selecione") {
            $("#input-state").addClass("is-invalid");
            $("#label-state").addClass("text-danger fw-bold");
        }

        var masc = $("#input-masc").val();
        var fem = $("#input-fem").val();
        var sexo = $("[name=sexo]:checked").val()
        if (sexo == undefined) {
            $("#input-masc").addClass("is-invalid");
            $("#input-fem").addClass("is-invalid");
            $("#label-sexo").addClass("text-danger fw-bold");

        }


    }) // fim do bt-cadastrar

    $("#input-tel").keydown(function (ev) {

        console.log(ev.keyCode);
        if (ev.keyCode >= 48 && ev.keyCode <= 57 || ev.keyCode == 32 || ev.keyCode == 8 || ev.keyCode == 46) {

        } else {
            return false;
        }

    }) // fim do keydown

})