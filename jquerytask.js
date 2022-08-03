
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

});
