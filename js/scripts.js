var translation = function(sentance) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];

  vowels.forEach(function(vowel) {
    if (sentance.indexOf(vowel) === 0) {
      sentance += "way";
    }
  });
  return sentance;
}

$(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var sentance = $("#sentance").val().toLowerCase();
    var result = translation(sentance);
    $(".translation").text(result);
  });
});
