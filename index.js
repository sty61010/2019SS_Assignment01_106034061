//Set canvas
//Varible
var c = document.getElementById('canvas');
var ctx = c.getContext("2d");
var backgroundcolor="#0000e6";
var brushcolor="#ffffff"
var brushwide=12;
var brushmode="Pen";

//Save
$("#save_by_web").click(function() {
  var html = " ";
  html += "<img src='" + c.toDataURL() + "' alt='from canvas'/>";
  var pageStyle = "<style>body{margin:0; padding: 0;}</style>";
  var tab = window.open();
  tab.document.write(html + pageStyle);
  console.log("Save by Web");
});
$('#save_by_dl').on('click', function(){
  var _url = canvas.toDataURL();
  this.href = _url;
  console.log("Save by Dl");
});
//Canvas
$('canvas').click(function(){
   // $('h1').hide();
});
$('h1').click(function(){
   $('h1').hide();
  console.log("h1");
});
//Clear canvas
$("#clear").click(function() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
	setCanvasBG(); 
  $('h1').show();
  console.log("Clear");
});
//Eraser
$("#eraser").click(function() {
  brushcolor=backgroundcolor;
  document.getElementById("canvas").style.cursor="pointer";
  brushmode="Eraser";
  console.log("Eraser");
});
$("#pen").click(function() {
  brushcolor="white";
  brushmode="Pen";
  document.getElementById("canvas").style.cursor="progress";
  console.log("Pen");
});
//Style
$('#style_1').click(function(){
  backgroundcolor= "#ff80ff";
  brushcolor="#ffffff";
  $('h1').text("<<Pink Bubble>>");
  console.log("style_1");
  setCanvasBG(); 
});

//Brush
$('#brush_very_thin').click(function(){
  console.log("brush_very_thin");
  brushwide=4;
  // setCanvasBG(); 
});
$('#brush_thin').click(function(){
  console.log("brush_thin");
  brushwide=12;
  // setCanvasBG(); 
});
$('#brush_mid').click(function(){
  console.log("brush_mid");
  brushwide=24;
  // setCanvasBG(); 
});
$('#brush_thick').click(function(){
  console.log("brush_thick");
  brushwide=48;
  // setCanvasBG(); 
});
$('#brush_very_thick').click(function(){
  console.log("brush_very_thick");
  brushwide=128;
  // setCanvasBG(); 
});

//Brush Color
$('#black').click(function(){
  console.log("black");
  brushcolor="#000000";
  // setCanvasBG(); 
});
$('#purple').click(function(){
  console.log("purple");
  brushcolor=" #9933ff";
  // setCanvasBG(); 
});
$('#green').click(function(){
  console.log("green");
  brushcolor="#66ff33";
  // setCanvasBG(); 
});
$('#yellow').click(function(){
  console.log("yellow");
  brushcolor="yellow";
  // setCanvasBG(); 
});
$('#red').click(function(){
  console.log("red");
  brushcolor="red";
  // setCanvasBG(); 
});

//Background Color;
$('#bg_black').click(function(){
  backgroundcolor= "black";
  console.log("bg_black");
  setCanvasBG(); 
});
$('#bg_purple').click(function(){
  backgroundcolor= "#9933ff";
  console.log("bg_purple");
  setCanvasBG(); 
});
$('#bg_green').click(function(){
  backgroundcolor= "#66ff33";
  console.log("bg_green");
  setCanvasBG(); 
});
$('#bg_yellow').click(function(){
  backgroundcolor= "yellow";
  console.log("bg_yellow");
  setCanvasBG(); 
});
$('#bg_red').click(function(){
  backgroundcolor= "red";
  console.log("bg_red");
  setCanvasBG(); 
});

//Undo and Redo
var cPushArray = new Array();
// cPushArray.length=10000;
var cStep = -1;
// var ctx;
// ctx = document.getElementById('myCanvas').getContext("2d");
     
function cPush() {
  cStep++;
  if (cStep < cPushArray.length) { cPushArray.length = cStep; }
  cPushArray.push(c.toDataURL());
  console.log("cPush:",cStep);
  // console.log(cStep);
}
$('#undo').click(function(){
    if (cStep > 0) {
        cStep--;
        var canvasPic = new Image();
        canvasPic.src = cPushArray[cStep];
        canvasPic.onload = function () { ctx.drawImage(canvasPic, 0, 0); }
        // ctx.drawImage(canvasPic, 0, 0);
    }  
  console.log("undo:",cStep);
  // setCanvasBG(); 
});  
$('#redo').click(function(){
    if (cStep < cPushArray.length-1) {
        cStep++;
        var canvasPic = new Image();
        canvasPic.src = cPushArray[cStep];
        canvasPic.onload = function () { ctx.drawImage(canvasPic, 0, 0); }
        // ctx.drawImage(canvasPic, 0, 0);
    }
  console.log("redo",cStep);
  // setCanvasBG(); 
});
//Text Input
var nameBuffer = '';

