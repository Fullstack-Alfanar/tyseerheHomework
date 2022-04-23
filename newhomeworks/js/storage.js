let saveit = document.getElementById("save");
let loadit = document.getElementById("load");
let mail = document.getElementById("email");
//-----------------------------------------
let saveit1 = document.getElementById("save1");
let loadit1 = document.getElementById("load1");
let Phone = document.getElementById("tel");
//------------------------------------------
let myname = document.getElementById("name");
let Phone1 = document.getElementById("mytel");
let mail1 = document.getElementById("myEmail");
let btn = document.getElementById("save2");
//--------------------------------------------------------------------
let txt = document.getElementById("text");
let btn1 = document.getElementById("save3");
let btn2 = document.getElementById("search");
//--------------------------------------------------------------------
saveit.addEventListener("click", mysave);
loadit.addEventListener("click", myload);
//------------------------------------------
saveit1.addEventListener("click", mysave1);
loadit1.addEventListener("click", myload1);
//-------------------------------------------
btn.addEventListener("click", mysave2);
//-------------------------------------------
btn1.addEventListener("click", mysave3);
btn2.addEventListener("click", searching);

function mysave() { //for question 1
    document.cookie = mail.value;
    console.log(document.cookie);

}

function myload() {//for question 1

    alert(mail.value);
}
//------------------------------------------

function mysave1() { //for question 2
    document.cookie = Phone.value;
    console.log(document.cookie);
}

function myload1() {//for question 2
    alert(Phone.value);
}

//-----------------------------------------
//question 3
let arr = typeof Array;
let Name = "";
let phone;
if (localStorage.getItem("myData") != null) {
    arr = JSON.parse(localStorage.getItem("myData"));
}
else {
    arr = [];
}

function mysave2() {//for question 3
    if (
        myname.value.length > 2 && myname.value.length < 30 ||
        Phone1.value.length > 2 && Phone1.value.length < 30 ||
        mail1.value.length > 2 && mail1.value.length < 30
    ) {
        let y = {
            Name: myname.value,
            Phone: Phone1.value,
            Email: mail1.value,
        };
        arr.push(y);

        localStorage.setItem("Name", JSON.stringify(myname.value));
        localStorage.setItem("phone", JSON.stringify(Phone1.value));
        localStorage.setItem("myData", JSON.stringify(arr));
        console.log(`The Name is ${myname.value}`);
        console.log(`The phone number is ${Phone1.value}`);
        console.log(arr);
    }
    else {
        alert("it has to be between 2 and 30!");
    }
}

//question 4
let arr1 = [];
function mysave3() {
    if (txt.value != "" || txt.value != null) {
        arr1.push(txt.value);
        localStorage.setItem("local", JSON.stringify(arr1));
    }
}

function searching() {
    if (localStorage.getItem("local") === null) {
        alert("the localstorage is empty!");
    }

    else {
        let local = JSON.parse(localStorage.getItem("local"));
        for (let i = 0; i < local.length; i++) {
            if (local[i] == txt.value) {
                alert(local[i]);
            }
            else if (local[i] != txt.value) {
                alert("its not in localstorage");
            }
        }
    }
}




