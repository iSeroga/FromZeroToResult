// const someREs = getData();
// const node = document.querySelector(".class");

// setInterval (function() {
//     if (node){
//         node.innerHTML = someREs;
//     }
// }, 1000);  

// function outer(){
//     const potenttialyHugeArr = [];
//     return function inner(){
//         potenttialyHugeArr.push('hello');
//         console.log('hekko')
//     }
// }
// const sayHello = outer();

function createElement(){
        const div = document.createElement('div');
        div.id = "test";
        document.body.append(testDiv);
}



function deleteElement(){
    document.body.removeChild(document.getElementById('test'));

}
deleteElement();