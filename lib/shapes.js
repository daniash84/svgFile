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
class circle extends shape{
    constructor (color){
        super(color)
    }
    create(){
        return ` <circle cx="150" cy="100" r="80" fill="${this.color}"/>`
    }
}
class rectangle extends shape{
    constructor (color){
        super(color)
    }
    create(){
        return ` <polygon points="200,10 250,190 160,210" fill="${this.color}"/>`
    }
}
{
<svg height="60" width="200">
<text x="0" y="15" transform="rotate(30 20,40)">${this.text}</text>
</svg>
}

const shape = 'svg';
switch (shape) {
    
}