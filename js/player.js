class player{
    constructor(){

    }
getCount(){
    var playerCountref = Database.ref("PlayeCount")
    playerCountref.on("value",function(data){
        PlayerCount = data.val();
    })
}

updateCount(count){
    Database.ref("/").update({
        PlayerCount: count
    })
}
update(Name){
    var playerIndex = "Player" +PlayerCount
    Database.ref(playerIndex).set({
       Name: Name 
    })
}
}
