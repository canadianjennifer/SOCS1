function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5wSFaNs7nv4":
        Script1();
        break;
      case "6mIV0V1KJKu":
        Script2();
        break;
  }
}

function Script1()
{
  var player = GetPlayer();

$.ajax({

url:
"https://script.google.com/macros/s/AKfycbzXwvWj1Cf3IlWX3oN0Mu2RxrDxo9RJODUjwQAqyUnnombQxNHW5Z4fYFgu8cA2klsr/exec",

type: "POST",

data: {"LearnerName": player.GetVar("LearnerName")
, "LearnerEmail": player.GetVar("LearnerEmail")
, "CorrectAnswer": player.GetVar("CorrectAnswer")},


success: function(data)

{

console.log(data);

},

error: function(err) {
console.log('Error:', err);
}

});

return false;
}

function Script2()
{
  var player = GetPlayer();

$.ajax({

url:
"https://script.google.com/macros/s/AKfycbzXwvWj1Cf3IlWX3oN0Mu2RxrDxo9RJODUjwQAqyUnnombQxNHW5Z4fYFgu8cA2klsr/exec",

type: "POST",

data: {"LearnerName": player.GetVar("LearnerName")
, "LearnerEmail": player.GetVar("LearnerEmail")
, "CorrectAnswer": player.GetVar("CorrectAnswer")},


success: function(data)

{

console.log(data);

},

error: function(err) {
console.log('Error:', err);
}

});

return false;
}

