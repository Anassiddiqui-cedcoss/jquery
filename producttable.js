

var complete=[];
function populate(){
$text="";
for(i=0; i<complete.length;i++)
{
$text+="<tr><td>"+complete[i].SKU+"</td><td>"+complete[i].Name+"</td><td>"+complete[i].Price+"</td><td>"+complete[i].Quantity+"</td><td><a href='#' class='editlist'>Edit</a> <a href='#' class='delete'>Delete</a></td></tr>";
}
$("#tableshow").html($text);
}
//////////////////////////////////////////////////pushing array/////////////////////////////////////////////

$(document).ready(function(){
$("#add_product").click(function(){
$sku=$("#product_sku").val();
$name=$("#product_name").val();
$price=$("#product_price").val();
$quantity=$("#product_quantity").val();
$btntext=$("#add_product").html();


// $(this).closest('div').find("input[type=text]").val("");
$temp=0
$msgerror="";
if($sku=="")
{
    
    
    $("#product_sku").focus();
    $msgerror+="**SKU cant be blank<br/>"
    $("#product_sku").css("border-color","red")
    $temp=1;
}
else{
    $temp=0;
    $("#product_sku").css("border-color","red")

    if(isNaN($sku)){

    $msgerror+="**SKU can be number<br/>"
    }
    // else{
        
    // }
}
if($name==""){
    $msgerror+="**Name cant be blank<br/>"
    $("#product_name").css("border-color","red")
}
else{
    // $msgerror+="**Name cant be number<br/>"
    // if(isNaN($name)){


    // }
    // else{
    // }
}
if($price==""){
    $msgerror+="**price cant be blank<br/>"
    $("#product_price").css("border-color","red")

}
else{
    if(isNaN($price)){
        
        $msgerror+="**price cant be number<br/>"

    }
    // else{
    // }
}
if($quantity==""){
    $msgerror+="**price cant be blank<br/>"
    $("#product_quantity").css("border-color","red")

}
else{
    if(isNaN($quantity)){
        
        $msgerror+="**Quantity can be number<br/>"

    }
    // else{
    // }
}
if($msgerror.trim()=="")
{
    if($btntext=="Add"){
        $obj={SKU:$sku,Name:$name,Price:$price,Quantity:$quantity};
        console.log("************");
        console.log("complete initial",complete);
        console.log("************");
        complete.push($obj);
        populate();            
        }
        else{
            if($btntext=="Update"){       
               complete[$flag].SKU=$("#product_sku").val();
               complete[$flag].Name=$("#product_name").val();
               complete[$flag].Price=$("#product_price").val();
               complete[$flag].Quantity=$("#product_quantity").val();
               $("#add_product").html("Add")
               $(this).closest('div').find("input[type=text]").val("");
               $(this).closest('div').find("input[type=number]").val("");
               populate();
           }
        }
    
        $(".error").hide();
        $(this).closest('div').find("input[type=text]").val("");
        $(this).closest('div').find("input[type=number]").val("");
}
else{
$(".success").hide();
}
$("#error").html($msgerror);
});
            
////////////////////////////////////////////for delete//////////////////////////////////////////////////
            
    $("#tableshow").on("click", ".delete", (function() {
        alert("do you want to delete the file")
        $(this).closest("tr").remove();
    }));
    ////////////////////////////////////////////////for edit ///////////////////////////////////
    
    $flag=-1;
    $("#tableshow").on("click", ".editlist", (function() {
    $flag=$(this).parent().parent().index();
    $("#product_sku").val(complete[$flag].SKU);
    $("#product_name").val(complete[$flag].Name);
    $("#product_price").val(complete[$flag].Price);
    $("#product_quantity").val(complete[$flag].Quantity);
    $("#add_product").html("Update");
    
}));

});
