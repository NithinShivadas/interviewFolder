
//------------DAYS DIIFERENCE B/W DATE-----------------

function Calc_Dif(date1, date2) {
    const [year1, month1, day1] = date1.split('-').map(Number);
    const [year2, month2, day2] = date2.split('-').map(Number);

    const daysInMonth = 30;

    const totalDays1 = year1 * 360 + month1 * 30 + day1;
    const totalDays2 = year2 * 360 + month2 * 30 + day2;

    return totalDays2 - totalDays1;
  }

  const fData = "2022-04-03";
  const sDate = "2021-12-01";

  const difference = Calc_Dif(fData, sDate);

  console.log(`The difference between ${fData} and ${sDate} is ${difference} days.`);
