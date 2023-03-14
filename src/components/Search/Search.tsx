import React, { useState } from 'react';
import './Search.less'

// interface SearchProps {
//   searchText: string;
// }

const Search = () => {
    const [value, setValue] = useState('')
  return (
    <div className="search">
        <input type="text" placeholder='Find a user' value={value} onChange={(e) => setValue(e.target.value)} />
    </div>
  );
};

export default Search;
