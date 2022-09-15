var cowsay = require("cowsay");
//var moment = require("moment");

//console.log(moment);
console.log(
  cowsay.say({
    text: "돼지는 꿀꿀digimon112",
    e: "oO",
    T: "U ",
  })
);

require("dotenv").config();
console.log(process.env.SECRET_KEY); // remove this after you've confirmed it working
