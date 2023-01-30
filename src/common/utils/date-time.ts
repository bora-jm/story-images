export function SecondTimes(startDate: Date, endDate: Date) {

  const x = new Date(`${startDate}`);
  const y = new Date(`${endDate}`);

 const secondTimes = parseInt(`${(y.getTime() - x.getTime()) /1000}`);
return secondTimes;
}



