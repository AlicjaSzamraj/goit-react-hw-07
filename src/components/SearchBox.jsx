import React from "react";
import styles from "./SearchBox.module.css";
import { useDispatch } from "react-redux";
import { setFilter } from "../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();

  const handleSearch = (searchQuery) => {
    dispatch(setFilter(searchQuery));
  };

  return (
    <div>
      <label htmlFor="search">Find contacts by name</label>
      <input
        className={styles.input}
        type="text"
        id="search"
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
