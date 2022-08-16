$(document).ready(function () {
  $('.btnClass').click(function () {
    pasteAttr();
    copyClass();
    $('h1:not(.bingo)').replaceWith('<h2>' + $('h1').html() + '</h2>')
    $('.btnClass').attr('disabled', 'disabled')
  })
  function copyClass() {
    $arr = $('body').find('h1')
    for (i = 0; i < $arr.length; i++) {
      if ($($arr[i]).attr('class') != 'bingo') {
        $txt = $($arr[i]).html()
        $($arr[i]).replaceWith('<h2>' + $txt + '</h2>')
      }
    }
  }

  function pasteAttr() {
    $('h1').each(function (j) {
      $arrObj = [];

      $.each(this.attributes,function(i,a){
          $obj={id:i+1,name:a.name,value:a.value}
          $arrObj.push($obj);
          console.log($arrObj[i].name,"=",$arrObj[i].value)
        })
    })
        
        
  }
});































// $.each(this.attributes,function(i,a){
//     obj={id:i+1,name:a.name,value:a.value}
//     arrObj.push(obj);
//   })
//   $("#divDisp").append("<h3>"+parseInt(j+1)+". "+arrObj.length+" attributes</h3>")
//   for(i=0;i<arrObj.length;i++){
//     console.log("name=",arrObj[i].name)
//   $("#divDisp").append("<p>"+arrObj[i].id+"."+arrObj[i].name+":"+arrObj[i].value+"</p>")
//   }
// })
// console.log($arrAttributes)
// }
// });
