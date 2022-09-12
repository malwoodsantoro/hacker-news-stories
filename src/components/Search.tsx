const Search = () => {

  const handleChange = (event: React.ChangeEvent<HTMLInputElement> ) => {
    console.log(event.target.value)
  }

  return (
    <div>
      <label htmlFor="search"> Search: </label>
      <input id="search" type="search" onChange={handleChange}></input>
    </div>
  )
}

export default Search