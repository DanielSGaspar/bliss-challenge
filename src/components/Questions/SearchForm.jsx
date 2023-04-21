import { useState } from "react";
import { useNavigate, createSearchParams } from "react-router-dom";

const SearchForm = ({ initialValue }) => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState(initialValue)

  const handleFilterChange = (event) => {
    const {
      target: { value }
    } = event;

    setFilter(value)
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    navigate({
      pathname: "/questions",
      search: `?${createSearchParams({ filter })}`
    })
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={filter} onChange={handleFilterChange} />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
