$(function() {

    $('.texto_hide').hide();
    $('.texto_hide_dos').hide();
    $('.texto_hide_tres').hide();

    $('.boton_hide').click(function() {
        $('.texto_hide').toggle('slow');
    })
    $('.boton_hide_dos').click(function() {
        $('.texto_hide_dos').toggle('slow');
    })
    $('.boton_hide_tres').click(function() {
        $('.texto_hide_tres').toggle('slow');
    })

    var h3dbl = $("h3").first();
    h3dbl.dblclick(function() {
        h3dbl.toggleClass("dbl");
    });
    var h4dbl = $("h4").first();
    h4dbl.dblclick(function() {
        h4dbl.toggleClass("dbl");
    });



});