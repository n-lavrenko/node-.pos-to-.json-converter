const readline = require('readline');
const fs = require('fs');
const moment = require('moment');

const rl = readline.createInterface({
  // read file in your filesystem:
  input: fs.createReadStream('api/tools/route.pos', 'utf8'),
  crlfDelay: Infinity,
});

let result = [];
rl.on('line', (line) => {
  // also remove first 1-2 lines from .pos file where presented legend for data (like latitute, date, age, etc..)
  // change this values in .substr adapted to your .pos file data
  const year = line.substr(0, 4);
  const month = line.substr(5, 2);
  const day = line.substr(8, 2);
  
  const hours = line.substr(11, 2);
  const minutes = line.substr(14, 2);
  const seconds = line.substr(17, 2);
  const miliSeconds = line.substr(20, 3);
  
  const lat = +line.substr(24, 14);
  const lon = +line.substr(39, 14);
  const height = +line.substr(55, 9);
  const age = +line.substr(129, 4)
  
  // very complicated timestamp in unix, but for me it's useful.
  const timestamp = +moment().year(year).month(month).date(day).hour(hours).minute(minutes).second(seconds).milliseconds(miliSeconds).format('x');
  result.push({
    timestamp: timestamp,
    longitude: lon,
    latitude: lat,
    height: height,
    age: age,
  })
  
});

rl.on('close', (err) =>  {
  // this is output file:
  fs.writeFile('api/tools/route..json', JSON.stringify(result), 'utf8', () => { console.log('success!')});
})
