const fs = require('fs')
const inquirer = require('inquirer');
const pic = require('./lib/svg.js') ;
const SVG = pic;

const {characters, text_color, shape_choice, background_color} = 

    inquirer.prompt([
        {
            type: 'list',
            name: 'shape_choice',
            message: 'Please select a shape',
            choices: ['circle', 'square', 'triangle']
        },
        {
            type: 'input',
            name: 'characters',
            message: 'Please type three characters that you would like to see appear in your shape'
                       
        },    
        {
            type: 'input',
            name: 'text_color',
            message: 'Please provide a color for your text'
        },        
        {
            type: 'input',
            name: 'background_color',
            message: 'Please provide a background color'
        },
    
            
])
.then(answers => {
    console.log(answers);
    return answers;
})
    

        let example = new SVG(`${background_color}`, `${text_color}`, `${characters}`, `${shape_choice}`);
function writeFile() {
        fs.writeFile("logo.svg", example.shape, function(err){
            if(err)
            console.log(err)
        })


    function init () {
        {
            characters,
            text_color,
            shape_choice,
            background_color}
    }
         console.log("Generated 'logo.svg");
         };
        
      init();
    
    