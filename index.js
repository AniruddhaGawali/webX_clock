let timezone = ["india", +5.5, "delhi"];
const apikey = "7f0f07e7104d7ddc5fb7ff880026a06f";
let old_location = "india";
function change_timezone(gettimezone, location, city) {
  if (location != old_location) {
    timezone = [location, gettimezone, city];
    document.getElementById(location).classList.add("active");
    document.getElementById(old_location).classList.remove("active");
    old_location = location;
  }
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

function set_time(city, location, time) {
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

  function fetchWeather(city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        apikey
    )
    .then(function (response) {
      return response.json();
    })
    .then(function (responseJSON) {
      const {temp} = responseJSON.main;
      document.querySelector(".location").innerHTML = location +" "+ temp +"\&degC";
    })}

  fetchWeather(city)
//  let a = fetchWeather("nagpur")
//  console.log(a)
  
  // 
}

setInterval(() => {
  set_time(timezone[2], timezone[0], tz_time(timezone[1]));
}, 1000);

let menu = 0;
function ham_menu() {
  if (menu == 0) {
    document.querySelector(".menu_list").classList.remove("active");
    document.querySelector(".menu").innerHTML = "<i class='bx bx-x'></i>";
    menu = 1;
  } else {
    document.querySelector(".menu").innerHTML = "<i class='bx bx-menu'></i>";
    document.querySelector(".menu_list").classList.add("active");
    menu = 0;
  }
}
// ---------------------------------------------------------------------------------------------------------------------------------------------

let theme = 0;
function change_theme() {
  document.querySelector(".toggle_btn").classList.toggle("active");
  if (theme == 0) {
    document.documentElement.style.setProperty(
      "--color-0",
      "rgba(0, 0, 0, 0.3)"
    );
    document.documentElement.style.setProperty(
      "--color-0-a",
      "rgba(0, 0, 0, 0.5)"
    );
    document.documentElement.style.setProperty(
      "--color-0-b",
      "rgba(0, 0, 0, 1)"
    );
    document.querySelector(".clock_img").src = "./clock.png";
    theme = 1;
  } else {
    document.documentElement.style.setProperty(
      "--color-0",
      "rgba(255, 255, 255, 0.3)"
    );
    document.documentElement.style.setProperty(
      "--color-0-a",
      "rgba(255, 255, 255, 0.5)"
    );
    document.documentElement.style.setProperty(
      "--color-0-b",
      "rgba(255, 255, 255, 1)"
    );
    document.querySelector(".clock_img").src = "./clock_w.png";
    theme = 0;
  }
}
