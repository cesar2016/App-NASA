import axios from "axios";
import Curiosity from "../components/Curiosity";

export const PRUEBA_API = "PRUEBA_API";
export const CHANGE_BOOT = "CHANGE_BOOT"; 
 


export function imgCuriosity () { 
 
    return function(dispatch) {     
    return axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=AKZr6tq7XfsgsYetGMTjWtZTXZCDrDPbScUMtGVh`)
        .then(result => result.data)
        .then(data => {
          dispatch({
            type: PRUEBA_API,
            payload: data.photos
          })
          //console.log("El Actions ",data.photos[0].img_src)
        })
    };
     
  }

  export function changeBoot (boot) { 

      return function(dispatch) {  
          
        return axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/${boot.nameBoot ? boot.nameBoot : 'curiosity'}/photos?earth_date=${boot.dateHeart ? boot.dateHeart : '2015-6-3'}&api_key=AKZr6tq7XfsgsYetGMTjWtZTXZCDrDPbScUMtGVh `)
          .then(result => result.data)
          .then(data => {
            dispatch({
              type: CHANGE_BOOT,
              payload: data.photos
            })
            console.log("Y responde ", data)
          })
      };
       
    }


 