const typeMap = new Map();

typeMap.set("water", { weak_against : "grass", strong_against: "fire"});
typeMap.set("grass", { weak_against : "fire", strong_against: "water"});
typeMap.set("fire", { weak_against : "water", strong_against: "grass"});

function print_type(){
    console.log(typeMap.get("fire"));
}

print_type();
/*
function figth(type, enemy_type){
    return null;
}

/* const pokeType = new Promise (function (resolve, reject){
    if (enemy_type)
});