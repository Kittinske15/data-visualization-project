var xlsx = require("xlsx");

var wb = xlsx.readFile("pepsico_data.xlsx",{cellDates: true })

var ws = wb.Sheets["Data"];
var data = xlsx.utils.sheet_to_json(ws)
console.log(data); 