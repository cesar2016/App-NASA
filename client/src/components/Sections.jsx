import React, { useState, useEffect  } from 'react';
import { connect } from "react-redux";
import {imgCuriosity, changeBoot} from "../actions/index" 
// ES6 Modules or TypeScript
//import Swal from 'sweetalert2'
import Curiosity from "./Curiosity"
 
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Button from '@material-ui/core/Button'; 
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';


import TextField from '@material-ui/core/TextField';
 
const currencies = [
  {
    value: 'curiosity',
    label: 'Curiosity',
  },
  {
    value: 'opportunity',
    label: 'Opportunity ',
  },
  {
    value: 'spirit',
    label: 'Spirit',
  }
   
];


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  margin: {
    margin: theme.spacing(1),
  },
}));


 function ControlledAccordions({changeBoot}) {

  useEffect(() => {    
    imgCuriosity()     
    },[])


    const [input, setInput] = useState({ dateHeart:'', nameBoot:''});

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  
 
   
  function handleSubmitBoot(e){
    e.preventDefault()     
    
    changeBoot(input )
    //console.log('LOS INTPUT ',input)
  }


  const classes = useStyles();
 
  return (

  <div className={classes.root}>
          
    <Grid container spacing={3}>
      
      <Grid item xs={9}>
        <Paper className={classes.paper}>
          <Curiosity></Curiosity>
        </Paper>
      </Grid>
      <Grid item xs={3}>
        <Paper className={classes.paper}>

        <div>
        <form onSubmit={handleSubmitBoot}>
        <TextField
          id="nameBoot"
          name="nameBoot"
          select
          label="Select Boot"
          //value={currency}
          onChange={handleChange}
          SelectProps={{
            native: true,
          }}
          helperText="Please select your currency"
        >
           <option>Select ...</option>
          {currencies.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
        <br></br>
        <TextField        
        id="dateHeart"
        name="dateHeart"
        label="Earth Day"
        type="date"
        onChange={handleChange}        
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <br></br>
      
        <Button
        variant="contained"
        color="primary"
        size="small"
        type="submit"               
        className={classes.button}
        startIcon={<SaveIcon />}
      >
        Save
      </Button>
        </form>
       
      </div>

        </Paper>
      </Grid>
       
    </Grid>
     
      
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    imgCuriosity: () => dispatch(imgCuriosity()),
    changeBoot: (input) => dispatch(changeBoot(input))
    
  }
}

const mapStateToProps = state => {
  return {
    img_nasa: state.img_nasa
     
    

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ControlledAccordions);
