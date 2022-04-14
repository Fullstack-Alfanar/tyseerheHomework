let sum = 0;
function Students() {

    let elements = [];
    elements[0] = document.getElementById("name");
    elements[1] = document.getElementById("score");
    elements[2] = document.getElementById("bodyy");


    if (elements[0].value == "" || elements[0].value == null) {
        elements[0].style.borderColor = 'red';
        alert("please enter your name");
    }
    else if (elements[1].value == "" || elements[1].value == null) {
        elements[1].style.borderColor = 'red';
        alert("please enter your score");
    }
    else if (isNaN(elements[1].value) || elements[1].value == null) {
        alert("please enter a number for score");
    }

    else {


        ele1 = document.createElement("label");
        ele2 = document.createElement("label");

        ele3 = document.createElement("td");
        ele4 = document.createElement("td");

        ele5 = document.createElement("tr");


        ele1.textContent = elements[0].value;
        ele2.textContent = elements[1].value;





        ele3.appendChild(ele1);
        ele4.appendChild(ele2);
        ele5.appendChild(ele3);
        ele5.appendChild(ele4);

        elements[2].appendChild(ele5);



        sum += Number(elements[1].value);
        
        elements[0].value = '';
        elements[1].value = '';


        var counter = elements[2].getElementsByTagName("tr");


        elements[0] = document.getElementById("info");
        elements[0].textContent = counter.length;

        elements[1] = document.getElementById("avg");
        elements[1].textContent = sum / counter.length;





    }


}