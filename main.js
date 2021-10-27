function preload() {
    
}

function setup() {
 canvas=createCanvas(400,400);
canvas.center();
video=createCapture(VIDEO);
video.size(400,400);
video.hide();
pose_load=ml5.poseNet(video,model_loaded);
pose_load.on("pose",gotresults);
}
function model_loaded() {
    console.log("model has been loaded");
}
function gotresults(error,results) {
    if (error) {
        console.log(error);
    } else {
    console.log(results);
    console.log("nose x : "+results[0].pose.nose.x);
    console.log("nose y : "+results[0].pose.nose.y);    
    }
}
function draw() {
    image(video,0,0,400,400);
}

function take_pic() {
    save('mustache_pic.png');
}