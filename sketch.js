var Canvas, backgroundImg;
var GameState = 0;
var PlayerCount;
var Database;
var Form, Player, Game

function setup(){
  Canvas = createCanvas(400,400)
  Database = firebase.database()

  Game = new game()
  Game.getState()
  Game.start()
}

function draw(){
  
}