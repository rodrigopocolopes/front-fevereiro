$(document).ready(function () {

    $("#bt-cadastrar").click(function () {

        $("input, select").removeClass("is-invalid");
        $("label").removeClass("text-danger fw-bold");

        var nome = $("#input-nome").val();

        if (nome.trim().length <= 1) {

            $("#input-nome").addClass("is-invalid");
            $("#label-nome").addClass("text-danger fw-bold");
        }

        var regex_fone = /^\([0-9]{2}\)\ ([0-9]{1}\ [0-9]{4}|[0-9]{4}|[9]{1}[0-9]{4})\-[0-9]{4}$/gm
        var tel = $("#input-tel").val();
        if (/* tel.trim().length < 14 || tel.trim().length > 16 || */ regex_fone.test(tel) == false) {
            $("#input-tel").addClass("is-invalid");
            $("#label-tel").addClass("text-danger fw-bold");
        }

        var regex_email = /^([A-z 0-9 \. \- \_])+\@([A-z 0-9 \.])+\.[A-z]+$/gm
        var email = $("#input-email").val();
        if (email.trim() == "" || regex_email.test(email) == false) {
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


    // bloqueio das teclas
    $("#input-tel").keydown(function (ev) {

        console.log(ev.keyCode);
        if (
            ev.keyCode == 8 || // backspace
            ev.keyCode == 16 || // shift
            ev.keyCode == 32 || // espaço
            ev.keyCode >= 35 && ev.keyCode <= 40 || // home, end e setas
            ev.keyCode == 46 || // delete
            ev.keyCode >= 48 && ev.keyCode <= 57 || // 0-9
            ev.keyCode >= 97 && ev.keyCode <= 105 || // 0-9 teclado lateral
            ev.keyCode == 109 // traço
        ) {
            return true;
        } else {
            return false;
        }

    }) // fim do keydown

})

// ^\([0-9]{2}\)\ ([0-9]{1}\ [0-9]{4}|[0-9]{4}|[9]{1}[0-9]{4})\-[0-9]{4}$