$('#text').click(function(){
  document.getElementById("canvas").style.cursor="text";
  brushmode="Text";
  console.log("Text");
  // text(lastX,lastY);
  ctx.fillStyle = "white";
  var input=$("#text_input").val();
  console.log("Text Input:",input);
  ctx.fillText(input,lastX,lastY);
  nameBuffer="";
});

function text(x,y) {
  ctx.textAlign = "left";
  ctx.font = "2em orbitron";
  ctx.textBaseline = "middle";
  ctx.maxWidth = 500;
  ctx.fillStyle = "transparent";
  ctx.clearRect(x,y, 200, 50);
  ctx.fillText(nameBuffer, x, y);
}

// $(document).ready(function() {
//   $(document).keydown(function(e) {
//     var keycode = parseInt(e.which);
//     //delete or backspace
//     if (keycode == 46 || keycode == 8) {
//       event.preventDefault(); //prevent back navigation from backspace
//       nameBuffer = nameBuffer.slice(0,nameBuffer.length-1);
//       text(lastX, lastY);}
//   });
//   $(document).keypress(function(e) {
//     var keycode = parseInt(e.which);
//     if (nameBuffer.length < 10)
//       nameBuffer += String.fromCharCode(keycode);
//     text(lastX, lastY);
//   });
// });
// text(lastX,lastY);

//Shape

//Imager Upload
$('#image').click(function(){
  var src=document.getElementById("text_input").value
  var canvasPic = new Image();
  canvasPic.src = src;
  console.log("src=",src);
  // canvasPic.onload = function () { ctx.drawImage(canvasPic, lastX, lastY); }
  canvasPic.onload = function () { ctx.drawImage(canvasPic, 0, 0); }
  console.log("Image Upload");
  // setCanvasBG(); 
  // cPush();
});  







//Control Canvas
// window.addEventListener('resize', resizeWindow);
// document.addEventListener('mousemove', draw);
// document.addEventListener('mousedown', setPosition);
// document.addEventListener('mouseenter', setPosition);

// Default position
var DefaultPos = {x:0, y:0};

//new mouse event position
function setPosition(e){
	DefaultPos.x = e.clientX;
	DefaultPos.y = e.clientY;
}
function setCanvasBG(){
	ctx.beginPath();
  cPush();
  ctx.rect(0, 0, c.width, c.height );
  ctx.fillStyle = backgroundcolor;
  ctx.fill();
  
}
//window resize
function resizeWindow(){
	c.width  = window.innerWidth;
	c.height = 450;
  setCanvasBG();  
  $('h1').show();
}

//drawing canvas object 
// function draw(e){
//   //left click define
//   if (e.buttons !== 1) return;
 
// 	ctx.beginPath(); //path begin
//   ctx.lineWidth = brushwide;
//   ctx.lineCap = 'round';
//   ctx.strokeStyle = brushcolor;
//   ctx.moveTo(DefaultPos.x, DefaultPos.y);
//   setPosition(e);
//   ctx.lineTo(DefaultPos.x, DefaultPos.y);
//   ctx.stroke();
// }
resizeWindow();  
//initialise canvas items


var mousePressed = false;
var lastX, lastY;
function InitThis() {
    $('#canvas').mousedown(function (e) {
        mousePressed = true;
        Draw(e.pageX - $(this).offset().left, e.pageY - $(this).offset().top, false);
        // cPush();
    });
    $('#canvas').mousemove(function (e) {
        if (mousePressed) {
            Draw(e.pageX - $(this).offset().left, e.pageY - $(this).offset().top, true);
          }
    });
    $('#canvas').mouseup(function (e) {
        mousePressed = false;
        // cPush();
    });
    $('#canvas').mouseleave(function (e) {
        mousePressed = false;
    });
}
function Draw(x, y, isDown) {
    if (isDown) {
        ctx.beginPath();
        ctx.strokeStyle = brushcolor;
        ctx.lineWidth = brushwide;
        ctx.lineCap = "round";
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(x, y);
        ctx.closePath();
        ctx.stroke();
        // cPush();
    }
    else
      cPush();
    lastX = x; lastY = y;
    console.log("lastX=",x,", lastY=",y);
}
InitThis();