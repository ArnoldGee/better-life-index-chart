import React, {useEffect} from 'react'

import getData from '../util/getData'
import ChartComponent from './ChartComponent'

const ChartsArea = () => {
  useEffect(()=> {
    getData().then(object => {
      console.log(object);
    })
  }, [])
  return (
    <div className="charts-area">
      <ChartComponent />
    </div>
  )
}

export default ChartsArea
