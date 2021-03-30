function registerForm(){

  $form = [
      $("#guardian_name").val(),
      $("#guardian_lastname").val(),
      $("#cpf").val(),
      $("#phone").val(),
      $("#state").val(),
      $("#cep").val(),
      $("#city").val(),
      $("#street").val(),
      $("#number").val(),
      $("#school_state").val(),
      $("#school_city").val(),
      $("#school_name").val(),
      $("#std_name").val(),
      $("#std_nickname").val(),
      $("#std_age").val(),
      $("#std_grade").val()
  ];

  $.ajax({
    type: "POST",
    url: "/cadastro",
    data: JSON.stringify([$form, allChecked()]),//, $kit_data]),
    contentType: "application/json",
    success: window.location.reload()
   });
}

function allChecked(){
    $n = [];
    $('input:checkbox').each(function () {
        if (this.checked){
          $data = $(this).attr("name")
          $n.push($data);
        }
    });
  return $n;
}
