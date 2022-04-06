//arrays homework===>
//question number 1:
/*let names=["tyseer","alaa","elias","ameer","ahmad"];
for(let i=0;i<=names.length;i++){
    if(names[i]==names[0]){
        console.log("this is the first name  "+names[i]);
    }
    if(names[i]==names[4]){
        console.log("this is the last name  "+names[i]);
    }

}*/


/*var names=["tyseer","alaa","elias","ameer","ahmad"];
console.log("this is the first name: "+names[0]);
console.log("this is the last name: "+names[4]);*/

/*var names=["tyseer","alaa","elias","ameer","ahmad"];
for(var i=names.length;i>=0;i--){
    console.log("the reverse is: "+names[i]);
}*/
//------------------------------------------------------------------------------------------

//question number 2:

/*var fruits=["banana","apple","strawberry","blueberry"];
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);*/
//------------------------------------------------------------------------------------------


//question number 3:
/*var grades = [], string = "";
for (var i = 0; i < 10; i++) {
    grades[i] = +prompt("enter the numbers");
    if (grades[i] > 100 || grades[i] < 0){
        string += grades[i] + " ";
    }
}
if (string != "") {
    alert(string);
}
else
    alert("the grades are good!");
*/

//------------------------------------------------------------------------------------------



//question number 4:
/*var numbers=[50,45,84,36,74,12,10,54,22,30,45,87,10,20,65,84,52,32,14,74];
var sum=0;
var avg=0;
var max=numbers[0];
var min=numbers[0];
for(var i=numbers.length;i>=0;i--){
    if(numbers[i]>=0 && numbers[i]<=100){
        console.log(+numbers[i]);
    }
}

for(i=0;i<numbers.length;i++){
    sum+=numbers[i];
    avg=sum/20;
    if(numbers[i]>=max){
        max=numbers[i];
    }
    if(numbers[i]<min){
        min[i]=numbers[i];
    }
}
console.log("the sum of the all numbers is: "+sum);
console.log("the avg of the all numbers is: "+avg);
console.log("the max number is: "+max);
console.log("the min number is: "+min);*/
//------------------------------------------------------------------------------------------


//question number 20:

/*var N = [6];
for (var i=0;i<N;i++) {
        var str = "";
        for (var j=0;j<N;j++) {
            if (j > N-i-1) {
                str += j;
            } else {
                str += " ";
            }
        }
        console.log(str);
    }*/
//------------------------------------------------------------------------------------------

//question number 21:

/*function starpattern() {
    var Column = [], Row = [], i, j;
    Column = +prompt("enter the number");
    Row = +prompt("enter the number");


    for (i = 1; i <= Row; i++) {
        for (j = 1; j <= Column; j++) {
            document.write(j + '');
        }
        document.write('<br>');
    }
}
starpattern();*/
//------------------------------------------------------------------------------------------


//question number 22:

/*var num=[],i;
    num=+prompt("enter the number");
    while(num>0){

        for(i=1;i<=num;i++){
            num[i]=num;
            alert("the numbers between 1-num:  "+i);
        }
        num=+prompt("enter the number");
    }*/
//------------------------------------------------------------------------------------------


//question number 1 אתגר

/*function starpattern(){
    var n=[i][j],i,j;
    n=+prompt("enter the number");

    for(i=1;i<=n;i++){
        for(j=1;j<=n;j++){
            document.write('*');
        }
        document.write('<br>');
    }
}
starpattern();*/

//------------------------------------------------------------------------------------------


//question number 2 אתגר

/*function starpattern(){
    var Column=[],Row=[],i,j;
    Row=+prompt("enter the number");
    Column=+prompt("enter the number");



    for(i=1;i<=Row;i++){
        for(j=1;j<=Column;j++){
            document.write('*');
        }
        document.write('<br>');
    }
}
starpattern();*/

//question number 3 אתגר:

/*var rows = [i];
rows=+prompt("enter the number")
for (var i = rows; i--;) {
  var columns = 0;
  while (columns <= i) {
    document.write('*');
    columns++
  }
  document.write('<br />\n');
}*/

//------------------------------------------------------------------------------------------
