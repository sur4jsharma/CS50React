// method 1:
const ob1 = new Object()
ob1.firstname = 'suraj'
ob1.lastname = 'kumar'
ob1.age = 24
ob1['greet'] = function(){console.log('Hi!')}
const key1 = 'isStudying'
ob1[key1] = true

console.log(ob1.firstname)

//method 2:
const ob2 = {}
ob1.firstname = 'suraj'
ob1.lastname = 'kumar'
ob1.age = 24
ob1['greet'] = function(){console.log('Hi!')}
const key2 = 'isStudying'
ob1[key2] = true

//method 3:
const ob3 = {1:1000,name:'suraj',age:24,isStudying:true,
		address:{vill:'parsa',pin:801109}
		}
console.log(ob3[1])
console.log(ob3.address.vill)

//object cloning
console.log("Object cloning")
const ob4 = ob1
console.log(ob4.firstname)//suraj
ob1.firstname = 'Sooraj'
console.log(ob4.firstname)//Sooraj
ob1.firstname = 'suraj'

// swallow copy to avoid this
console.log("swallow copy")
const ob5 = Object.assign({},ob1)
console.log(ob5.firstname)//suraj
ob1.firstname = 'Sooraj'
console.log(ob5.firstname)//suraj

//Swalow copy fails when there is object inside object

const ob6 = Object.assign({},ob3)
console.log(ob3.address.vill)//parsa
ob6.address.vill = "naubatpur"
console.log(ob3.address.vill)//naubatpur


//Deep copy
console.log("Deep copy")
function deepCopy(obj)
{
	const keys = Object.keys(obj);
	const newObj = {};
	for(let i=0;i<keys.length;i++)
	{
		const key = keys[i];
		if(typeof obj[key] === 'object')
		{
			newObj[key] = deepCopy(obj[key]);
		}
		else
			newObj[key] = obj[key];
	}
	return newObj;
}

const ob7 = deepCopy(ob3);
console.log(ob3.address.vill)//naubatpur
ob7.address.vill = "naubatpur patna"
console.log(ob3.address.vill)//naubatpur
