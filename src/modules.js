
 const entries = [
    {entry:'jebac maniaka',
       category:'slogan'
},
    {entry:'w pustyni i w pizdzie',
category:'ksiazka'
},
    {entry:'zbigniew stwonka',
    category:'postac'
},
    {entry:'cegla chuj',
    category:'cegla'
},
   {entry:'pies',
    category:'zwierze'
},

]
let pickEntry = () => { return Math.floor(Math.random()*10) % entries.length}

export const drawEntry = () => {return entries[pickEntry()]};


export const renderText= (div,text,DOMList) => {
    const domElem = document.createElement('p');
    domElem.innerText = `${text}`;
    DOMList[`${div}`].appendChild(domElem);
}


