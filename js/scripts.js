function translate(words) {
  var result = words.map(function(word) {
    var n = word.search(/[aeiuo]/);
    if (n === 0) {
     return word+"way";
    } else if (n === -1) {
     return word;
    } else {
     return word.substr(n)+word.substr(0,1).toUpperCase()+word.substring(1,n)+"ay";
     //return word.replace(/([^aeiou]*)([aeiou])(\w+)/, "$2$3$1ay");
    }
  });
  return result.join(" ");
};

$(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var words = $("#sentance").val().toLowerCase().split(" ");
    var result = translate(words);
    $(".translation").text(result);
  });
});
