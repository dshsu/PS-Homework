/* Create a div with two input fields in the body of your html
 Using JavaScript, declare your variables ( a, b, c)
 Create a button for 4 different orders of operation
- Addition - division
- multiplication - subtraction
 Create a function for each mathematical operator ( you can use the same template as sum( ) to start) */

   function sum(a,b){
     var a=document.getElementById(a).value;
     var b=document.getElementById(b).value;
 var c=a+b;
 document.getElementById("c").value = c;
 }
 function minus(a,b){
   var a=document.getElementById(a).value;
   var b=document.getElementById(b).value;
 var c=a-b;
 document.getElementById("c").value = c;
 }
 function times(a,b){
   var a=document.getElementById(a).value;
   var b=document.getElementById(b).value;
 var c=a*b;
 document.getElementById("c").value = c;
 }
 function divide(a,b){
   var a=document.getElementById(a).value;
   var b=document.getElementById(b).value;
 var c=a/b;
 document.getElementById("c").value = c;
 }
