const jsonFile = require("jsonfile");
const simpleGit = require("simple-git");
const moment = require("moment");
const filePath = "./data.json";
const hackCommit = (n) => {
    if (0 < n) {
        let date = Math.floor(Math.random() * 7)
        let week = Math.floor(Math.random() * 55)
        console.log(date,'--',week)
        const DATE = moment().subtract(1, "y").add(2, "d").add(date,'d').add(week,'w').format();
        const data = {
            date: DATE,
        };
        console.log(DATE);
        jsonFile.writeFile(filePath, data,
            () => {
                simpleGit().add([filePath]).commit(DATE, { "--date": DATE });
            });  
        n--;
    }
};
hackCommit(10)