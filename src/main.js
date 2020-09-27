 "use strict"
 
 import {grabDomElem} from '/src/linkDOMElem.js'
 
 import {drawEntry} from '/src/modules.js'
 import {renderText} from '/src/modules.js'
 
 
 class HangmanGame {
     constructor (){
         this.domElements = grabDomElem();
         let quote;
         let hiddenQuote;
         this.playerLife = 7;
         this.lifebarUpdate();
         this.pickQouteAndRender();
         this.renderLetters();
         
     }

     

    

    lifebarUpdate = () => {
        this.domElements['playerLife'].innerText = `${this.playerLife}`;

    }
    renderLetters = () => {
        for (let i = 10;i<36;i++){
            const letter = i.toString(36);
            const button = document.createElement('button');
            button.value = letter;
            button.innerText = letter;
            button.addEventListener('click', this.checkLetter)
            
            this.domElements['letters'].appendChild(button)
            
        }
    }
    pickQouteAndRender = () => {
        const {entry,category} = drawEntry()
        this.quote = entry.split('');
       
        renderText('quoteDiv',entry.replace(/[a-z]/gi,'_'),this.domElements);
        renderText('categoryHint',category,this.domElements);
        this.domElements = grabDomElem();
        this.hiddenQuote = entry.replace(/[a-z]/gi,'_').split('');
        
    }
    
    
    checkLetter = () => {
        event.srcElement.disabled = true;
        let letterFound = false;
        const checkLetter = event.srcElement.innerText;
        
        for (let i=0; i<this.quote.length;i++){
            
        if(this.quote[i] === checkLetter){
            letterFound = true;
            this.hiddenQuote[i] = checkLetter;
           
            this.domElements['quote'].innerText = this.hiddenQuote.join('');
        }
       }
       
        if(!this.hiddenQuote.includes('_')){
            const winInfo = () => {this.domElements['quote'].innerText = 'WYGRALES'};
            setTimeout( winInfo, 500);
       }
         if(letterFound === false){
        this.playerLife--;
        this.lifebarUpdate();
         }
        if(this.playerLife === 0){
        const loseInfo = () => {this.domElements['quote'].innerText = 'PRZEGRAŁES'};
        setTimeout( loseInfo, 500);
     }

    }
    eventListeners = () => {
       // const buttons
    }

 }



 document.addEventListener('DOMContentLoaded',()=> {
     new HangmanGame();
     
 })