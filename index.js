const jsonFile = require("jsonfile");
const simpleGit = require('simple-git')
const filePath = "./data.json";
const DATE = '2023-12-06T00:48:20+05:30'
console.log(DATE)
const data = {
	date: DATE,
};
jsonFile.writeFile(filePath, data);
simpleGit().add([filePath]).commit(DATE,{'--date':DATE}).push()
