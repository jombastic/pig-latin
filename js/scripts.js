var pigLatinTranslator = function(word) {
  return word;
};

$(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var word = $("#sentance").val();
    var result = pigLatinTranslator(word);
    $("#translation p").text(result);
  });
});
