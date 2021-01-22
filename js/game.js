class game{
    constructor(){

    }
getState(){
    var gameStateref = Database.ref("GameState")
    gameStateref.on("value",function(data){
        GameState = data.val();
    })
}
update(state){
    Database.ref("/").update({
        GameState: state
    })
}
start(){
    if(GameState === 0){
        Player = new player()
        Player.getCount()
        Form = new form()
        Form.display()
    }
}
}