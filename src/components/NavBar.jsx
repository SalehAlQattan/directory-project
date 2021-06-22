// styles
import { Navigation, HomeLink } from "../styles"

const NavBar = () => {
  return (
    <Navigation>
      <HomeLink exact to='/'>Home</HomeLink>
      <HomeLink to='/movies'>Movies</HomeLink>
    </Navigation>
  )
}

export default NavBar
