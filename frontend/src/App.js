import React, { Component } from 'react';
import './App.css';
import Button from 'antd/lib/button';
import { LineChart, Line, XAxis } from 'recharts';

import bitcoinPrice from './bitcoinprice.json';
import boitcoinTrend from './bitcointrend.json';

class App extends Component {
  getBitcoinPrices(startDate, endDate) {
    // startDate form 2013-09-01
    // endDate form 2013-09-05
    //https://api.coindesk.com/v1/bpi/historical/close.json?start=2013-09-01&end=2013-09-05
    var apiEndpoint = "https://api.coindesk.com/v1/bpi/historical/close.json?start="+startDate+"&end="+endDate;
    /* $.getJSON(apiEndpoint)
      .then(({ results }) => this.setState({ bitcoinPrices: results })); */
  }

  apiCall() {
    /*fetch('https://api.coindesk.com/v1/bpi/historical/close.json?start=2010-07-17&end=2017-11-01')
      .then((result) => {
        // Get the result
        // If we want text, call result.text()
        return result.json();
      }).then((jsonResult) => {
        // Do something with the result
        console.log(jsonResult);
      })*/
      var finalObjects = {};
      var counter = 0;
      for (var i =0; i < Object.keys(bitcoinPrice.bpi).length; i++ ) {
        if (Object.keys(bitcoinPrice.bpi)[i].substring(8,10) == "01") {
          finalObjects[Object.keys(bitcoinPrice.bpi)[i]] = bitcoinPrice.bpi[Object.keys(bitcoinPrice.bpi)[i]];
          boitcoinTrend[counter].price = bitcoinPrice.bpi[Object.keys(bitcoinPrice.bpi)[i]] / 100;
          counter++;
        }
      }

      console.log(boitcoinTrend);

  }

  getTwitterTrends(startDate, endDate, interval) {

  }
  render() {
    this.apiCall();
    return (
      <div className="App">
        <p className="App-intro">
          Red: price (/100)<br/>
          Blue: trend
        </p>
        <LineChart width={1400} height={400} data={boitcoinTrend}>
          <Line type="monotone" dataKey="trend" stroke="#8884d8" />
          <Line type="monotone" dataKey="price" stroke="#c0392b" />
          <XAxis dataKey="name" />
        </LineChart>

      </div>
    );
  }
}

export default App;
