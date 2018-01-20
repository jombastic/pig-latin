$(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var sentance = $("#sentance").val();

    $(".translation").text(sentance);
  });
});
