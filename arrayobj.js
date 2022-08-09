$arrayCart=[];
$(document).ready(function(){
    $products = [{"id":101,"name":"Basket Ball","image":"basketball.png","price":150},
    {"id":102,"name":"Football","image":"football.png","price":120},
    {"id":103,"name":"Soccer","image":"soccer.png","price":110},
    {"id":104,"name":"Table Tennis","image":"table-tennis.png","price":130},
    {"id":105,"name":"Tennis","image":"tennis.png","price":100}];
    
    $prd01=$("#product-101").val();
    $obj={ID:"id",Name:"name",Image:"image",Price:"price"};
function populate(){
    $text="";
    for(i=0;i<$products.length;i++){
       
          $text+="<div class='product' id='productid'><img src='images/"+$products[i].image+"'/><span><h3>"+$products[i].id+''+$products[i].name+"</h3></span><span>"+"Price:$"+$products[i].price+"</span><a class='add-to-cart'>Add To Cart</a></div>";
          }
          $("#products").html($text);
        }
        populate();
          
    // $("#products").on("click",".add-to-cart",(function(){
    //       // $text="<tr><th>ID</th><th>Name</th><th>Image</th><th>Price</th><th>Remove</th></tr>";
          


    //     $arrayCart.push($obj);
    //     populate($arrayCart);
    //     console.log($arrayCart)
//         // pop();
        
//     }))
    
//     function pop(){
//         $cart="";
//         $cart="<tr><th>ID</th><th>Name</th><th>Image</th><th>Price</th><th>Remove</th></tr>";
//         for(i=0;i<$arrayCart.length;i++){
//             $cart+="<tr><td>"+$arrayCart[i].id+"</td><td>"+$arrayCart[i].name+"</td><td>"+$arrayCart[i].image+"</td><td>"+$arrayCart[i].price+"</td><td><a class='hidden'>x</a></tr>";
            
//         }
//     $(".showCart").html($cart);
//     console.log($arrayCart)
    

// }
// pop();
    
    























})