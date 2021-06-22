// styles
import { InputField } from "../styles"

const SearchBar = ({ setQuery }) => {
  return (
    <InputField
      style={{margin: '3rem'}}
      onChange={(event) => setQuery(event.target.value)}
      placeholder='Search For Movie...'

    />
  )
}

export default SearchBar
