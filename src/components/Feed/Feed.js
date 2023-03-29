import React from "react";
import "./Feed.css";

function Feed({ data }) {
  const city = data.name;
  const country = data.sys.country;
  const date = new Date().toLocaleDateString();
  const temp = Math.floor(data.main.temp - 273.15);
  const feels_like = Math.floor(data.main.feels_like - 273.15);
  const condition = data.weather[0].main;
  const icon = data.weather[0].icon;
  const humidity = data.main.humidity;
  const pressure = data.main.pressure;
  const temp_max = Math.floor(data.main.temp_max - 273.15);
  const temp_min = Math.floor(data.main.temp_min - 273.15);

  const speed = data.wind.speed;

  return (
    <div className="feed-info">
      <br />
      <div className="feed-city">
        <h2>
          {city},{country}..
        </h2>
        <p>{date}</p>
      </div>
      <br />

      <div className="feed-top">
        <div className="feed-top-1">
          <h3>
            {temp} <sup>o</sup>C
          </h3>
          <p>
            feels_like {feels_like} <sup>o</sup>C
          </p>
        </div>
        <div className="feed-top-2">
          <h3>{condition}</h3>
          <img src={`https://openweathermap.org/img/w/${icon}.png`} />
        </div>
      </div>
      <br />

      <div className="feed-bottom">
        <div>
          <h3>Humidity</h3>
          <p>{humidity}%</p>
        </div>

        <div>
          <h3>Pressure</h3>
          <p>{pressure} PHA</p>
        </div>

        <div>
          <h3>Max-temp</h3>
          <p>
            {temp_max}
            <sup>o</sup>C
          </p>
        </div>

        <div>
          <h3>Min-temp</h3>
          <p>
            {temp_min}
            <sup>o</sup>C
          </p>
        </div>
        <div>
          <h3>Wind</h3>
          <p>{speed} KMPH</p>
        </div>
      </div>
    </div>
  );
}

export default Feed;
