
// access to DOMElement by syntax domElements["data-grab-attribute"]


export const grabDomElem = () => {
    const domElements = {};
   
    const listOfAttributes =()=>{ Array.from(document.querySelectorAll('[data-grab]')).forEach(element => {
        
        domElements[element.dataset.grab] = document.querySelector(`[data-grab ='${element.dataset.grab}']`)
    })};

    listOfAttributes();

    return domElements;



}