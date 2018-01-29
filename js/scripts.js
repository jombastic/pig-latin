var pigLatinTranslator = function(word) {
  var firstCharacter = word.substr(0, 1);
  var vowels = ["a","e","i","o","u"];
    if (vowels.indexOf(firstCharacter) > -1) {
      word += "way";
    } else {  
      var restOfWord = word.substr(1);
      word = restOfWord + firstCharacter.toUpperCase() + "ay";
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
