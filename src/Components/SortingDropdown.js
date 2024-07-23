import React   from 'react';


import Imports from './Imports';
import { Height } from '@mui/icons-material';

const SortingDropdown = () => {
  const [sortValue, setSortValue] = Imports.useState('popularity');

  const handleChange = (event) => {
    setSortValue(event.target.value);
  };

  return (
    <Imports.FormControl variant="outlined" fullWidth>
     
      <Imports.Select
        value={sortValue}
        onChange={handleChange}
        
        IconComponent={Imports.FilterListIcon} 
        sx={{textAlign:"start",fontSize:{sm:'12px',md:'15px' }, height:{sm:'25px', md:'35px'} } }
      >
        <Imports.MenuItem sx={{fontSize:{sm:'12px',md:'15px' }}} value="popularity"> Sort by : Popularity</Imports.MenuItem>
        <Imports.MenuItem sx={{fontSize:{sm:'12px',md:'15px' }}} value="priceLowHigh">Price Low to High</Imports.MenuItem>
        <Imports.MenuItem sx={{fontSize:{sm:'12px',md:'15px' }}} value="priceHighLow">Price High to Low</Imports.MenuItem>
        <Imports.MenuItem sx={{fontSize:{sm:'12px',md:'15px' }}} value="newArrivals">New Arrivals</Imports.MenuItem>
        <Imports.MenuItem sx={{fontSize:{sm:'12px',md:'15px' }}} value="discounts">Discounts</Imports.MenuItem>
      </Imports.Select>
    </Imports.FormControl>
  );
};

export default SortingDropdown;
