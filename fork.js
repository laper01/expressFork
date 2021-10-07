const {fork} = require('child_process');
const express = require('express');
const app = express();
const path = require('path');


app.get('/one', (req, res)=>{
	res.sendFile(path.join(__dirname+'/index.html'));
});

app.get('/two', (req, res)=>{
	const child = fork('./longTask.js');
	child.send('start');
	child.on('message',(sum)=>{
		res.send(`${sum}`);
	});
});

app.get('/three', (req, res)=>{
	longTask();
	res.send('three');
})

app.listen(5000, ()=>{
	console.log('server is on..');
});

function longTask(){
	for(let i =0; i<1000; i++){
		for(let j =0; j<1000; j++){
			console.log(`${i} ${j}`);
		}

	}	
}
