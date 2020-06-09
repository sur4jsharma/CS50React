/*function makeFunctionArray()
{
	const arr = []
	for(var i=0;i<5;i++)
	{
		arr.push(i+10);
	}
	const arr1 = [];
	for(let j=0;j<arr.length;j++)
	{
		//arr1.push(function (x){console.log(arr[x])});
		arr1.push(function (){console.log(j)});
	}
	
	return arr1;
}

const arrOfFun = makeFunctionArray();
//console.log(arrOfFun[0]);
arrOfFun[1]();
*/

// solve this bug usng iife

function makeFunArray()
{
	const arr = []
	for(let j=0;j<5;j++)
	{
		arr.push( (function(x) {
				return function(){console.log(x)}
					})(j))
	}
	return arr;
}

const arrFun = makeFunArray()
arrFun[0]()
