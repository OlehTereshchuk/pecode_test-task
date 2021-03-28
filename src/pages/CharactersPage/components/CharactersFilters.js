import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    margin: theme.spacing(3),
    position: 'absolute',
    left: 0,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectors: {
    marginBottom: 10,
  }
}));

const CharactersFilters = ({setFilters, filters}) => {
  const classes = useStyles();

  const handleChange = (event) => {
    if (event.target.value === filters[event.target.name]) {
      setFilters({...filters, [event.target.name]: '', page: 1});

      return;
    }

    setFilters({...filters, [event.target.name]: event.target.value, page: 1});
  };

  return (
    <div className={classes.root}>
      <div className={classes.selectors}>
        <FormControl className={classes.formControl}>
          <InputLabel>Status</InputLabel>
          <Select
            value={filters.status}
            onChange={handleChange}
            name="status"
          >
            <MenuItem value="">None</MenuItem>
            <MenuItem value="alive">Alive</MenuItem>
            <MenuItem value="dead">Dead</MenuItem>
            <MenuItem value="unknown">Unknown</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel>Gender</InputLabel>
          <Select
            value={filters.gender}
            onChange={handleChange}
            name="gender"
          >
            <MenuItem value="">None</MenuItem>
            <MenuItem value="female">Female</MenuItem>
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="genderless">Genderless</MenuItem>
            <MenuItem value="unknown">Unknown</MenuItem>
          </Select>
        </FormControl>
      </div>
      <TextField name="species" label="Species" variant="outlined" onChange={handleChange} value={filters.species} />
    </div>
  );
}

export default CharactersFilters;