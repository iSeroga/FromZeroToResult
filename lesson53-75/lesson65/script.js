const btn = document.querySelector('.btn');
let timerId,
    i = 0;

    function myAnimetion() {
        const elem = document.querySelector('.box');
        let pos = 0;

        const id = setInterval(frame, 10);
        function frame(){
            if (pos == 300){
                clearInterval(id);
            }else{
                pos++;
                elem.style.top = pos + 'px';
                elem.style.left = pos + 'px';
            }
        }
    }
    btn.addEventListener('click', myAnimetion)

// btn.addEventListener('click', ()=> {
//     // const timerId = setTimeout(logger, 2000)// Syntaxis setTimeout (doing(function) , time in mls(milisecond), new text )
    
//      timerId = setInterval(logger, 2000)
// });


// clearInterval(timerId); // Her we have dropper



// function logger() {
//     if (i === 3){
//       clearInterval(timerId)  
//     }
//     console.log("KAkoito text")
//     i++;
// }

// let id = setTimeout(function log(){
//     console.log('hello');
//     id = setTimeout(log, 500);
// }, 500)
