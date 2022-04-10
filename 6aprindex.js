function checkMinNumber(num1, num2, num3) {
    if (num1 < num2) {
        if (num1 < num3) {
            console.log("minimum number is", num1);
        } else {
            console.log("minimum number is", num3);
        }
    } else {
        if (num2 < num3) {
            console.log("minimum number is", num2);
        } else {
            console.log("minimum number is ", num3);
        }
    }
}

checkMinNumber(555, 987, 1257);