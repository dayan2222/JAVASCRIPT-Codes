/*
var name="Pizza\nPizz\nPiz\nPi\nP";
alert(name);
*/

/*
var mail="dayanahmed66@gmail.com";
alert("My Email is: " +mail);
*/

/*
var a =2;
var b=3;
var c =a+b;
alert(c);
var spec = prompt("Your species?","human");
alert ("You entered " + spec);
*/

/*
var blank = prompt( "title" , "placeholder");
var an = prompt("title");
*/

/*
function myfunction()
{
    alert("Regesters");
}
*/

/*
var val1 =Number(prompt("Num1"));
var val2 =Number(prompt("Num2"));
alert(val1+val2);
*/

/*
var a =parseInt(prompt("Num1"));
var b =parseInt(prompt("Num2"));
var c = prompt("Operator");
 if(c=="+")
 {
     alert(a+b);
 }
 if(c=="-")
 {
     alert(a-b);
 }

*/

/*
var a =parseInt(prompt("Num1"));
var b =parseInt(prompt("Num2"));
var c = prompt("Operator");
 if(c=="+")
 {
     alert(a+b);
 }
 else if(c=="-")
 {
     alert(a-b);
 }
*/

/*
var num1 =prompt("first");
var num2 =prompt("second");
var Operator = prompt("Operator");
 
num1=parseInt(num1);
num2=parseInt(num2);

if (Operator == "+") {
    alert(num1+num2);
}
else if(Operator == "-" ){
    if (num1>num2) {
        alert(num1-num2);        
    }
    else{
        alert("Maths Error!");
    }
}
else if(Operator == "*"){
    alert(num1*num2);
}
else if(Operator == "/"){
    if (num1>num2) {
        alert(num1/num2);        
    }
    else{
        alert("Maths Error!");
    }
}
else if(Operator == "%"){
    alert(num1%num2);
}
else{
    alert("Operator not match!");
}
*/

/*
var semester=prompt("Enter Your Semester"); 
var GPA =prompt("Enter Your GPA");

if ((semester==6 && GPA=="2.5") || (semester==8 && GPA=="3")) {
    alert("Passed!");    
}  
else if ((semester==6 && GPA=="4") || (semester==8 && GPA=="4")) {
    alert("Excellent!");    
} 
else if ((semester==6 && GPA<"2.5") || (semester==8  &&  GPA<"3")) {
    alert("Failed!");    
} 
else
{
    alert("Wrong Command!");
}
*/
/*

var cityToCheck = prompt("Enter the name of city");
var firstChar = cityToCheck.slice(0,1);
var otherChar = cityToCheck.slice(1);
firstChar = firstChar.toLowerCase();
otherChar = otherChar.toUpperCase();
var cappedCity = firstChar+otherChar;
alert(cappedCity);    
*/

/*
var city= ["karachi","Lahore"];
//alert(city.length); 
alert (city[0].length);
*/

/*
var text = prompt("Karachi is the bigest city of Pakistan");
//it shows the index number only
alert(text.indexOf("Karachi"));
*/

/*
var text = "To be or not to be.";
var segIndex= text.lastIndexOf("be");
alert(segIndex);
*/

/*
if we are working in array we should concern about array indexes.
*/

/*
var x="University";
for (var i=0 ; i<=x.length-1;i++)
{
    if(x[i]=='y')
    {
        alert(x[i]);
    }
}
alert(x);
*/

/*
var x="Univerity Indus";
alert( x.replace('y','i'));
*/

/*
//var x = 10.57;
//alert(Math.round(x));

var x = 10.99;
//alert(Math.ceil(x));//increase no matter how the number is different
alert(Math.floor(x));//remain on that number
*/

/*
var x = Math.random();
var y= x.toFixed(2);
alert(y);
*/

/*
var rightNow = new Date();
var dateString = rightNow.getDay();
alert(dateString);
*/

/*
var rightNow = new Date();
var dateString = rightNow.toString();
alert(dateString);
*/

/*
var rightNow = new Date();
var theDay = rightNow.getDay();
alert(theDay);
*/

/*
var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var now = new Date();
var theDay = now.getDay();
var nameOfToday = dayNames[theDay];
alert(nameOfToday);
*/

/*
var rightNow = new Date();
var theDay = rightNow.getFullYear();
alert(theDay);
*/

/*
var today = new Date();
var doomsday = new Date("June 30, 2035");

var msToday = today.getTime();
var msDoomsday = doomsday.getTime();
var msDiff = parseFloat(msDoomsday - msToday);
alert(msDiff);
//var dDiff = msDiff / (1000 * 60 * 60 * 24);
*/
/*
var d = new Date();
alert(d.setMilliseconds(6));
*/

/*var now = new Date();
var theHr = now.getHours();
var theMin = now.getMinutes();
alert("time: " + theHr + ":" + theMin);
*/

/*
function greet(greeting){
    Console.log(greeting);
}
*/
/*
var date = new Date();
var today = date.getDate();
var day = date.getDay();
var year = date.getFullYear();
var daylist = ["Sun","Mon","Tue","Wed","Thurs","Fri","Sat"];
console.log("Today is: "+daylist[day]+" "+year);
var hours = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();
var prepend = (hours >=12 )? "PM" : "AM";
hours = (hours >=12 )? hours - 12 : hours;
if(hours==0 && prepand=='PM')
{
    if(minute==0&&seconds==0)
    {
        hours=12;
        prepand="Noon";
    }
    else
    {
        hours=12;
        prepand="PM";
    }

}
if(hours==0 && prepand=='AM')
{
    if(minute==0&&seconds==0)
    {
        hours=12;
        prepand="Midnight";
    }
    else
    {
        hours=12;
        prepand="AM";
    }

}
console.log("Current time : "+hours + prepend + " : " + minutes + " : " + seconds);

*/


