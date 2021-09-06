import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '80ch',
  },
 
}));

export default function LayoutTextFields() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <TextField
          id="outlined-full-width"
          label="Enter Url"
          style={{ margin: 8 }}
          placeholder="Enter URL || Ex: https://deveng.ip.devcerner.net/retrieve_by_organization/0540"
          className={classes.textField}
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
        <Button variant="contained" color="primary"  style={{ margin: 8, padding: 14, background: '#1976d2' }} >
        Submit
      </Button>
    </div>
  );
}
