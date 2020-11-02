import React, { useState, useEffect  } from 'react';
import { connect } from "react-redux";
import {imgCuriosity} from "../actions/index" 
//import tileData from './tileData';
 
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Box from '@material-ui/core/Box';

 

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

 
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 700,
    flexGrow: 1,
    alignItems: 'center',
  },
  
  img: {
    height: 450,
    display: 'block',    
    overflow: 'hidden',
    width: '100%',
    marginBottom: '10px',
  },
}));

 

function Curiosity({imgCuriosity, img_nasa}) {
  
  useEffect(() => {
    imgCuriosity();     
    },[])
 

    const classes = useStyles();
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = img_nasa.length;
  
    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
  
    const handleStepChange = (step) => {
      setActiveStep(step);
    };


  return (     
    
    <div>
      <Box mx="auto" bgcolor="background.paper" p={1}>  
        
         
        {img_nasa.length > 0 ? img_nasa.map((image, index) => (
           
          <div key={image}>
              <img className={classes.img} src={image.img_src} title={image.full_name}  />             
          </div>
        )): 'Ups! no se encontraron resultados con esos parametros de busqueda'}
        
      
      </Box>
    </div>
    
  );
}

const mapDispatchToProps = dispatch => {
  return {
    imgCuriosity: () => dispatch(imgCuriosity())
    
    
  }
}

const mapStateToProps = state => {
  return {
    img_nasa: state.img_nasa
     
    

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Curiosity);
