import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import {addChartData} from './actions';
import getData from './util/getData';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import ChartsArea from './components/ChartsArea';
import './App.css';
import Footer from './components/Footer';


const App = ({addChartData}) => {
  
  useEffect(() => { // First, we get the data from the the file's CSV and add it to the App's state
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
      <Footer />
    </div>
  );
};

export default connect(undefined, {addChartData})(App);
