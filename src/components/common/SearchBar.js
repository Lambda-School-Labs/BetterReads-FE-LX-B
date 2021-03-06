import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import PropTypes from "prop-types";
import { Button } from "./index";

const SearchBar = props => {
  const [searchQuery, setSearchQuery] = useState();

  const history = useHistory();

  return (
    <>
      <input
        type="text"
        id={props.labelId}
        name={props.name}
        placeholder={props.placeholder}
        onChange={e => setSearchQuery(e.target.value)}
      />
      <Button
        buttonText="Search"
        handleClick={() =>
          history.push({ pathname: "/search", query: searchQuery })
        }
      />
    </>
  );
};

export default SearchBar;

SearchBar.propTypes = {
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  labelId: PropTypes.string.isRequired
};
