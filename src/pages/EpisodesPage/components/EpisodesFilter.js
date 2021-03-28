import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  textField: {
    width: '50vw',
    marginBottom: 15
  },
}));

const EpisodesFilter = ({filters, setFilters}) => {
  const classes = useStyles();

  const handleChange = (event) => {
    setFilters({name: event.target.value, page: 1});
  }

  return (
    <TextField classes={{root: classes.textField}} name="name" label="Name" variant="outlined" onChange={handleChange} value={filters.name} />
  );
};

export default EpisodesFilter;