Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});

camera=document.getElementById("camera");
Webcam.attach('#camera');
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='capture_image' src='"+data_uri+"' >";

    });

}
console.log('ml5 version',ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/kPxLb4JB3/model.json",modelloaded);
function modelloaded(){
    console.log("model loaded");
}
function chack()
{
    img=document.getElementById('capture_image');
    classifier.classify(img,gotresult)

}
function gotresult(error,results)
{
if(error)
{
    console.error(error);
}
else {
    console.log(results);
    document.getElementById("resultobjectname").innerHTML=results[0].label;
    document.getElementById("resultobjectaccuracy").innerHTML=results[0].confidence.toFixed(3);
    
    
}

}
