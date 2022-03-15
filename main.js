nosex=0;
nosey=0;

difference=0;

leftWristx=0;
rightWristy=0;

function setup()
{
    video=createCapture(VIDEO);
    video.size(580,500);

    canvas=createCanvas(550,550);
    canvas.position(600,100);

    poseNet=ml5.poseNet(video,modelLoaded());
    poseNet.on('pose',gotPoses);
}

function draw()
{
background('#969A97');
document.getElementById("square_side").innerHTML="Width and Height of the square will be"+difference+"px";
fill('#F90093');
stroke('#F90093');

square(nosex,nosey,100);
}

function modelLoaded()
{
    console.log('Posenet is Initialised');
}

function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        nosex=results[0].pose.nose.x;
        nosey=results[0].pose.nose.y;

        console.log("nosex="+nosex+"nosey="+nosey);

        rightWristx=results[0].pose.rightWrist.x;
        leftWristx=results[0].pose.leftWrist.x;
        
        difference=floor(leftWristx-rightWristx);
        console.log("leftWristx="+leftWristx+"rightWristx="+rightWristx+"difference="+difference);
        
    }
}





