//touchstart  -  при дотику виконує подію
// touchmove - по дотику спрацьовує
// touchend - по натиску закінчує
// touchenter - спрацьовює коли ведем пальцем по екрану (зайшов на територію )
//touchleave по схлжєенню з елементу
// touchcancel якщо палець вийде за межі екрану

window.addEventListener('DOMContentLoaded', () =>{
    const box = document.querySelector('.box');

    box.addEventListener('touchstart', (e) =>{
        e.preventDefault();
        
        console.log('start');
    });

    box.addEventListener('touchmove', (e) =>{
        e.preventDefault();
        
        console.log('move');
    });

    box.addEventListener('touchend', (e) =>{
        e.preventDefault();
        
        console.log('end');
    });
    
});
// touches - Всі пальці на екрані number of
//targetTouches - all fingers with concrate object (number)
//changedTouches - list of fingers with made movement 
// Chech web page Hummer.js For (7kb) wil do evry hard things woth swipers