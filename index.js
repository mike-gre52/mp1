// HTML Elements accessed through DOM
let one=document.getElementById("one");
let two=document.getElementById("two");
let output=document.getElementById("output");

// Add Function
function doAdd(){
    output.innerHTML = "= " + String(Number(one.value) + Number(two.value));
}

// Subtract Function
function doSub(){
    output.innerHTML = "= " +String(Number(one.value) - Number(two.value));
}

// Multiply Function
function doMultiply(){
    output.innerHTML = "= " + String(Number(one.value) * Number(two.value));
}

// Divide Function
function doDivide(){
    output.innerHTML = "= " +String(Number(one.value) / Number(two.value));
}

// Power Function
function doPower(){
    let result = Number(one.value)
    for (let i =0; i < Number(two.value) - 1; i++) {
        result *= one.value
        console.log(result)
    }
    console.log(result)
    output.innerHTML = "= " + String(result);
}

// Clear Function
function doClear(){
    one.value = String("")
    two.value = String("")
    output.innerHTML = String("")
}