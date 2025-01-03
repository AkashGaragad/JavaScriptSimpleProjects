let random_num=Math.random()

let a=prompt("enter the first number : ")

let c=prompt("Enter operation: ")

let b=prompt("enter the second number: ")

let Faulty={
    "+":"-",
    "*":"/"
}

if(random_num>0.1){
    alert(`the result is :${eval(`${a} ${c} ${b}`)}`) 
}

else{
    c=Faulty[c]
    alert(`the result is :${eval(`${a} ${c} ${b}`)}`)
}

// or 

if(random_num>0.1){

    console.log("addition is: "+ a+b);
    console.log("substraction is: "+ a-b);
    console.log("multiple is: "+ a*b);
    console.log("division is: "+ a/b);

}

else{
    console.log("addition is: "+ a+b);
    console.log("traction is: "+ a-b);
    console.log("multiple is: "+ a*b);
    console.log("division is: "+ a/b);
}