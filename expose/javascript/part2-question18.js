const options = {
       hour12 : true,
       hour:  "2-digit",
       minute: "2-digit",
       second: "2-digit"
};
var okGo = function everySecond() {
   let d = new Date();
   console.log(d.toLocaleTimeString("en-US", options));
};

setInterval(okGo, 1000);