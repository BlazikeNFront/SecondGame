 "use strict"
 
 import {grabDomElem} from '/src/linkDOMElem.js'
 
 import {drawEntry} from '/src/modules.js'
 import {renderText} from '/src/modules.js'
 
 
 class HangmanGame {
     constructor (){
         this.domElements = grabDomElem();
         this.check();
         this.playerLife = 7;
         this.lifebar();
       
         this.renderLetters();
         this.renderHintwithQuote();
     }

     

    check = () => {}

    lifebar = () => {
        this.domElements['playerLife'].innerText = `${this.playerLife}`;

    }
    renderLetters = () => {
        for (let i = 10;i<36;i++){
            const letter = i.toString(36);
            const button = document.createElement('button');
            button.value = letter;
            button.innerText = letter;
            this.domElements['letters'].appendChild(button)
        }
    }

    renderHintwithQuote = ()=> {
        const {entry,category} = drawEntry()
        renderText('quoteDiv',entry,this.domElements);
        renderText('categoryHint',category,this.domElements);
    }
    
 }



 document.addEventListener('DOMContentLoaded',()=> {
     new HangmanGame();
     
 })