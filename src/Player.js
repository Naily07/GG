
class Player{
    constructor(id, deplacement, classPlayer, clicable, arrayPosition){
        this.id = id
        this.deplacement = deplacement
        this.class = classPlayer
        this.clicable = clicable
        this.active = false
        this.currentPosition = 0
        this.position = arrayPosition
        this.activeBouton = "1"
        this.numberBouton = 0
    }
    
}

export default Player