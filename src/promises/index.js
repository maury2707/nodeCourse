const typeMap = new Map();

typeMap.set("water", { weak_against : "grass", strong_against: "fire"});
typeMap.set("grass", { weak_against : "fire", strong_against: "water"});
typeMap.set("fire", { weak_against : "water", strong_against: "grass"});

const fight = (fighter1, fighter2) => typeMap.get(fighter1).strong_against === fighter2? 
    true: false;

const pokeFight = new Promise (function (resolve, reject){
    if (fight("water", "grass")){
        resolve("We Won :3");
    }else{
        reject("We Lose :c");
    }
});

pokeFight.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log("Resolved");
})