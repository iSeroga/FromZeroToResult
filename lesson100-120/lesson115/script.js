'use strict'

setTimeout(() => console.log('timeout'));

Promise.resolve()
    .then(() => console.log("promise"));

queueMicrotask(() => console.log("message"));

Promise.resolve()
    .then(() => console.log("promise2"));

    console.log('code');

    // () =>{}
    // microtasks then /catch /finally /await
    // render (page)
    // () => {}
    // micro
    // render
    //() => {}    // macrotask