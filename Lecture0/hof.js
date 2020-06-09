function addOne(num){return num+1}
function isGreater(num){return num>2}
function add(x,y){return x+y}


function map(arr,fn)
{
	const newArr = []
	for(let i=0;i<arr.length;i++)
	{
		newArr.push(fn(i));
	}
	return newArr;
}

const arr = [1,2,3,4]
arr.forEach(function(val)
{
	console.log(val)
})
console.log(map(arr,addOne))
/*
const arr1 = arr.map(arr)
for(let i=0;i<arr1.length;i++)
	console.log(arr1[i])
const arr2 = arr.filter(isGreater)
const sum = arr.reduce(add)
console.log("sum is",sum)
*/
