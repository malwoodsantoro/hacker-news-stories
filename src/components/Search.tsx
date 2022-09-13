import useLocalStorage from "../hooks/useLocalStorage"

const Search = () => {

  const [searchTerm, setSearchTerm] = useLocalStorage('search', 'React')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement> ) => {
    setSearchTerm(event.target.value);
  }

  return (
    <div>
      <label htmlFor="search"> Search: </label>
      <input id="search" type="text" value={searchTerm} onChange={handleChange}></input>
    </div>
  )
}

export default Search