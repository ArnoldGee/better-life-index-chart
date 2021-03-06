import {combineReducers} from 'redux'
import types from '../types'

// This reducer puts all the CSV data into a single JSON file 
const chartDataReducer = (state = [], { type, payload }) => {
  switch (type) {
  case types.ADD_CHART_DATA:
    return payload
  default:
    return state
  }
}

const initialChartOptions = {
  selectedChart: '',
  options: []
}

// This reducer handles the selected chart. Initially it's 'lifeSatisfaction'
const chartOptionsReducer = (state = initialChartOptions, { type, payload }) => {
  switch (type) {
  case types.ADD_CHART_DATA:
    const options = Object.keys(payload[0])
    options.shift() // Remove the "country" tag
    return {
      selectedChart: 'lifeSatisfaction',
      options
    }
  case types.CHANGE_SELECTED_CHART:
    return {
      selectedChart: payload,
      options: state.options
    }
  default:
    return state
  }
}


export default combineReducers({
  chartData: chartDataReducer,
  chartOptions: chartOptionsReducer
})
