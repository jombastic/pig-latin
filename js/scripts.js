var pigLatinTranslator = function(word) {
  var firstCharacter = word.substr(0, 1);

  var vowels = ["a","e","i","o","u"];
    if (vowels.indexOf(firstCharacter) > -1) {
      word += "way";
    } else {
      for (var i = 1; i < word.length; i++) {
        if (vowels.indexOf(word.charAt(i)) > -1) {
          var consonants = word.substring(1, i);
          var restOfWord = word.substr(i);
          word = restOfWord + firstCharacter.toUpperCase() + consonants + "ay";
          break;
        }
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
