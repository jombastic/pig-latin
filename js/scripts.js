function translate(array) {
  var result = [];
     for (var i = 0; i < array.length; i++) {
       var n = array[i].search(/[aeiuo]/);
       switch (n){
         case 0: result.push(array[i]+"way"); break;
         default :
           result.push(array[i].substr(n)+array[i].substr(0,1).toUpperCase()+array[i].substring(1,n)+"ay");
           //result[i]=array[i].replace(/([^aeiou]*)([aeiou])(\w+)/, "$2$3$1ay");
         break;
      }
     }

    return result.join(" ");

}


$(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var words = $("#sentance").val().toLowerCase().split(" ");
    var result = translate(words);
    $(".translation").text(result);
  });
});
