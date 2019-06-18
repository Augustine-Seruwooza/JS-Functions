var times = prompt("please enter number of times");
function thygame(times){
	var i =Math.floor(Math.random()*100)+1;
	var q=i%2;
	if(q==0){
	alert ("The number is an even number");
	}
	else{
	alert ("The number is an odd number");
	}
	for(var count=1;count<=times;count++){
	var num = prompt("Please enter your number");
	if (num==i){
	alert("YOU GUESSED IT RIGHT!!CONGRATULATIONS");
	}
	if(num<i){
	alert("The number you have chosen is lower, choose a higher number");
	}
	if(num>i){
	alert("The number you have chosen is higher,choose a lower number");
	}
	if(count==times){
	alert("ITS OFFICIAL!!YOU HAVE LOST");
	}

	}
}
thygame(times);