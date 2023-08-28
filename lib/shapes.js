class shape {
    constructor (color){
        this.color = color
    }
}
class triangle extends shape {
    constructor (color){
       super(color) 
    }
    create(){
        return ` <polygon points="200,10 250,190 160,210" fill="${this.color}"/>`
    }
}