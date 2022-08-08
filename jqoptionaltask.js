$(document).ready(function(){
$(".checkall").on("click", function() {
$(".checkhour").attr("checked",!clicked );
  clicked = !clicked;
  this.innerHTML = clicked ? 'unchecked' : 'checked';
});
})
    
 