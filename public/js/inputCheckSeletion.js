//select materials list by change the style
//the functions are inline, because EJS uses DOM ready then DOM is not ready!

function select(str_){
  var tagNam = '#' + str_;
  var $ctx = $(tagNam);
  var $checkbox = $("#input_" + str_);
  console.log(tagNam);
  console.log("#input_" + str_);
  if ($checkbox.is(":checked")){
      $ctx.removeClass("blue-grey");
      togglecheckbox($checkbox, false);

  }
  else {
     $ctx.addClass("blue-grey");
     togglecheckbox($checkbox, true);
  }
}

function togglecheckbox($checkbox, $bool) {
  $checkbox.prop('checked', $bool);
  $checkbox.data('waschecked', $bool);
}

function untoggle(str_) {
  $checkbox = $("#input_" + str_);
  console.log('has');
  $checkbox.prop('checked', false);
  $checkbox.data('waschecked', false);
}
