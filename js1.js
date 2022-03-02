var age = +prompt("yoshingizni kiriting")
while (age == 0) {
    age = +prompt("Iltimos boshliq yoki enterni kiritmang!!!")
}
if (age <= 0) {
    alert("Sizni mazez joyidami?")
}
else if (age <= 18) {
    alert("Yoshsiz. O'qishingiz kerek");

}
else if (age <= 50) {
    alert("Ishlashingiz kerak");

}
else if (age <= 59) {
    alert("Siz pensiyaga chiqish arafasidasiz")

}
else if (age <= 150) {
    alert("Yoshlarni duo qiling, chunki nurli insonsiz!!!")

}

else {
    if (isNaN(age)) {
        alert("Iltimos son kiriting")
    }
    else {
        alert("Unday yoshga yetishga iloji yoqkuuuu")

    }
}


