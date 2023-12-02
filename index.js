const jsonFile = require("jsonfile");
const simpleGit = require("simple-git");
const moment = require("moment");
const filePath = "./data.json";

const hackCommit = (n) => {
	if (n === 0) return simpleGit().push();
	let date = Math.floor(Math.random() * 7);
	let week = Math.floor(Math.random() * 40) +15;
	const DATE = moment()
		.subtract(1, "y")
		.add(1, "d")
		.add(date, "d")
		.add(week, "w")
		.format();
	// console.log(date, "--", week);
	console.log(DATE);
	const data = {
		date: DATE,
	};
	jsonFile.writeFile(filePath, data, () => {
		simpleGit()
			.add([filePath])
			.commit(DATE, { "--date": DATE }, hackCommit.bind(this, --n));
	});
};
hackCommit(500);
