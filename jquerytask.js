
    $(document).ready(function(){
        
        
        $("#confirmpass").keyup(function(){
            var password=document.getElementById("pass").value;
        var confirmpassword=document.getElementById("confirmpass").value;
        if(password == confirmpassword)
        {
            alert();
            document.getElementById("error").innerHTML="";
        }
        else
        {
            document.getElementById("error").innerHTML="**not matched"
        }
    });
    ///////////////////////////////////////////////////////////////////////////////////////////////////////
    $(".btnEven").click(function(){
        $("tr:even").css("background-color","LightGrey")
    });
    $(".btnOdd").click(function(){
        $("tr:odd").css("background-color","DodgerBlue ")
    });
    ////////////////////////////////////////////////////////////////////////////////////////////////////////
    $("#submit").click(function(){
        first=document.getElementById("fname").value;
        last=document.getElementById("lname").value;
        if(first==""){
           $("#fname").css("background-color","red")
           alert("It cant be blank")
        }
        if(last==""){
           $("#lname").css("background-color","red")
           alert("It cant be blank")
        }
    });
    //////////////////////////////////////////////////////////////////////////////////////////////////////////
    $(".add").click(function(){
        $(".details").append("<div><input type='text'placeholder=Enter class><input type='text' placeholder='Enter board'><input type='text' placeholder='Enter Marks'><input type='text'placeholder='Enter Division'><button class='btn1'>+</button><button class='btn'>-</button></div>");
    });
    
    $(".minus").click(function(){
        $(".main").remove();
    })
    $("body").on("click",".btn1",(function(){
        $(".main").append("<div><input type='text'placeholder=Enter class><input type='text' placeholder='Enter board'><input type='text' placeholder='Enter Marks'><input type='text'placeholder='Enter Division'><button class='btn1'>+</button><button class='btn'>-</button></div>");
    }))
    $("body").on("click",".btn",(function(){
        $(this).parent().remove();
    }));
    
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////
    var i=0; 
    var color1 = ["black", "blue", "brown", "green"];
    
    setInterval(function(){
        $(".change").css("color",color1[i]); i = (i + 1) % color1.length;},5000);
       
 ///////////////////////////////////////////////////////////////////////////////////////////////////////////////   
 image=["img1.jpg","img2.jpg","img3.jpg","img4.jpg","img5.jpg"];
 var j=2;
 $("#btnPrev").click(function(){
    if(j==-1) j=4;
    if(j>=0){
       
        $("img").attr("src",image[j])
        j--;
       
    }
    
 });
 $("#btnNext").click(function(){
    if(j<=4){
        
        $("img").attr("src",image[j])
        j = (j + 1) % image.length;
    }
    
    console.log(image)

 });

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
const flowers=["Rose","Lily","Sunflower","Lotus","Jasmine"];
$("#suggestSomething").keyup(function(){
    $matched="";
    for(i=0;i<flowers.length; i++)
    {
        $name=$("#suggestSomething").val();
        $match=flowers[i].substring(0,$name.length)
        if($name==$match)
        {
            $matched+=" "+flowers[i]
        }
    }
    $("#suggest").html("suggestion:"+$matched);
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
$("#sel1").change(function(){
    $size=$(this).val();
    if($size=="Small")
    {
        $("#price1").html("1500/-")
    }
    if($size=="Medium")
    {
        $("#price1").html("2000/-")
    }
    if($size=="Large")
    {
        $("#price1").html("3000/-")
    }
    console.log($size=="Small")
});
$("#sel2").change(function(){
    $color=$(this).val();
    if($color=="Light Grey")
    {
        $("#price2").html("1500/-")
    }
    if($color=="White")
    {
        $("#price2").html("2000/-")
    }
    if($color=="Red")
    {
        $("#price2").html("3000/-")
    }
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////
$(".para").click(function(){
    alert("*****click Me")
})

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
$("#productsCategories").on("click",".btnAdd",function(){
$li=$(this).parent();
$newli="<li>New Items<button class='btnAdd'>+</button></li>";
$li.after($newli);
})







});



