const jsonFile = require("jsonfile");
const simpleGit = require("simple-git");
const moment = require("moment");
const filePath = "./data.json";
<<<<<<< HEAD

const hackCommit = (n) => {
    while (n == 0) {
        let date = Math.floor(Math.random() * 7);
        let week = Math.floor(Math.random() * 55);
        const DATE = moment()
            .subtract(1, "y")
            .add(1, "d")
            .add(date, "d")
            .add(week, "w")
            .format();
        console.log(date, "--", week);
        console.log(DATE);
        const data = {
            date: DATE,
        };
        jsonFile.writeFile(filePath, data, () => {
            simpleGit()
                .add([filePath])
                .commit(DATE, { "--date": DATE });
        });
        if (n == 0) {
            return simpleGit().push();
        }
        n--;
    }
};
hackCommit(5);
=======
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
>>>>>>> cf3b3f78b6642f8289449481b38bc22db5c17c68
