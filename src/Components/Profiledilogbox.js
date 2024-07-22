import React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import Imports from './Imports';
import { useMediaQuery } from '@mui/material';

const ProfileDialog = ({ open, onClose }) => {
  const [firstName, setFirstName] = Imports.useState(localStorage.getItem('firstName') || '');
  const [lastName, setLastName] = Imports.useState(localStorage.getItem('lastName') || '');
  const [selectedDate, setSelectedDate] = Imports.useState(null);

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  React.useEffect(() => {
    localStorage.setItem('firstName', firstName);
  }, [firstName]);

  React.useEffect(() => {
    localStorage.setItem('lastName', lastName);
  }, [lastName]);

  Imports.useEffect(() => {
    if (selectedDate) {
      const dateOnly = dayjs(selectedDate).format('D/M/YYYY');
      localStorage.setItem('date', dateOnly);
    }
  }, [selectedDate]);

  const isSmallScreen = useMediaQuery(theme => theme.breakpoints.down('sm'));

  return (
    <Imports.Grid>
      <Imports.Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
        <Imports.DialogTitle id="form-dialog-title">Basic Details</Imports.DialogTitle>
        <Imports.DialogContent>
          <Imports.Grid container spacing={2} direction={isSmallScreen ? 'column' : 'row'}>
            <Imports.Grid item xs={12} sm={5}>
              <Imports.TextField
                required
                id="first-name"
                label="First Name"
                value={firstName}
                onChange={handleFirstNameChange}
                margin="dense"
                fullWidth
              />
            </Imports.Grid>
            <Imports.Grid item xs={12} sm={6}>
              <Imports.TextField
                required
                id="last-name"
                label="Last Name"
                value={lastName}
                onChange={handleLastNameChange}
                margin="dense"
                fullWidth
              />
            </Imports.Grid>
            <Imports.Grid item xs={12} sm={10}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Select Date of Birth"
                  value={selectedDate}
                  onChange={handleDateChange}
                  renderInput={(params) => <Imports.TextField {...params} margin="dense" fullWidth />}
                />
              </LocalizationProvider>
            </Imports.Grid>
          </Imports.Grid>
          <Imports.Grid container justifyContent="center" alignItems="center" sx={{ mt: 2 }}>
            <Imports.Button onClick={onClose} variant='contained' sx={{ backgroundColor:'#DA1C5C' }}>
              Done
            </Imports.Button>
          </Imports.Grid>
        </Imports.DialogContent>
      </Imports.Dialog>
    </Imports.Grid>
  );
};

export default ProfileDialog;
