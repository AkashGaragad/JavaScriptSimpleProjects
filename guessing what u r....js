let rand = Math.random()
let first,second,third;
let one=prompt("Check what you are: ");

if (rand<0.33){
    first=one;
}
else if(rand<0.66 && rand>0.33){
    first=one;
}
else{
    first=one;
}

 rand = Math.random()
if (rand<0.33){
    second="amazing";
}
else if(rand<0.66 && rand>0.33){
    second="crazy";
}
else{
    second="talente";
}

 rand = Math.random()
if (rand<0.33){
    third="person";
}
else if(rand<0.66 && rand>0.33){
    third="guy";
}
else{
    third="human";
}
console.log(` ${first} ${second} ${third}`);
let your=alert( `${first} is ${second} ${third}`);
