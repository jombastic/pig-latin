var pigLatinTranslator = function(words) {
  var translatedWords = words.map(function(word) {
    var vowels = ["a","e","i","o","u"];
      if (vowels.indexOf(word.charAt(0)) > -1) {
        return word + "way";
      } else {
        for (var i = 0; i < word.length; i++) {
          if (vowels.indexOf(word.charAt(i)) > -1) {
            var firstCharacter = word.substr(0, 1);
            var consonants = word.substring(1, i);
            var restOfWord = word.substr(i);
            return restOfWord + firstCharacter.toUpperCase() + consonants + "ay";
            break;
          }
        }
      }
    });
  return translatedWords.join(" ");
};

$(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var words = $("#sentance").val().toLowerCase().split(" ");
    var result = pigLatinTranslator(words);
    $("#translation p").text(result);
  });
});
