$(document).ready(function(){
    var clicked = false;
$(".checkall").on("click", function() {
  $(".checkhour").prop("checked", !clicked);
  clicked = !clicked;
  this.innerHTML = clicked ? 'unchecked' : 'checked';
});
    })