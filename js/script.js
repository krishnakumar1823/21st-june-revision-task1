let a=prompt("Enter the number-1");
    if((a%2==0)||(a%2==1)){
    console.log("the given input is a number",a);
    }
    else if((a=="A")||(a=="E")||(a=="I")||(a=="O")||(a=="U")||(a=="a")||(a=="e")||(a=="i")||(a=="o")||(a=="u")){
      	console.log("The given input is vowel");
      }
    else if((a!="A")||(a!="E")||(a!="I")||(a!="O")||(a!="U")||(a!="a")||(a!="e")||(a!="i")||(a!="o")||(a!="u")){
      	console.log("The given input is not a vowel",typeof(a),a);
      } 
//
let a=parseInt(prompt("Enter the Year"));
let b=parseInt(prompt("Enter the Month in number(eg:1,2,3)"));
if (((a!="")&&(a%2==0 || a%2==1))&&((b!="")&&(b<=12))){
  switch(b){
    case 1:
      if ((a%4==0) && ((a%400==0)||(a%100!==0))){
    	  document.write("The given year=",a," is a leap year","<br>")+
        document.write("Result for month=",b,"=JANUARY","<br>")+
      	document.write("Number of days in January=  31","<br>");
      }
      else{
      	document.write("The given year=",a," is a not leap year","<br>")+
        document.write("Result for month=",b,"=JANUARY","<br>")+
      	document.write("Number of days in January=  31","<br>");
      }
    break;
    case 2:
      if ((a%4==0) && ((a%400==0)||(a%100!==0))){
    	  document.write("the given year=",a," is a leap year","<br>")+
        document.write("result for month=",b,"=FEBRUARY","<br>")+
    	  document.write("Number of days in FEBRUAR=  29");
      }
      else{
      	document.write("the given year=",a," is not a leap year","<br>")+
        document.write("result for month=",b,"=FEBRUARY","<br>")+
    	  document.write("Number of days in FEBRUARY=  28");
      }
    break;
    case 3:
      if ((a%4==0) && ((a%400==0)||(a%100!==0))){
    	 document.write("the given year=",a," is a leap year","<br>")+
       document.write("result for month=",b,"=MARCH","<br>")+
      document.write("Number of days in MARCH=  31");
      }
      else{
      	document.write("the given year=",a," is not a leap year","<br>")+
        document.write("result for month=",b,"=MARCH","<br>")+
      document.write("Number of days in MARCH=  31");
      }
    break;
    case 4:
      if ((a%4==0) && ((a%400==0)||(a%100!==0))){
    	  document.write("the given year=",a," is a leap year","<br>")+
        document.write("result for month=",b,"=APRIL","<br>")+
      document.write("Number of days in APRIL=  30");
      }
      else{ 
      	document.write("the given year=",a," is not a leap year","<br>")+
        document.write("result for month=",b,"=APRIL","<br>")+
      document.write("Number of days in APRIL=  30");
      }
    break;
    case 5:
      if ((a%4==0) && ((a%400==0)||(a%100!==0))){
    	  document.write("the given year=",a," is a leap year","<br>")+
        document.write("result for month=",b,"=MAY","<br>")+
      document.write("Number of days in MAY=  31");
      }
      else{
      	document.write("the given year=",a," is not a leap year","<br>")+
        document.write("result for month=",b,"=MAY","<br>")+
     document.write("Number of days in MAY=  31");
      }
    break;
    case 6:
      if ((a%4==0) && ((a%400==0)||(a%100!==0))){
       document.write("result for month=",b,"=JUNE","<br>")+
      document.write("Number of days in JUNE=  30","<br>")+
    	 document.write("the given year=",a," is a leap year");
      }
      else{
          document.write("result for month=",b,"=JUNE","<br>")+
      document.write("Number of days in JUNE=  30","<br>")+
      document.write("the given year=",a," is not a leap year");
      }
    break;
    case 7:
      if ((a%4==0) && ((a%400==0)||(a%100!==0))){
      document.write("result for month=",b,"=JULY","<br>")+
      document.write("Number of days in JULY=  31","<br>")+
    	document.write("the given year=",a," is a leap year");
      }
      else{
      document.write("result for month=",b,"=JULY","<br>")+
      document.write("Number of days in JULY=  31","<br>")+
      document.write("the given year=",a," is not a leap year");
      }
    break;
     case 8:
      if ((a%4==0) && ((a%400==0)||(a%100!==0))){
      document.write("result for month=",b,"=AUGUST","<br>")+
      document.write("Number of days in AUGUST=  31","<br>")+
    	document.write("the given year=",a," is a leap year");
      }
      else{
      document.write("result for month=",b,"=AUGUST","<br>")+
      document.write("Number of days in AUGUST=  31","<br>")+
      document.write("the given year=",a," is not a leap year");
      }
    break;
    case 9:
      if ((a%4==0) && ((a%400==0)||(a%100!==0))){
      document.write("result for month=",b,"=SEPTEMBER","<br>")+
      document.write("Number of days in SEPTEMBER=  30","<br>")+
    	document.write("the given year=",a," is a leap year");
      }
      else{
      document.write("result for month=",b,"=SEPTEMBER","<br>")+
      document.write("Number of days in SEPTEMBER=  30","<br>")+
      document.write("the given year=",a," is not a leap year");
      }
    break;
     case 10:
      if ((a%4==0) && ((a%400==0)||(a%100!==0))){
       document.write("result for month=",b,"=OCTOBER","<br>")+
      document.write("Number of days in OCTOBER=  31","<br>")+
    	document.write("the given year=",a," is a leap year");
      }
      else{
      document.write("result for month=",b,"=OCTOBER","<br>")+
      document.write("Number of days in OCTOBER=  31","<br>")+
      document.write("the given year=",a," is not a leap year");
      }
    break;
    case 11:
      if ((a%4==0) && ((a%400==0)||(a%100!==0))){
      document.write("result for month=",b,"=NOVEMBER","<br>")+
      document.write("Number of days in NOVEMBER=  31","<br>")+
    	document.write("the given year=",a," is a leap year");
      }
      else{
       document.write("result for month=",b,"=NOVEMBER","<br>")+
      document.write("Number of days in NOVEMBER=  31","<br>")+
      document.write("the given year=",a," is not a leap year");
      }
    break;
    case 12:
      if ((a%4==0) && ((a%400==0)||(a%100!==0))){
      document.write("result for month=",b,"=DECEMBER","<br>")+
      document.write("Number of days in DECEMBER=  31","<br>")+
    	document.write("the given year=",a," is a leap year");
      }
      else{
       document.write("result for month=",b,"=DECEMBER","<br>")+
      document.write("Number of days in DECEMBER=  31","<br>")+
      document.write("the given year=",a," is not a leap year");
      }
}
}
else{
	document.write("invalid input","<br>","a(year)=",a,"<br>","b(month)=",b);
}
//

