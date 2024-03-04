const fs = require("fs");
const path = require("path");

module.exports = (data) => {
    console.log("the data to wrtie in file :", data);
    try {
        const filePath = path.join(__dirname, "..", "data", "movies.json");
        fs.writeFileSync(filePath, JSON.stringify(data), "utf-8");
        console.log("Data has been written to:", filePath);
    } catch (err) {
      console.log("here is the error");
    }
  };