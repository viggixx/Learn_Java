var n1 = 1; // the first two numbers
var n2 = 2;

var sum = 0; // wil be the sum of the even-valued terms

var limit = 4000000; // the limit

var x;  

do{
	if(n2 % 2 === 0) {  // if the second number is even add to sum;
		sum += n2;
	}
	x = n1 + n2	    // add num1 + num2 
	n1 = n2;	   // num1 is now the previous # 
	n2 = x;	      // num2 is now sum of num1 + num2; repeats x = n1 + n2 

	} while(n2 <= limit);

alert(sum);
