//Inicia o Documento
$(document).ready(function () {
  //Declarar a função para o form
  $('form').on('submit', function (e) {
    //Previnir o evento Default do form
    e.preventDefault();
    // Declare a função

    const novaTarefa = $('#nova-tarefa').val();
    const novoItem = $(`<li>${novaTarefa}</li>`)
    $(novoItem).appendTo('ul');
    $(novoItem).fadeIn(1000);

    $('#nova-tarefa').val('');
  });

  $('ul').on('click','li', function () {
    $("li").addClass("concluido");
  });

});
