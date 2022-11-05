'use strict';

const data = [
    {
        id: 'box',
        tag: 'div'
    },
    {
        id: 'asd',
        tag: 'nav'
    },
    {
        id: 'circle',
        // tag: 'span'
        tag:""
    }
]

try{
    data.forEach((blockObj, i) => {
        const block = document.createElement(blockObj.tag);
    
        if(!blockObj.id) throw new Error(`in data under number ${i + 1 } no id`);
        block.setAttribute('id', blockObj.id);
        document.body.append(block);
    })
}catch (e) {
   if(e.name === 'SyntaxError') {
    console.log(e.message);
   }else throw e;
}

const err = new Error("malsmdlasm");
console.log(err.name, err.message, err.stack);