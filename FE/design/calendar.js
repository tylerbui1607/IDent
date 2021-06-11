const date = new Date();

const renderCalendar = () => {
  const firstDayIndex = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDay();

  const monthDays = document.querySelector(".days");

  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  const prevLastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();

  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();

  let nextDay = 7 - lastDayIndex;
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  document.querySelector(".date h1").innerHTML = months[date.getMonth()];
  document.querySelector(".date p").innerHTML = date.toDateString();

  let days = "";
  for (let x = firstDayIndex - 1; x >= 0; x--) {
    days += `<div class="col1-7"><div class="square"><div class = "day-display prev-date noselect">${
      prevLastDay - x
    }</div></div></div>`;
  }
  for (let i = 1; i <= lastDay; i++) {
    var dateinfor = `${date.getFullYear()}-${date.getMonth() + 1}-${i}`;
    if (
      i === new Date().getDate() &&
      date.getMonth() === new Date().getMonth()
    ) {
      days += `<div class="col1-7"><div class="square"><div class ="day-display today normal-day noselect" id = ${dateinfor}>${i}</div></div></div>`;
    } else
      days += `<div class="col1-7"><div class="square"><div id = ${dateinfor} class="normal-day day-display noselect" onclick ="getPlanOfDay(this)">${i}</div></div></div>`;
  }

  for (let j = 1; j <= nextDay; j++) {
    days += `<div class="col1-7"><div class="square"><div class ="day-display next-date noselect">${j}</div></div></div>`;
    monthDays.innerHTML = days;
  }
};

document.querySelector(".prev-btn").addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
});

document.querySelector(".next-btn").addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});
renderCalendar();

const doctorID = "6092a8da260dfe075c02cf61";
var schedule = [];
function getDoctorSchedule() {
  const url = "http://localhost:3000/api/schedules";
  fetch(`${url}?dentist=${doctorID}`)
    .then((res) => res.json())
    .then((data) => {
      schedule = data;
      for (var i = 0; i < schedule.doc.length; i++) {
        var day = `${schedule.doc[i].year}-${schedule.doc[i].month}-${schedule.doc[i].day}`;
        console.log(typeof day);
        console.log(day);
        document.getElementById(day).classList.add("day-have-plan");
      }
      console.log(schedule);
    });
}
function getPlanOfDay(ele) {
  var smallPlan = "";
  for (var i = 0; i < schedule.doc.length; i++) {
    var day = `${schedule.doc[i].year}-${schedule.doc[i].month}-${schedule.doc[i].day}`;
    if (ele.id == day) {
      var shifts = schedule.doc[i].shifts;
      for (var i = 0; i < shifts.length; i++) {
        smallPlan += `<div class = "small-plan">${shifts[i].from}-${shifts[i].to}</div>`;
      }
    }
  }
  document.querySelector(".schedule").innerHTML = smallPlan;
}
