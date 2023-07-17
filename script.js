const container = document.querySelector(".container");
const search = document.querySelector(".search-box button");
const weatherBox = document.querySelector(".weather-box");
const weatherDetails = document.querySelector(".weather-details");
const error404 = document.querySelector(".not-found");

search.addEventListener("click", () => {
  const APIKey = "a5d9781f30d813a1295f5385f15e4be4";
  const city = document.querySelector(".search-box input").value;

  if (city === "") return;

  fetch(
   `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`
  )
    .then((response) => response.json())
    .then((json) => {
      if (json.cod === "404") {
        container.style.height = "400px";
        weatherBox.style.display = "none";
        weatherDetails.style.display = "none";
        error404.style.display = "block";
        error404.classList.add("fadeIn");
        return;
      }

      error404.style.display = "none";
      error404.classList.remove("fadeIn");

      const image = document.querySelector('.weather-box img');
      const temperature = document.querySelector('.weather-box .temperature');
      const description = document.querySelector('.weather-box .description');
      const humidity = document.querySelector('.weather-details .humidity span');
      const wind = document.querySelector('.weather-details .wind span');

      switch (json.weather[0].main) {
        case "Clear":
          image.src = "https://www.whoi.edu/wp-content/uploads/2023/05/clouds-1200x675.jpg";
          break;
        case "Rain":
          image.src = "https://www.miaminewconstructionshow.com/blog/wp-content/uploads/2019/06/best-roof-for-rainy-climate-2.jpg";
          break;
        case "Snow":
          image.src = "https://w0.peakpx.com/wallpaper/1008/146/HD-wallpaper-winter-dusk-snow-winter-mountain-dusk-evening-beautiful-sunset.jpg";
          break;
        case "Clouds":
          image.src = "https://images.pexels.com/photos/158163/clouds-cloudporn-weather-lookup-158163.jpeg?cs=srgb&dl=pexels-pixabay-158163.jpg&fm=jpg";
          break;
        case "Haze":
          image.src = "https://ane4bf-datap1.s3-eu-west-1.amazonaws.com/wmocms/s3fs-public/styles/featured_media_detail/public/23908803715_404c5de323_z.jpg?o1aYzcGOVRCiliGBBPA_iiHiUehTZ39g&itok=U3M7G6EP";
          break;
        default:
          image.src = "";
      }

      temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
      description.innerHTML = `${json.weather[0].description}`;
      humidity.innerHTML = `${json.main.humidity}%`;
      wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;






      

      weatherBox.style.display = "";
      weatherDetails.style.display = "";
      weatherBox.classList.add("fadeIn");
      weatherDetails.classList.add("fadeIn");
      container.style.height = "590px";






    });
});
