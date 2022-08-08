$(document).ready(function(){
    $("#myselect").change(function(){
    $text1=$("#myselect :selected").text();
    alert($text1)
    })
})
    
 