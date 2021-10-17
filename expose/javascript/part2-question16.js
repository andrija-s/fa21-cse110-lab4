//16.
for (property in statistic) {
   if (statistic[property] % 2 === 1 || statistic[property][0] === 'r') {
      console.log(statistic[property]);
   }
}