import { useState } from "react";

function Search({ onSubmit }) {
  const [value, setValue] = useState('');

  return (
    <>
      <input
        type="text"
        value={value}
        placeholder="Enter city name"
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="button" onClick={() => onSubmit(value)}>Search</button>
    </>
  )
}

export default Search;
