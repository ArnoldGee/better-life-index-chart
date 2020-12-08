import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import {addChartData} from './actions';
import getData from './util/getData';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import ChartsArea from './components/ChartsArea';
import './App.css';


const App = ({addChartData}) => {
  useEffect(() => {
    getData()
      .then((object) => object.data)
      .then((data) => {
        addChartData(data);
      });
  }, [addChartData]);
  return (
    <div>
      <Navbar />
      <Hero />
      <ChartsArea />
    </div>
  );
};

export default connect(undefined, {addChartData})(App);
