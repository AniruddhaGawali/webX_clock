let weather = {
  apikey: "7f0f07e7104d7ddc5fb7ff880026a06f",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        this.apikey
    )
      .then((response) => response.json())
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function(data){
    const {temp} = data.main;
    

  }
};
