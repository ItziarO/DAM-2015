//para cambiar orientación
$( window ).on( "orientationchange", function( event ) {

         $( "#orientacion" ).text( "Este dispositivoestá en " + event.orientation + " modelo" );
  });
    $( window ).orientationchange();
//AMpliar texto
$(function() {
  $( "#boton_efecto" ).button();
    $( "#boton_efecto" ).click(function(){
      $( "#efecto" ).toggleClass("clase-two", 500 );
    });
  });


//mobileinit event

$( document ).on( "mobileinit", function() {

  $.mobile.popup.prototype.options.overlayTheme = "a";

  $.mobile.ns = "jqm-";
});
