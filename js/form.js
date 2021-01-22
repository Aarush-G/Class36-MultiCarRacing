class form{
constructor(){

}
display(){
    var title = createElement("h2")
    title.html("Multi Car Racing Game")
    title.position(100,0)
    var input = createInput("Name")
    var button = createButton("Play")
    var greeting = createElement("H3")
    input.position(130,160)
    button.position(250,200)
    button.mousePressed(function(){
        input.hide()
        button.hide()
    var Name = input.value()
    PlayerCount = PlayerCount+1
    Player.update(Name)
    Player.updateCount(PlayerCount)
    greeting.html("Hello "+Name)
    greeting.position(130,160)

    })
}

}
