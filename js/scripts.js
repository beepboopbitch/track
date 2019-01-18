$(document).ready(function() {
  $("#print").submit(function(event) {
    event.preventDefault();
    var result = $("select#q1").val();

    $("#output").text(result);
  });
});
