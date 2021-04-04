function modalEffect(str_){
  disable_first_content(str_);
  enable_second_content(str_);
}

function disable_first_content(str_){
  var $content = $('#content' + str_);
  $content.css("display", "none");
}

function enable_second_content(str_){
  var $contentAgree = $('#agree' + str_);
  $contentAgree.css("display", "block");
}

function enable_first_content(str_){
  var $content = $('#content' + str_);
  $content.css("display", "block");
}

function disable_second_content(str_){
  var $contentAgree = $('#agree' + str_);
  $contentAgree.css("display", "none");
}


$(document).ready(function(){
  $('.modal').modal({
      onCloseEnd: function() {
        enable_first_content(this.id)
        disable_second_content(this.id);
      }
    }
  );
});
