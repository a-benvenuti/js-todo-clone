// -----------------------------------------------FUNZIONI----------------------------------------------------
/*
  CLONAZIONE DI UNO O PIU ELEMENTI, FIGLI DI UN  ELEM.'CONTAINER' NON VISIBILE;
  E 'TRAPIANTATI' CON DELLE NUOVE 'INFO' IN UN ALTRA SEZIONE DI CODICE A SCELTA NOSTRA
  esempi:
  // clono il contenuto del template
  var template = $('.template li').clone();
  // aggiungo le info al template
  template.prepend(elenco[i]);
  // aggiungo il template alla lista
  $('.to_do_list').append(template);

  IMPORTANTE!
  prima di chiamare la funzione 'clonazione' creare la varbiabile denominata 'clonedContainer'
*/
function clonazione(clonedContainer, toBeCloned, clonedInfo, whereToClone){
  // clono qualsiasi cosa e la metto in una variabile
  var clonedContainer = $(toBeCloned).clone();
  // aggiungo le info all'elemento che ho clonato
  clonedContainer.prepend(clonedInfo);
  // aggiungo l'elemento clonato con le nuove info dove voglio
  $(whereToClone).append(clonedContainer);
}
// ------------------------------------------fine delle FUNZIONI----------------------------------------------
var elenco = [
  'comprare pane',
  'pagare bolleta luce',
  'chiamare luigi',
];
var template;

for (var i = 0; i < elenco.length; i++) {
  clonazione(template, '.template li', elenco[i], '.to_do_list');
}

$("#aggiungi").keydown(function(evento){
  if(evento.which == 13){
    var testo = $(this).val();
    if (testo != "") {
      clonazione(template, '.template li', testo, '.to_do_list')
      // riazzero il contenuto di "aggiungi"
      $(this).val("");
    }
  }
});

$(".to_do_list").on('click', '.to_do_list-delate', function(){
  $(this).parent().remove();
});
