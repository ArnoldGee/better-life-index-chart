import React, {useState, useEffect, useRef} from 'react';
import {connect} from 'react-redux';

import {changeSelectedChart} from '../actions'

import camelCaseToWords from '../util/camelCaseToWords'
import './ChartSelector.css';

const ChartSelector = ({children, chartOptions, selectedChart, changeSelectedChart}) => {
  const [open, setOpen] = useState(false);

  // Thanks to these useRef and useEffect hooks, you can click outside the dropdown... and it closes!
  const dropdownRef = useRef();
  useEffect(() => {
    const onBodyClick = (event) => {
      if (dropdownRef.current && dropdownRef.current.contains(event.target)) {
        return;
      }
      console.log(dropdownRef.current)
      setOpen(false);
    };
    document.body.addEventListener('click', onBodyClick);
    return () => {
      document.body.removeEventListener('click', onBodyClick)
    }
  }, []);

  // First, we get the chart options to display
  const displayedOptions = chartOptions.map((option) => {
    const selected = option === selectedChart
    return (
      <div
        key={option}
        onClick={() => {
          setOpen(!open)
          changeSelectedChart(option)
        }}
        className={`text chart-selector__options__option ${
          selected &&
          'chart-selector__options__option--selected'
        }`}
      >
        {selected && <i className="icon fas fa-chevron-right"/>}
        {camelCaseToWords(option)}
      </div>
    );
  });

  return (
    <span ref={dropdownRef} className="chart-selector">
      <span onClick={() => setOpen(!open)}>
        <i
          className={`icon fas fa-chevron-right chart-selector__chevron ${
            open && 'chart-selector__chevron--open'
          }`}
        ></i>
        {children}
      </span>
      {open && (
        <div className="chart-selector__options">{displayedOptions}</div>
      )}
    </span>
  );
};

const mapStateToProps = (state) => {
  const {options, selectedChart} = state.chartOptions;
  return {
    chartOptions: options,
    selectedChart,
  };
};

export default connect(mapStateToProps, {changeSelectedChart})(ChartSelector);
