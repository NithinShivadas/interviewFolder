function validateSchedule(newSchedule, existingSchedules) {
  const { dayOfWeek, fromHour, toHour } = newSchedule;
  flag = "";

  if (toHour <= fromHour) {
    flag = 1;
  }
  for (const schedule of existingSchedules) {
    if (schedule.dayOfWeek === dayOfWeek) {
      if (
        (fromHour >= schedule.fromHour && fromHour < schedule.toHour) ||
        (toHour > schedule.fromHour && toHour <= schedule.toHour) ||
        (fromHour <= schedule.fromHour && toHour >= schedule.toHour)
      ) {
        flag = 2;
      }
    }
  }
  if (flag == 1) {
    console.log("To hour should be after from hour");
  } else if (flag == 2) {
    console.log("New schedule overlaps with existing schedule .");
  } else {
    console.log("New Schedule id Valid");
  }
}

//--Existing Schedule----
const existingSchedules = [
  {
    dayOfWeek: 1,
    fromHour: 7,
    toHour: 10,
  },

  {
    dayOfWeek: 2,
    fromHour: 9,
    toHour: 6,
  },
];

//----new schedule to validate----
const newSchedule = { dayOfWeek: 4, fromHour: 7, toHour: 10 };

validateSchedule(newSchedule, existingSchedules);
