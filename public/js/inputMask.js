$(document).ready(function(){
  // guardian MASKS
  $('#cep').mask('00000-000');
  $('#phone').mask('(00) 00000-0000');
  $('#cpf').mask('000.000.000-00', {reverse: true});
  $('#number').mask('0#');

  justString($('#guardian_name'));
  justString($('#guardian_lastname'));
  justString($('#state'));
  justString($('#city'));
  justString($('#street'));

  //student MASKS

  justString($('#std_name'));
  justString($('#std_nickname'));
  $('#std_age').mask('0#');

  //school

  justString($('#school_state'));
  justString($('#school_city'));
  justString($('#school_name'));



  function justString(tag){
    tag.mask('A', {
      translation: {
        A: { pattern: /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ'\s]+$/g, recursive: true },
      },
    });
  }
});
