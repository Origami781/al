x=0
y=0
draw_circ=''
apple="apple.jpg"
var SpeechRecognition = window.webkitSpeechRecognition
var recognition = new SpeechRecognition()
function start(){
document.getElementById('status').innerHTML = "The system is listening say the word apple."    
recognition.start()
}
recognition.onresult = function(event){
console.log(event)    
var content = event.results[0][0].transcript
document.getElementById('status').innerHTML= 'The speech has been recognized as: '

if(content == "Apple"){
x=Math.floor(Math.random()*900)  
y=Math.floor(Math.random()*600)  
document.getElementById('status').innerHTML="System has started drawing apple"
draw_circ="set"
}
}
function setup(){
canvas=createCanvas(900, 600)  
}
function draw(){
if(draw_circ == "set"){
image(apple, x, y, 60, 60)
document.getElementById("status").innerHTML="Apple has been drawn"  
draw_circ=''
}    
}
function preload(){
apple=loadImage("apple.jpg")
}
