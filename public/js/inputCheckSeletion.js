//select materials list by change the style
//the functions are inline, because EJS uses DOM ready then DOM is not ready!

function select(str_){
  var tagNam = '#' + str_;
  var $ctx = $(tagNam);
  var $checkbox = $("#input_" + str_);
  if ($checkbox.is(":checked")){
      $ctx.removeClass("grey lighten-1");
      togglecheckbox($checkbox, false);

  }
  else {
     $ctx.addClass("grey lighten-1");
     togglecheckbox($checkbox, true);
  }
}

function togglecheckbox($checkbox, $bool) {
  $checkbox.prop('checked', $bool);
  $checkbox.data('waschecked', $bool);
}
