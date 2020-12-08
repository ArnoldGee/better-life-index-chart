/********************************************************************************************************
 * This utility function converts the data to an array, so that it can be read by the charts.js library *
 ********************************************************************************************************/

 export default function createDataArray(data, selector){
   return data.map(entry => entry[selector])
 }