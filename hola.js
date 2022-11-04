function preload(){


}function setup(){
canvas=createCanvas(300,300);canvas.position(110,280);
video=createCapture(VIDEO);video.hide();filter="";
}
function draw(){
    image(video,00,0,300,300);
    tint(filter);
}
function take_snapshot(){
    save('hola.png')
}
function filter_tint(){
    filter=document.getElementById("color_name").value;
}









