import React, { useState } from 'react';
import './SearchInput.css';

const SearchInput = ({ onSearch, cities = [] }) => {
  const [searchValue, setSearchValue] = useState('');
  const [filteredCities, setFilteredCities] = useState([]);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleSearchChange = (e) => {
    const inputValue = e.target.value;
    setSearchValue(inputValue);

    if (inputValue.trim()) {
      const filtered = cities.filter(city =>
        city.toLowerCase().includes(inputValue.toLowerCase())
      );
      console.log(filtered); // Debugging to check filtered results
      setFilteredCities(filtered);
      setDropdownVisible(filtered.length > 0); // Show dropdown if cities found
    } else {
      setDropdownVisible(false); // Hide dropdown if no input
    }
  };

  const handleCitySelect = (city) => {
    console.log(`City selected: ${city}`); // Debug log
    setSearchValue(city);
    setDropdownVisible(false);
    onSearch(city); // Call parent function
  };

  return (
    <div className="search-input">
      <input
        type="text"
        value={searchValue}
        onChange={handleSearchChange}
        placeholder="Search city..."
      />
      {dropdownVisible && filteredCities.length > 0 && (
        <div className="dropdown-modal">
          {filteredCities.map((city, index) => (
            <div
              key={index}
              className="dropdown-item"
              onClick={() => handleCitySelect(city)}
            >
              {city}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchInput;
