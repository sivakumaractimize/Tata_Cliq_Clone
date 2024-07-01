import * as React from 'react';



import Imports from './Imports';
const SortIconMenu = () => {
  return (
    <Imports.Paper sx={{ 
      width: '100%', 
      maxWidth: '100%', 
      zIndex: 1300, 
      position: 'sticky', 
      top: '13vh'
    }}> 
      <Imports.MenuList sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Imports.MenuItem>
          <Imports.ListItemIcon>
            <Imports.SortIcon fontSize="small" />
          </Imports.ListItemIcon>
          <Imports.ListItemText>Sort</Imports.ListItemText>
        </Imports.MenuItem>
        <Imports.MenuItem>
          <Imports.ListItemIcon>
            <Imports.TuneIcon fontSize="small" />
          </Imports.ListItemIcon>
          <Imports.ListItemText>Filter</Imports.ListItemText>
        </Imports.MenuItem>
      </Imports.MenuList>
    </Imports.Paper>
  );
}

export default SortIconMenu;
