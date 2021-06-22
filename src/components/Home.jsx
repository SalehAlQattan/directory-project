// hooks
import { useState } from 'react'

const Home = () => {
  // time state
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const updateTime = () => {
    setTime(new Date().toLocaleTimeString());
  };
  // update time every second
  setTimeout(updateTime, 1000);
  return (
    <div>
      <h2>Welcom to the Movies Data Base</h2>
      <h3>Its time to watch movies</h3>
      <h3>{time}</h3>
    </div>
  )
}

export default Home
