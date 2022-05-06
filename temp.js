let timezone = +5.5

function change_timezone(gettimezone){
  timezone = gettimezone;
}


function tz_time(offset) {
  d = new Date();
  utc = d.getTime() + d.getTimezoneOffset() * 60000;
  nd = new Date(utc + 3600000 * offset);
  var time = [
    nd.getHours(),
    nd.getMinutes(),
    nd.getSeconds(),
    nd.getDay(),
    nd.getDate(),
    nd.getMonth(),
    nd.getMilliseconds(),
  ];

  return time;
}

// ---------------------------------------------------------------------------------------------------------------------------------------------

function set_time(time) {
  hr = document.querySelector(".hour_hand");
  min = document.querySelector(".min_hand");
  sec = document.querySelector(".sec_hand");

  let hrot = [30 * time[0] + time[1] / 2 + time[2] / 120 + time[6] / 120000];
  let mrot = [6 * time[1] + time[2] / 10 + time[6] / 10000];
  let srot = [time[2] * 6];

  var months = [
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
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  // if (city == null) {
  hr.style.transform = `rotate(${hrot}deg)`;
  min.style.transform = `rotate(${mrot}deg)`;
  sec.style.transform = `rotate(${srot}deg)`;

  document.querySelector(".digital_time").innerHTML =
    time[0] +
    ":" +
    time[1] +
    ":" +
    time[2] +
    "  " +
    days[time[3]] +
    "," +
    " " +
    time[4] +
    " " +
    months[time[5]];
}

// ---------------------------------------------------------------------------------------------------------------------------------------------

setInterval(() => {
  set_time(tz_time(timezone));

  // set_time(tz_time(0), 0, "LONDON");
  // set_time(tz_time(-5), 1, "NEW YORK");
  // set_time(tz_time(9));
}, 1000);
