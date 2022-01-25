import React, { useState } from "react";

function Search( {handleSearchNarrowList} ) {

const [ currentSearch, setCurrentSearch ] = useState("")

const handleSearchInput = (e) => {
  console.log(e.target.value)
  const searchText = (e.target.value)
  setCurrentSearch(searchText)
  handleSearchNarrowList(currentSearch)
}

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" onChange={handleSearchInput}/>
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
