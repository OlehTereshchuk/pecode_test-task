import React from 'react';
import Pagination from '@material-ui/lab/Pagination';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(5),
  },
}));

const CustomPagination = ({pages, changePage, activePage}) => {
  const classes = useStyles();

  return (
    <Pagination classes={{root: classes.root}} count={pages} color="primary" page={activePage} onChange={(e, page) => changePage(page)} />
  );
};

export default CustomPagination;
