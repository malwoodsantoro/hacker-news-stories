interface Props {
  term: string;
  onSearch: React.ChangeEventHandler<HTMLInputElement>;
}

const Search = ({ term, onSearch }: Props) => {
  return (
    <div>
      <label htmlFor="search"> Search: </label>
      <input id="search" type="text" value={term} onChange={onSearch}></input>
    </div>
  );
};

export default Search;
