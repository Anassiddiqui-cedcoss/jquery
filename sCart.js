$(document).ready(function(){
    $products =[
    {id:"1",name:"Mouse",price:"14.99",total:"0",image:"mouse.jpg",quantity:'0'},
    {id:"2",name:"Keyboard",price:"79.99",total:"0",image:"kb.jpg",quantity:'0'},
    {id:"3",name:"Handfree",price:"17.99",total:"0",image:"handfree.jpg",quantity:'0'}
];
$subTotal=0;
    $tax=0;
    ////////////////////////////dynamically generating products////////////////////////////////////////////////
  function $populate(){
    $subTotal=0;
    $tax=0;
    $text="";
    $text+="<div id='header'<span><h1>Shopping Cart[]</h1></span></div>";
    for(i=0;i<$products.length;i++){
        $text+="<div id='mouse'><div class ='image'><img src='"+$products[i].image+"'></div><div id='content'><div id='mousehead'><h3>"+$products[i].name+"</h3></div><div id='mousePara'><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis ab, reprehenderit quaerat architecto praesentium qui, similique eos nisi eligendi enim veniam dicta dolores dolorem? Dicta maiores vitae delectus corrupti cupiditate.</p></div><div id='bottom'><div id='left'><button class='minus' id='btnminus'>-</button><input value='"+$products[i].quantity+"' class='minus' id='txtbox'><button class='minus' id='btnplus'>+</button></div><div id='right'><p class='price'>"+$products[i].price+"&euro;</p><p class='total'>"+$products[i].total+"&euro;</p></div></div></div></div>";
        
        $subTotal+= parseFloat($products[i].total);
    }
    $subTotal=parseFloat($subTotal).toFixed(2)
    $tax = $subTotal*0.05;
    $tax =$tax.toFixed(2)
    $Total=parseFloat($subTotal)+parseFloat($tax)+parseFloat(5.0)
    $Total = $Total.toFixed(2);
    $("#Products").html($text)
      
 }
 $populate();
////////////////////////////////////////////////minus function ////////////////////////////////////////////////
 $("body").on("click","#btnminus",function(){
     
    $index=$(this).parent().parent().parent().parent().index();
    $input=$(this).next().val();
if($input==0){
    return; 
}
else{
    $input = parseInt($products[$index-1].quantity)-parseInt(1);
    $total = parseFloat($products[$index-1].price)*parseInt($input);
    $total=$total.toFixed(2)
    $products[$index-1].total=$total;
    $products[$index-1].quantity=$input;
    $populate();
    $populateCart();
}
});
//////////////////////////////////////// //////////Plus function/////////////////////////////////////////////

$("body").on("click","#btnplus",function(){
    $index = $(this).parent().parent().parent().parent().index();
   $input = $(this).prev().val();
   $input = parseInt($products[$index-1].quantity)+parseInt(1);
   $total = parseFloat($products[$index-1].price)*parseInt($input);
   $total=$total.toFixed(2)
   $products[$index-1].total=$total;
   $products[$index-1].quantity=$input;
   $populate();
   $populateCart();
});    

///////////////////////////////////////////////footer populate///////////////////////////////////////////////
$cartArr=[];
   function $populateCart(){
       $cart = "";
       $cart = "<div id='totalDiv'><div id='divLeft'><div class='c'>SubTotal="+$subTotal+"&euro;</div><div class='c'>Taxes(5%):"+$tax+"&euro;</div><div class='c'>Shipping:5.00 &euro;</div></div><div id='divRight'><div class='' id='t'>Total:"+$Total+"&euro;</div><div class='c' id='d'>Checkout</div></div></div>";
       $('#footer').html($cart);
       if($subTotal==0){
           $('#footer').html("");
       }
   }

})

    










 
 
 
 
 
 
 
 
 
 

 
 
 
 

 
 
 
 
 
 
 
 
 
 
 
 
 
 

 

 



 
 
 
 
 

 

 

 
 

 
 
 

 
 
 
 

 
 

           