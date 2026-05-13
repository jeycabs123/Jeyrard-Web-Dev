function to2(n) {
    return (n).toFixed(2)
}

function calculate() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("sum").innerHTML = "Please enter valid numbers.";
        return;
    }

    const sum = to2(num1 + num2);
    const difference = to2(num1 - num2);
    const product = to2(num1 * num2);
    
    // division by zero error
    const quotient = (num2 === 0) ? "Invalid Operation (Div by 0)" : to2(num1 / num2);
    const remainder = (num2 === 0) ? "Invalid Operation (Div by 0)" : to2(num1 % num2);

    document.getElementById("sum").innerHTML = "The sum is: " + sum;
    document.getElementById("difference").innerHTML = "The difference is: " + difference;
    document.getElementById("product").innerHTML = "The product is: " + product;
    document.getElementById("quotient").innerHTML = "The quotient is: " + quotient;
    document.getElementById("remainder").innerHTML = "The remainder is: " + remainder;
}

function clearFields() {
    document.getElementById("sum").innerHTML = "";
    document.getElementById("difference").innerHTML = "";
    document.getElementById("product").innerHTML = "";
    document.getElementById("quotient").innerHTML = "";
    document.getElementById("remainder").innerHTML = "";
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
}