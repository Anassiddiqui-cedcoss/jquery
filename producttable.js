

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
    
    $regxpNumber=/^\d+$/;
    $regxpName=/^[A-Za-z]+$/;
    $regxpprice=/^\d+$/;
    $regxpquantity=/^\d+$/;
    $temp=0
    $errorFlag=0;
    $msgerror="";
    function skuvalidation(){
        if($sku.match($regxpNumber)){
            $("#product_sku").removeClass("error");
            $("#skuerror").html("");
            $errorFlag=0;
            
        }
        else if(isNaN($sku)){
            
            $("#skuerror").html("**sku must be a number");
            $errorFlag=1;
        }
        else{
            $("#skuerror").html("**sku cannot be blank");
            $("#product_sku").addClass("error");
            $(".error").html("All Fields Must be filled")
            $errorFlag=1;
            
        }
    }
    function namevalidation(){
        if($name.match($regxpName)){
            $("#product_name").removeClass("error");
            $("#Prderror").html("");
            $errorFlag=0;
        }
        // else if($name{
            
            // $("#Prderror").html("**Name cant be a number");
            // $errorFlag=1;
        // }
        else{
            $("#Prderror").html("**name cannot be blank and it must only contain character");
            $("#product_name").addClass("error");
            $errorFlag=1;
            
        }
    }
    function pricevalidation(){
        if($price.match($regxpprice)){
            $("#product_price").removeClass("error");
            $("#Perror").html("");
            $errorFlag=0;
        }
        else{
            $("#Perror").html("**price cannot be blank");
            $("#product_price").addClass("error");
            $errorFlag=1;
            
        }
    }
    function quantityvalidation(){
        if($quantity.match($regxpquantity)){
            $("#product_quantity").removeClass("error")
            $("#qerror").html("");
            $errorFlag=0;
        }
        else{
            $("#qerror").html("**quantity cannot be blank");
            $("#product_quantity").addClass("error")
            $errorFlag=1;
            
        }
    };

    $("#product_sku").blur(function(){
        $sku=$("#product_sku").val();
      
        
        if($sku.match($regxpNumber)){
            $("#product_sku").removeClass("error");
            $("#skuerror").html("");
            $errorFlag=0;
            
        }
        else if(isNaN($sku)){
            
            $("#skuerror").html("**sku must be a number");
            $errorFlag=1;
        }
        else{
            $("#skuerror").html("**sku cannot be blank");
            $("#product_sku").addClass("error");
            $errorFlag=1;
            
        }
    });

    $("#product_name").blur(function(){
        $name=$("#product_name").val();
        if($name.match($regxpName)){
            $("#product_name").removeClass("error");
            $("#Prderror").html("");
            $errorFlag=0;
        }
        // else if($name.match(/[a-z]/)){
            
            //     $("#Prderror").html("**Name cant be a number");
            //     $errorFlag=1;
            // }
            else{
                $("#Prderror").html("**name cannot be blank");
                $("#product_name").addClass("error");
                $errorFlag=1;
    
            }
    });

    
$("#product_price").blur(function(){
    $price=$("#product_price").val();
    if($price.match($regxpprice)){
        $("#product_price").removeClass("error");
        $("#Perror").html("");
        $errorFlag=0;
        }
        else{
            $("#Perror").html("**price cannot be blank");
            $("#product_price").addClass("error");
            $errorFlag=1;
            }
            
        
    });
    
    $("#product_quantity").blur(function(){
        $quantity=$("#product_quantity").val();
        if($quantity.match($regxpquantity)){
        $("#product_quantity").removeClass("error")
         $("#qerror").html("");
        $errorFlag=0;
        }

        else{
            $("#qerror").html("**quantity cannot be blank");
            $("#product_quantity").addClass("error")
            $errorFlag=1;
           }
    });
            

    

    
$("#add_product").click(function(){
    $sku=$("#product_sku").val();
    $name=$("#product_name").val();
    $price=$("#product_price").val();
    $quantity=$("#product_quantity").val();
    $btntext=$("#add_product").html();
    
    //validation//
    skuvalidation($sku);
    namevalidation($name);
    pricevalidation($price);
    quantityvalidation($quantity); 
    
    
    if($errorFlag==0)
    {
        if($btntext=="Add"){
            $obj={SKU:$sku,Name:$name,Price:$price,Quantity:$quantity};
            console.log("************");
            console.log("complete initial",complete);
            console.log("************");
            complete.push($obj);
            $(".success").show();
            $(".error").hide();
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
                   $(".success").show();
                   $(".error").hide();
                   populate();
                }
            }
            
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
    
    
        
    

    

    
    
    
    


    
    
    

    
    
    
    





























// $msgerror="";
// if($sku=="")
// {
    
    
//    
//     $msgerror+="**SKU cant be blank<br/>"
//     
//     $temp=1;
// }
// else{
//     $temp=0;
//   

//     if(isNaN($sku)){

//     $msgerror+="**SKU can be number<br/>"
//     }
//     // else{
        
//     // }
// }
// if($name==""){
//     $msgerror+="**Name cant be blank<br/>"
//   
// }
// else{
//     // $msgerror+="**Name cant be number<br/>"
//     // if(isNaN($name)){


//     // }
//     // else{
//     // }
// }
// if($price==""){
//     $msgerror+="**price cant be blank<br/>"
//    

// }
// else{
//     if(isNaN($price)){
        
//         $msgerror+="**price cant be number<br/>"

//     }
//     // else{
//     // }
// }
// if($quantity==""){
//     $msgerror+="**price cant be blank<br/>"
//    

// }
// else{
//     if(isNaN($quantity)){
        
//         $msgerror+="**Quantity can be number<br/>"

//     }
//     // else{
//     // }
// }

