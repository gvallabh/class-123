noseX=0;
noseY=0;
difference=0;
leftWristX=0;
rightWristX=0;

function setup(){
    video= createCapture(VIDEO);
    video.size(550,500);
     
    canvas= createCanvas(550,500);
    canvas.position(560,150);

    poseNet= ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('poseNet is Initialized!');
}

function draw(){
    background('#969A97');

   document.getElementById("font_side").innerHTML="width and height of a font = "+difference+"px";

    fill('#F90093');
    stroke('#F90093');
    text("selvam",noseX,noseY);
     textSize(difference);

}

function gotPoses(results){

    if(results.length > 0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("noseX ="+ noseX +"noseY ="+ noseY);

        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        difference= floor( leftWristX - rightWristX);
       

        console.log("leftWristX ="+leftWristX +"rightWristX ="+ rightWristX +"difference ="+difference);

    }

}


