import axios from "axios";
import {
  PRUEBA_API,
  CHANGE_BOOT
     
   
} from "../actions/index";

const initialState = {
  img_nasa: [],
  
   
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case PRUEBA_API:
      return {
        ...state,
        img_nasa: action.payload,
      };
    case CHANGE_BOOT:
      return {
        ...state,       
        //img_nasa:  [...state.img_nasa, action.payload],
        img_nasa: action.payload,
      };
    
    

    default:
      return state;
  }
};////

 

export default reducer;