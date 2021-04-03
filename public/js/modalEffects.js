function modalEffect(str_){
  var $modal = $("#" + str_);
  var instance = M.Modal.getInstance($modal);
  instance.close();
}
