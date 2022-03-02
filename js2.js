var num1 = +prompt("Birinchi sonni kiriting")

while (isNaN(num1) || num1 == 0) {
    num1 = +prompt("Iltimos Birinchi songa raqam kiriting")
}
var num2 = +prompt("Ikkinchi sonni kiriting")

while (isNaN(num2) || num2 == 0) {
    num2 = +prompt("Iltimos Ikkinchi songa raqam kiriting")

}
var num3 = +prompt("Uchinchi sonni kiriting")

while (isNaN(num3) || num3 == 0) {
    num3 = +prompt("Iltimos Uchinchi songa raqam kiriting")

}
if (num1 <= num2 && num2 <= num3) {
    alert("O'rta qiymat " + num2)
}
else if (num3 <= num2 && num2 <= num1) {
    alert("O'rta qiymat " + num2)
}

else if (num1 <= num3 && num3 <= num2) {
    alert("O'rta qiymat " + num3)
}
else if (num2 <= num3 && num3 <= num1) {
    alert("O'rta qiymat " + num3)
}
else if (num3 <= num1 && num1 <= num2) {
    alert("O'rta qiymat " + num1)
}
else if (num2 <= num1 && num1 <= num3) {
    alert("O'rta qiymat " + num1)
}


