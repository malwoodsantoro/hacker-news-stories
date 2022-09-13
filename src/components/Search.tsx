interface Props {
  term: string;
  onSearch: React.ChangeEventHandler<HTMLInputElement>;
}

const Search = ({ term, onSearch }: Props) => {
  return (
    <>
      <label htmlFor="search"> Search: </label>
      <input id="search" type="text" value={term} onChange={onSearch}></input>
    </>
  );
};

export default Search;
