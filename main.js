let ans=new Promise((resolve,reject)=>{
	let toss=prompt("Enter a word");
	if(toss==="head"){
		resolve("success")
	}
	else if(toss==="tail"){
		resolve("failure")
	}
	else{
		reject("not matched")
	}
})

ans.then((msg)=>{
	console.log(msg)
}).catch((tail)=>{
	console.log(tail)
})