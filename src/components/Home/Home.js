import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import axios from "axios";
import Feed from "../Feed/Feed";
import "./Home.css";

function Home() {
  const [weath, setWeath] = useState("");

  const KEY = "9a0c6342f6920368ab29b5c528e370a5";
  const city = "london";
  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}`
      )
      .then((res) => {
        setWeath(res.data);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const backgroundColor = () => {
    const date = new Date();
    let hours = date.getHours();
    let mins = date.getMinutes();

    // if time between 6AM TO 5PM
    if (hours >= 6 && hours < 17) {
      return "night";

      // if time between 5PM TO 7:30PM
    } else if ((hours >= 17 && hours <= 18) || (hours == 19 && mins <= 30)) {
      return "evng";

      // if time between  7:30PM to 6Am
    } else {
      return "night";
    }
  };

  const backgroundImage = () => {
    if (weath && weath.weather[0].main === "Rain") {
      return "rain";
    }

    if (weath && weath.weather[0].main === "Stormy") {
      return "stormy";
    }
  };
  return (
    <div className="container">
      <div className={backgroundImage()}>
        <Header />
        {weath && <Feed data={weath} />}
      </div>
    </div>
  );
}

export default Home;
