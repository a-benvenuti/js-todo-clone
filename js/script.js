var elenco = [
  'comprare pane',
  'pagare bolleta luce',
  'chiamare luigi',
];

for (var i = 0; i < elenco.length; i++) {
  // clono il contenuto del template
  var template = $('.template li').clone();
  // aggiungo le info al template
  template.prepend(elenco[i]);
  // aggiungo il template alla lista
  $('.to_do_list').append(template);
}

$("#aggiungi").keydown(function(evento){
  if(evento.which == 13){
    var testo = $(this).val();
    if (testo != "") {
      // clono il contenuto del template
      var template = $('.template li').clone();
      // aggiungo le info al template
      template.prepend(testo);
      // aggiungo il template alla lista
      $('.to_do_list').append(template);
      // riazzero il contenuto di "aggiungi"
      $(this).val("");
    }
  }
});

$(".to_do_list").on('click', '.to_do_list-delate', function(){
  $(this).parent().remove();
});
