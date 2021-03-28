import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  textField: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '50vw',
    marginBottom: 15,
  },
}));

const LocationsFilter = ({filters, setFilters}) => {
  const classes = useStyles();

  const handleChange = (event) => {
    setFilters({...filters, [event.target.name]: event.target.value, page: 1});
  }

  return (
    <div className={classes.textField}>
      <TextField name="name" label="Name" variant="outlined" onChange={handleChange} value={filters.name} />
      <TextField id="outlined-basic" name="type" label="Type" variant="outlined" onChange={handleChange} value={filters.type} />
      <TextField id="outlined-basic" name="dimension" label="Dimension" variant="outlined" onChange={handleChange} value={filters.dimension} />
    </div>
  );
};

export default LocationsFilter;