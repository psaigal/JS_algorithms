//Get nth Fibonacci number
// Input: number
// Output: number

// Example: 
// fib(4) = 3
// fib(7) = 13


// 1,1,2,3,5,8,13,21,34

function fib(n) {
	if (n === 1 || n === 2) {
		return 1;
	}
	var i = 1;
	var j = 1;
	var k;
	var count = 2;
	var sum;
	while (count < n) {
		k = j;
		j = j + i;
		i = k;
		count += 1; 
	}
	return j;
}


// i      	j			count
// 1		1			2

// 1		2			3
// 2		3			4
// 3		5			5
// 5		8			6
// 8		13			7
