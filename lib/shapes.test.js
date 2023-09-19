const {Shape, Circle, Square, Triangle} = require("./lib/assets/shapes.js")



test ('should set the color to red if we provide a background_color of red', () => {
    const shape = new Circle("red", "green","LOL");
    expect(shape.fill).toEqual("red")
    
});

test ('should set the color to red if we provide a background_color of red', () => {
    const shape = new Triangle("red", "green","LOL");
    expect(shape.fill).toEqual("red")
    
});

test ('should set the color to green if we provide a text of green', () => {
    const shape = new Square("red", "green","LOL");
    expect(shape.textColor).toEqual("green")
    
});

