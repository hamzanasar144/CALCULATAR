

function sum(){
    let num1 = Number(document.getElementById("num1").value)
    let num2 = Number(document.getElementById("num2").value)

    document.getElementById("nameContainer").innerText = num1 + num2;
}

function minus(){
    let num1 = Number(document.getElementById("num1").value)
    let num2 = Number(document.getElementById("num2").value)

    document.getElementById("nameContainer").innerText = num1 - num2;
}
function multiply(){
    let num1 = Number(document.getElementById("num1").value)
    let num2 = Number(document.getElementById("num2").value)

    document.getElementById("nameContainer").innerText = num1 * num2;
}
function divide(){
    let num1 = Number(document.getElementById("num1").value)
    let num2 = Number(document.getElementById("num2").value)

    document.getElementById("nameContainer").innerText = num1 / num2;
}