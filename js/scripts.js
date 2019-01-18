$(document).ready(function() {
  $("form#tracks").submit(function(event) {
    var q1 = $("select#q1").val();
    var q2 = $("select#q2").val();
    var q3 = $("select#q3").val();
    var q4 = $("select#q4").val();
    var q5 = $("select#q5").val();

    var answer = null;

    if (q1 === 'backend' && q2 === 'small' && q3 === 'videoy') {
      answer = 'java';
    } else if (q1 === 'backend' && q2 === 'big' && q3 === 'videon') {
      answer = 'php';
    } else if (q1 === 'frontend' && q2 ==='small' && q3 === 'videon') {
      answer = 'ruby';
    } else if (q1 === 'frontend' && q2 ==='big' && q3 === 'videoy') {
      answer = 'C#';
    } else if (q1 === 'backend' && q2 === 'small' && q3 === 'videon') {
      answer = 'java or php'
    } else if (q1 === 'backend' && q2 === 'big' && q3 === 'videoy') {
      answer = 'php or java';
    } else if (q1 === 'frontend' && q2 === 'small' && q3 === 'videoy') {
      answer = 'ruby or java';
    } else if (q1 === 'frontend' && q2 === 'big' && q3 === 'videon') {
      answer = 'C# or ruby';
    }

    $("#suggest").text(answer);
    $("#answer").show();
    event.preventDefault();
  });
});

$(document).ready(function() {
  $("form#blanks").submit(function(event) {
    var blanks = ["name"];

    blanks.forEach(function(blank) {
      var userInput = $("input." + blank).val();
      $("." + blank).text(userInput).val();
    });

    $("#answer").show();
    alert('work')
    event.preventDefault();
  });
});
