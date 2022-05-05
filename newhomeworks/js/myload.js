function myload() {
    var strVal = getCookie("SetName");
    var name = document.getElementById("textName").value;
    if (strVal == name) {
        alert("hi i am " + name);
    }
}
