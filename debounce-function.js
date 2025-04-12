function debounceFunction(func, delay) {
    let timer;
    return function (...args){
        clearTimeout(timer);
        timer = setTimeout(() => {func(...args)}, delay)
    }
}

const call = () => {
    console.log("implemented custom debounce");
}

const debounce = debounceFunction(call, 2000);

debounce();
debounce();