const weatherForecasts = [
  {
    day: 'Mon',
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/day.svg',
    imgAlt: 'sun icon',
    conditions: 'sunny',
    time: 'Morning',
  },
  {
    day: 'Tue',
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/night.svg',
    imgAlt: 'moon icon',
    conditions: 'clear',
    time: 'Night',
  },
  {
    day: 'Wed',
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/stormy.svg',
    imgAlt: 'clouds with lightning icon',
    conditions: 'stormy',
    time: 'All Day',
  },
  {
    day: 'Thu',
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/cloudy-day.svg',
    imgAlt: 'sun overcast by clouds icon',
    conditions: 'overcast',
    time: 'Evening',
  },
  {
    day: 'Fri',
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/cloudy-night.svg',
    imgAlt: 'moon overcast by clouds icon',
    conditions: 'cloudy',
    time: 'Night',
  },
];

const App = () => {
  return (
    <>
    <h1>Local Weather</h1>
    <section className="weather-forecast">
      {weatherForecasts.map((forecast, index) => (
        <div key={index} className="forecast-item">
          <img scr={forecast.img} alt={forecast.imgAlt} />
          <div className="forecast-details">
            <h3>{forecast.day}</h3>
            <p>{forecast.conditions}</p>
            <p>{forecast.time}</p>
        </div>
      </div>
      ))}
    </section>
  );
}


  return (
    <div className="weather">
      <h2>{forecast.day}</h2>
      <img src={forecast.img} alt={forecast.imgAlt} />
      <p><span>conditions: </span>{forecast.conditions}</p>
      <p><span>time: </span>{forecast.time}</p>
    </div>
  );
}

return (
<div className="WeatherIcon">
  <img src={weatherForecast.img} alt={weatherForecast.imgAlt} />
  <div classname="WeatherData">
  <h3>{forecast.day}</h3>
            <p>{forecast.conditions}</p>
            <p>{forecast.time}</p>
  </div>
export default App
