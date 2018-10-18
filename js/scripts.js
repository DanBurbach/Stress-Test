var score = 0;
function sum() {
  if (score >= 20) {
    $("#result").append("You are haunted by a ghost, seek help.");
  }
  else if (score === 8) {
    $("#result").append("Seek medical help immediately!");
  }
  else if (score >= 6) {
    $("#result").append("You are WAY too stress out!");
  }
  else if (score >= 3) {
    $("#result").append("You are stressed out!");
  }
  else {
    $("#result").append("Cheers! Have a nice day because you are fine.");
  }
}
$(document).ready(function() {
  $(".click").click(function() {
    $("#survey").show();
    $("#title").hide();
  });
  $("button").click(function() {
    $("input:checkbox[name=warning-signs]:checked").each(function(){
      score = score + parseInt($(this).val());
    });
    $("input:checkbox[name=health-symptoms]:checked").each(function(){
      score = score + parseInt($(this).val());
    });
    sum(score);
    $("#survey").hide();
    $("#end").show();
    console.log(score);
  });
});
