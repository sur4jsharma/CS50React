function doSomething(temp)
{
	setTimeout(function(){temp(2)},1000)
}
doSomething(console.log)
