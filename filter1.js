$(document).ready(function(){
$products = [
{"id": "100","name": "iPhone 4S","brand": "Apple","os": "iOS","remove":""},
{"id": "101","name": "Moto X","brand": "Motorola","os": "Android","remove":""	},
{"id": "102","name": "iPhone 6","brand": "Apple","os": "iOS", "remove":""},
{"id": "103","name": "Samsung Galaxy S","brand": "Samsung","os": "Android","remove":""},
{"id": "104","name": "Google Nexus","brand": "ASUS","os": "Android","remove":""},
{"id": "105","name": "Surface","brand": "Microsoft","os": "Windows","remove":"" }
];

//////////////////////////////////////////for table show/////////////////////////////////////////////////////
function populate($args){
  $text="";
  $text="<tr><th>ID</th><th>Name</th><th>Brand</th><th>Operating System</th><th>Remove</th></tr>";
  for(i=0;i<$args.length;i++){
    $text+="<tr><td>"+$args[i].id+"</td><td>"+$args[i].name+"</td><td>"+$args[i].brand+"</td><td>"+$args[i].os+"</td><td><a class='hidden'>x</a></tr>";
   
  }
  $("#tblshow").html($text);
}
populate($products);

//////////////////////////////////////////////////for hide //////////////////////////////////////////////////
$("#tblshow").on("click","a",function(){
  $(this).closest("tr").hide();
});

///////////////////////////////////////////////////for sorting//////////////////////////////////////////////

//sort by operating system//

$("#selectOs").click(function(){
  $arrayfilter=[];
  $("#tblshow").html("");
 $sortOs=$("#selectOs :selected").text();

for(i=0;i<$products.length;i++){
    if($sortOs==$products[i].os)
  
  {
  $arrayfilter.push($products[i])
  }
  
}
console.log($arrayfilter);
populate($arrayfilter);
});

//sort by Brand//
$("#selectBrand").click(function(){
  $arrayfilterbrand=[];
  $("#tblshow").html("");
 $sortBrand=$("#selectBrand :selected").text();

for(i=0;i<$products.length;i++){
    if($sortBrand==$products[i].brand)
  
  {
  $arrayfilterbrand.push($products[i])
  }
  
}
populate($arrayfilterbrand);
});

///////////////////////////////////////////////for Searchng////////////////////////////////////////////////////
$("#btn").click(function(){
  $sBar=$("#searchBar").val();
  $arrSearch=[];
  for(i=0;i<$products.length;i++){
      if($sBar==$products[i].name||$sBar==$products[i].id){
       
        $arrSearch.push($products[i])
      
      }  
    }    
  populate($arrSearch);
})


 


       




})