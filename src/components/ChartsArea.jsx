import React from 'react';
import {connect} from 'react-redux';

import createDataArray from '../util/createDataArray';
import camelCaseToWords from '../util/camelCaseToWords';
import TypedText from './TypedText';
import ChartComponent from './ChartComponent';
import './ChartsArea.css';
import ChartSelector from './ChartSelector';

const ChartsArea = ({chartData, selectedChart}) => {
  const {countryNames, dataArray} = chartData;
  const chartTitle = camelCaseToWords(selectedChart);

  return (
    <div className="charts-area">
      <h2 className="charts-area__title header">
        <div className="charts-area__title__first">
          <i className="fas fa-spa icon"></i>
          <TypedText text={chartTitle} />
        </div>
        <ChartSelector>change</ChartSelector>
      </h2>
      <ChartComponent
        countryNames={countryNames}
        dataArray={dataArray}
        labelName={chartTitle}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  const {chartData, chartOptions} = state;

  //First, we sort the chart's data
  const sortedChartData = [...chartData];
  sortedChartData.sort(
    (a, b) => b[chartOptions.selectedChart] - a[chartOptions.selectedChart]
  );

  //then, we convert it into an array so that the Charts.js can read it.
  const countryNames = createDataArray(sortedChartData, 'country');
  const dataArray = createDataArray(
    sortedChartData,
    chartOptions.selectedChart
  );

  //Finally, we pass the data as props
  return {
    chartData: {
      countryNames,
      dataArray,
    },
    selectedChart: chartOptions.selectedChart,
  };
};

export default connect(mapStateToProps)(ChartsArea);
