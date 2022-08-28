import React, { useState } from "react";
import { SearchInput, SearchWrapper } from "./SearchUi";
import Post from "../../features/post/Post";

interface SearchI {
  helloMessage: string;
  setSearchTerm(value: string): void;
}

const Search: React.FC<SearchI> = ({ helloMessage, setSearchTerm }) => {
  console.log(helloMessage + " " + Post.displayName);

  return (
    <SearchWrapper>
      <SearchInput
        type="text"
        placeholder="Search..."
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
    </SearchWrapper>
  );
};

Post.displayName = "Search";

export default Search;
