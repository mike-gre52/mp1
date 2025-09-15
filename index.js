let one=document.getElementById("one");
let two=document.getElementById("two");
let output=document.getElementById("output");
function doAdd(){
    output.innerHTML = "= " + String(Number(one.value) + Number(two.value));
}

function doSub(){
    output.innerHTML = "= " +String(Number(one.value) - Number(two.value));
}

function doMultiply(){
    output.innerHTML = "= " + String(Number(one.value) * Number(two.value));
}

function doDivide(){
    output.innerHTML = "= " +String(Number(one.value) / Number(two.value));
}

function doPower(){
    let result = Number(one.value)
    for (let i =0; i < Number(two.value) - 1; i++) {
        result *= one.value
        console.log(result)
    }
    console.log(result)
    output.innerHTML = "= " + String(result);
}

function doClear(){
    one.value = String("")
    two.value = String("")
    output.innerHTML = String("")
}