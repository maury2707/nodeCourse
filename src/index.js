function sum(value1 = 1, value2 = 2){
    return value1 + value2;   
}

function callback_Example(value1, value2, callback){
    return callback(value1, value2);
}

function greetings(name){
    console.log(`Hola ${name}`);
}

setTimeout(greetings, 5000, "Vanne");

setTimeout(function(){
    console.log("This is a call back function");
},2000 )

console.log(callback_Example(2,7, sum));