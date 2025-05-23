const fnAsync = () => {
    return new Promise ((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Async!!'), 2000) 
            : reject(new Error('Error!!'));
    })
}

const fnAwait = async () => {
    const waiting = await fnAsync();
    console.log(waiting);
    console.log("Wenas nosheeees!"); 
}

console.log("Before everithng!");
fnAwait();
console.log("The last line of all!");