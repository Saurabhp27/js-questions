function throttlingFunction (func, delay) {
    let prev = 0;
    return function (...args){
        let now = Date.now();
        if(now -prev > delay){
            func(...args)
            prev = now;
        } 
    }
}

const call = () => {
    console.log("Implement custom throttling function");
}

const throttling = throttlingFunction(call, 1000);

throttling();
throttling();