
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
        clas=document.getElementById("class").value;
        board=document.getElementById("board").value;
        marks=document.getElementById("marks").value;
        division=document.getElementById("divs").value;
        $("body").append("<div><input type='text'placeholder=Enter class><input type='text' placeholder='Enter board'><input type='text' placeholder='Enter Marks'><input type='text'placeholder='Enter Division'><button class='btn'>-</button></div>");
    })
    
    $(".minus").click(function(){
        $(".details").remove();
    })
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












});



