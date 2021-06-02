prediction_1 = "";
prediction_2 = "";
prediction_3 = "";

Webcam.set({

    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
  });

camera = document.getElementById("camera");

Webcam.attach('#camera');

      
function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

  console.log('ml5 version:', ml5.version);
  
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/5mxzZHkpx/model.json',modelLoaded);

  function modelLoaded() {
    console.log('Model Loaded!');
  }
  
function speak(){
  var synth = window.speechSynthesis;
  speak_data_1 = "The first prediction is " + prediction_1;
  speak_data_2 = "And the second prediction is " + prediction_2;
  speak_data_3 = "And the third prediction is " + prediction_3;
  var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2 + speak_data_3);
  synth.speak(utterThis);
}


  function check()
  {
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
  }


function gotResult(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    document.getElementById("result_emotion_name").innerHTML = results[0].label;
    document.getElementById("result_emotion_name2").innerHTML = results[1].label;
    document.getElementById("result_emotion_name3").innerHTML = results[2].label;
    prediction_1 = results[0].label;
    prediction_2 = results[1].label;
    prediction_3 = results[2].label;
    speak();
    if(results[0].label == "happy")
    {
      document.getElementById("update_emoji").innerHTML = "&#128522;";
    }
    if(results[0].label == "sad")
    {
      document.getElementById("update_emoji").innerHTML = "&#128532;";
    }
    if(results[0].label == "angry")
    {
      document.getElementById("update_emoji").innerHTML = "&#128548;";
    }

    if(results[1].label == "happy")
    {
      document.getElementById("update_emoji2").innerHTML = "&#128522;";
    }
    if(results[1].label == "sad")
    {
      document.getElementById("update_emoji2").innerHTML = "&#128532;";
    }
    if(results[1].label == "angry")
    {
      document.getElementById("update_emoji2").innerHTML = "&#128548;";
    }

    if(results[2].label == "happy")
    {
      document.getElementById("update_emoji3").innerHTML = "&#128522;";
    }
    if(results[2].label == "sad")
    {
      document.getElementById("update_emoji3").innerHTML = "&#128532;";
    }
    if(results[2].label == "angry")
    {
      document.getElementById("update_emoji3").innerHTML = "&#128548;";
    }
  }
}