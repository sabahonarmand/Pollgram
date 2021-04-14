import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
    
const useStyle = makeStyles((theme) => ({
  container: {}
}));
    
const Button = () => {
  const classes = useStyle();
  return (
    <div className={classes.container}>
    Button
    </div>
  );
};
    
export default Button;
    