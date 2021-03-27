function preload(){

}

function setup(){
    canvas = createCanvas(450, 350);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(450, 350);
    video.hide();
}

function draw(){
    image(video, 0, 0, 450, 350);
}

function take_snapshot(){
    save('Mustache Filter Picture.png');
}