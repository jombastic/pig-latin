var translation = function(words) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var result = [];

  words.forEach(function(word) {
    vowels.forEach(function(vowel) {
      if (word.indexOf(vowel) === 0) {
        word += "way";
      }
    });
    result.push(word);
  });

  return result.join(" ");
};

$(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var words = $("#sentance").val().toLowerCase().split(" ");
    var result = translation(words);
    $(".translation").text(result);
  });
});
