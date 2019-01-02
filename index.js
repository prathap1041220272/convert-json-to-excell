'sue strict';
const express = require('express');
const app = express();
const json2xls = require('json2xls');
const fs = require('fs');
const port = 4568;

var json = {
    foo: 'bar',
    qux: 'moo',
    poo: 123,
    stux: new Date()
}

var xls = json2xls(json);

fs.writeFileSync('data.xlsx', xls, 'binary');


app.listen(port, ()=>{
	console.log(`server started at port ${port}`);
})