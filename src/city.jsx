import React, { useState, useEffect } from "react";

function City(props) {
  const [time, setTime] = useState("");
  
  function updateTime() {
    const options = {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
      timeZone: props.zone,
      timeZoneName: "short"
    };

    const currentTime = new Date();
    let formattedTime = new Intl.DateTimeFormat("en-US", options).format(
      currentTime
    );

    
    formattedTime = formattedTime.replace(/([AP]M)/, "$1,");

    setTime(formattedTime);
  }

  useEffect(() => {
    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, [props.zone]); 

  return (
    <div className="container">
      <button onClick={updateTime}>
        {props.city}, {props.country}
      </button>
      <h1>{time}</h1>
      <hr />
    </div>
  );
}

export default City;