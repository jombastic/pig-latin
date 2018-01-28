var pigLatinTranslator = function(word) {
  var vowels = ["a","e","i","o","u"];
  for (var i = 0; i < vowels.length; i++) {
    if (word.includes(vowels[i])) {
      word += "ay";
    }
  }
  return word;
};

$(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var word = $("#sentance").val().toLowerCase();
    var result = pigLatinTranslator(word);
    $("#translation p").text(result);
  });
});
