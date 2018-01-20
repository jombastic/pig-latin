var translation = function(sentance) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];

  vowels.forEach(function(vowel) {
    if (sentance.includes(vowel)) {
      sentance += "way";
    }
  });
  return sentance;
}

$(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var sentance = $("#sentance").val();
    var result = translation(sentance);
    $(".translation").text(result);
  });
});
