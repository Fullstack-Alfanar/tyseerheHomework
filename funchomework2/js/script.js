//function homework2
//question 1=>
/*function FirstLast(first, last) {
    return first + last;
}
let num1 = prompt("what is your first name?");
let num2 = prompt("what is your last name?");
FirstLast(alert("my full name is " + num1 + " " + num2));
FirstLast(alert("my full name is " + num1 + " " + num2));*/
//------------------------------------------------------------

//question 2=>
/*function SumAvg(num1, num2, num3) {
    let sum = num1 + num2 + num3;
    let avg = sum / 3;


    return sum, avg;
}
//console.log(SumAvg(10, 5, 9));
//SumAvg(console.log(Math.floor(Math.random()*100)));
let first = +prompt("enter the number");
let second = +prompt("enter the number");
let third = +prompt("enter the number");
console.log(SumAvg(first,second,third));*/

//------------------------------------------------------------

//question 3=>
/*function Squarepattern(n) {
    for (i = 0; i < n; i++) {
        document.write("*");
    }


}
function size(n){
    for(j=0;j<n;j++){
        document.write("<br>")
        Squarepattern(n);

    }

}
size(prompt("enter the number"));*/



//------------------------------------------------------------

//question 4=>
/*function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
      line += j+" ";
  }
  return line + "\n";
}

  function buildTriangle(height) {
  var triangle = "";
  for (var i = 1; i <= height; i++) {
      // call makeline function
      triangle += makeLine(i);
  }
  return triangle;
}

  console.log(buildTriangle(4));*/
//------------------------------------------------------------

//question 5=>
/*function func(n) {
    for (let i = n-1; i >= 0; i--) {
       document.write("*");
    }
}
function size(n) {
  for (let j = n; j >= 0; j--) {
        func(j);
       document.write("<br>");
   }
}
size(prompt("enter the number"));*/
//------------------------------------------------------------

//question 6=>
/*function limit(n) {
    for (let i = 1; i <= n; i++) {
        document.write(i);
    }
    for (let j = 1; j <= n; j++) {
        document.write("*");
    }
}
function Size(n) {
    for (let i = n; i >= 0; i--) {
        document.write("<br>");
        limit(i);
    }
}
Size(prompt("enter the number"));*/



//------------------------------------------------------------


//question 7=>

/*function draw1(n) {
    let mytable = ""
    for (let i = 1; i < n; i++) {
        mytable += "<tr>";
        mytable += "<td>" + "*".repeat(i) + "</td>";
    }
    document.write(mytable)
}
function draw2(n) {
    let mytable = "<table>"
    for (let i = n; i > 0; i--) {
        mytable += "<tr>";
        mytable += "<td>" + "*".repeat(i) + "</td>";
    }
    document.write(mytable);
}
draw2(+prompt("enter the number"));
draw1(+prompt("enter the number"));*/
