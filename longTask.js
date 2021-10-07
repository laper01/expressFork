function longTask(){
	let sum= 0
        for(let i =0; i<1000; i++){
                for(let j =0; j<1000; j++){
                        console.log(`${i} ${j}`);
			sum +=i+j

                }

        }
	return sum;
}
process.on('message', (message)=>{
	if (message === 'start'){
	const sum = longTask();
	process.send(sum);
	}
});

