"use client";
import Form from "next/form";
import { useState } from "react";
import ResetButton from "./ResetButton";
const SearchForm = () => {
  const [query, setQuery] = useState("Startup abc");
  const handlechange = (e: React.MouseEvent) => {
    e.preventDefault();
    setQuery("");
  };
  return (
    <Form className="search-form" action="/">
      <input
        className="search-input "
        placeholder="Search Startups"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
      {query && <ResetButton handlechange={handlechange} />}
      <button className="search-button right-3 " type="submit" onClick={handlechange}>
        S
      </button>
    </Form>
  );
};

export default SearchForm;
