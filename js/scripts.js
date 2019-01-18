$(document).ready(function() {
  $("form#tracks").submit(function(event) {
    var q1 = $("select#q1").val();
    var q2 = $("select#q2").val();
    var q3 = $("select#q3").val();
    var q4 = $("select#q4").val();
    var q5 = $("select#q5").val();

    var answer = 0;
    if (q1 === 'frontend') {
      answer = 'java';
    }

    $("#suggest").text(answer);
    $("#answer").show();
    event.preventDefault();
  });
});