let a=parseInt(prompt("Enter the value of A"));
let b=parseInt(prompt("Enter the value of B"));
let c=parseInt(prompt("Enter the value of C"));
let d=parseInt(prompt("Enter the value of D"));
if (a>b && a>c && a>d){
	document.write("Given a=",a,",b=",b,",c=",c,",d=",d,"<br>")+
  document.write("A is greater than B,C,D");
}
else if(b>a && b>c && b>d){
	document.write("Given a=",a,",b=",b,",c=",c,",d=",d,"<br>")+
  document.write("B is greater than A,C,D");
}
else if(c>a && c>b && c>d){
	document.write("Given a=",a,",b=",b,",c=",c,",d=",d,"<br>")+
  document.write("C is greater than A,C,D");
}
else if(d>a && d>b && d>c){
	document.write("Given a=",a,",b=",b,",c=",c,",d=",d,"<br>")+
  document.write("D is greater than A,C,D");
}
else if (a==b || a==c || a==d || b==c || b==a || b==d || c==a || c==b || c==d){
	document.write("Given a=",a,",b=",b,",c=",c,",d=",d,"<br>")+
  document.write("some numbers are same");
}
else{
	document.write("Given a=",a,",b=",b,",c=",c,",d=",d,"<br>")+
  document.write("Invalid input");
}