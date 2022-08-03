
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
    $(".btnEven").click(function(){
        $("tr:even").css("background-color","LightGrey")
    });
    $(".btnOdd").click(function(){
        $("tr:odd").css("background-color","DodgerBlue ")
    });
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

});
