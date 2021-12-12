import { useState } from "react";

function Search({ onSubmit }) {
  const [value, setValue] = useState('');

  return (
    <div className="search">
      <input
        type="text"
        value={value}
        placeholder="Enter city name"
        onChange={(e) => setValue(e.target.value)}
      />
      <button disabled={!value} type="button" onClick={() => onSubmit(value)}>Search</button>
    </div>
  )
}

export default Search;
