// Greatest Number
// var num1 = parseInt(prompt("Enter First Number"));
// var num2 = parseInt(prompt("Enter Second Number"));
// var num3 = parseInt(prompt("Enter Third Number"));

// if (num1 > num2 && num1 > num3)
//     console.log(`${num1} is greatest`);
// else if (num2 > num1 && num2 > num3)
//     console.log(`${num2} is greatest`);
// else if (num3 > num1 && num3 > num2)
//     console.log(`${num3} is greatest`);

function greatestNumber() {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var num3 = parseInt(document.getElementById("num3").value);
    var node;
    if (num1 > num2 && num1 > num3) {
        node = document.createElement("p");
        node.innerHTML = `${num1} is greatest`;
        document.getElementById("Answer1").appendChild(node);
    } else if (num2 > num1 && num2 > num3) {
        node = document.createElement("p");
        node.innerHTML = `${num2} is greatest`;
        document.getElementById("Answer1").appendChild(node);
    } else if (num3 > num1 && num3 > num2) {
        node = document.createElement("p");
        node.innerHTML = `${num3} is greatest`;
        document.getElementById("Answer1").appendChild(node);
    }
    document.getElementById("num1").value = null;
    document.getElementById("num2").value = null;
    document.getElementById("num3").value = null;
}

function evenOdd() {
    var num = document.getElementById("eo").value;
    if (num % 2 == 0) {
        var node = document.createElement("p");
        node.innerHTML = "Even : " + num;
        document.getElementById("Answer2").appendChild(node);
    }
    else {
        var node = document.createElement("p");
        node.innerHTML = "Odd : " + num;
        document.getElementById("Answer2").appendChild(node);
    }
    document.getElementById("eo").value = null;
}

function reverse() {
    var rev = document.getElementById('rev').value;
    var a = "";
    for (var i = rev.length - 1; i >= 0; i--) {
        a = a + rev.charAt(i);
    }
    var node = document.createElement("p");
    node.innerHTML = a;
    document.getElementById("Answer3").appendChild(node);
    document.getElementById('rev').value = null;

}

function palindrome() {
    var pal = document.getElementById("pal").value;
    console.log(pal)
    var node;
    var a = "";
    for (var i = pal.length - 1; i >= 0; i--) {
        a = a + pal.charAt(i);
    }
    console.log(a);

    if (pal == a) {
        node = document.createElement("p");
        node.innerHTML = `${pal} is a palindrome`
        document.getElementById("Answer4").appendChild(node);
        document.getElementById("pal").value = null;
    }
    else {
        node = document.createElement("p");
        node.innerHTML = `${pal} is not a palindrome`
        document.getElementById("Answer4").appendChild(node);
        document.getElementById("pal").value = null;
    }

}

arr = ['milk', 'Bread', 'Chocolate', 'peanut Butter', 'Pasta'];
console.log(arr);
console.log(arr.reverse());
console.log(arr[3]);;
delete arr[2];
console.log(arr);

arr1 = [1, 2, 3, 4, 5, 6];
console.log(arr1);
arr1.pop(2);
console.log(arr1);

function grades() {
    arr = [];
    a1 = "Karan";
    a2 = 23;
    for (var i = 0; i < 1; i++) {
        arr[i] = [a1, a2, "Hi"];
    }
    console.log(arr);
}

grades();