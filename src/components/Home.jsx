// hooks
import { useState } from 'react'
// styles
import { HomeContainer } from '../styles'

const Home = () => {
  // time state
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const updateTime = () => {
    setTime(new Date().toLocaleTimeString());
  };
  // update time every second
  setTimeout(updateTime, 1000);
  return (
    <HomeContainer>
      <h1>{time}</h1>
      <h1>Welcom to the Movies Data Base</h1>
      <h1>Its time to watch movies</h1>
    </HomeContainer>
  )
}

export default Home
