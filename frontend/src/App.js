import React, { Component } from 'react';
import './App.css';
import Button from 'antd/lib/button';
import { LineChart, Line, XAxis } from 'recharts';

import myData from './bitcoinprice.json';

// this would be retrieved by the API
const data = [
  {name: '2010-08', trend:	0},
  {name: '2010-09', trend:	0},
  {name: '2010-10', trend:	0},
  {name: '2010-11', trend:	0},
  {name: '2010-12', trend:	0},
  {name: '2011-01', trend:	0},
  {name: '2011-02', trend:	0},
  {name: '2011-03', trend:	0},
  {name: '2011-04', trend:	0},
  {name: '2011-05', trend:	2},
  {name: '2011-06', trend:	6},
  {name: '2011-07', trend:	3},
  {name: '2011-08', trend:	2},
  {name: '2011-09', trend:	2},
  {name: '2011-10', trend:	1},
  {name: '2011-11', trend:	1},
  {name: '2011-12', trend:	1},
  {name: '2012-01', trend:	1},
  {name: '2012-02', trend:	1},
  {name: '2012-03', trend:	1},
  {name: '2012-04', trend:	1},
  {name: '2012-05', trend:	1},
  {name: '2012-06', trend:	1},
  {name: '2012-07', trend:	1},
  {name: '2012-08', trend:	1},
  {name: '2012-09', trend:	1},
  {name: '2012-10', trend:	1},
  {name: '2012-11', trend:	1},
  {name: '2012-12', trend:	1},
  {name: '2013-01', trend:	2},
  {name: '2013-02', trend:	2},
  {name: '2013-03', trend:	6},
  {name: '2013-04', trend:	18},
  {name: '2013-05', trend:	7},
  {name: '2013-06', trend:	5},
  {name: '2013-07', trend:	5},
  {name: '2013-08', trend:	5},
  {name: '2013-09', trend:	4},
  {name: '2013-10', trend:	7},
  {name: '2013-11', trend:	25},
  {name: '2013-12', trend:	28},
  {name: '2014-01', trend:	19},
  {name: '2014-02', trend:	21},
  {name: '2014-03', trend:	16},
  {name: '2014-04', trend:	9},
  {name: '2014-05', trend:	7},
  {name: '2014-06', trend:	7},
  {name: '2014-07', trend:	7},
  {name: '2014-08', trend:	7},
  {name: '2014-09', trend:	7},
  {name: '2014-10', trend:	7},
  {name: '2014-11', trend:	6},
  {name: '2014-12', trend:	7},
  {name: '2015-01', trend:	7},
  {name: '2015-02', trend:	7},
  {name: '2015-03', trend:	6},
  {name: '2015-04', trend:	6},
  {name: '2015-05', trend:	5},
  {name: '2015-06', trend:	6},
  {name: '2015-07', trend:	7},
  {name: '2015-08', trend:	6},
  {name: '2015-09', trend:	6},
  {name: '2015-10', trend:	6},
  {name: '2015-11', trend:	8},
  {name: '2015-12', trend:	8},
  {name: '2016-01', trend:	8},
  {name: '2016-02', trend:	7},
  {name: '2016-03', trend:	7},
  {name: '2016-04', trend:	7},
  {name: '2016-05', trend:	9},
  {name: '2016-06', trend:	11},
  {name: '2016-07', trend:	8},
  {name: '2016-08', trend:	8},
  {name: '2016-09', trend:	7},
  {name: '2016-10', trend:	8},
  {name: '2016-11', trend:	10},
  {name: '2016-12', trend:	11},
  {name: '2017-01', trend:	15},
  {name: '2017-02', trend:	13},
  {name: '2017-03', trend:	17},
  {name: '2017-04', trend:	14},
  {name: '2017-05', trend:	35},
  {name: '2017-06', trend:	35},
  {name: '2017-07', trend:	30},
  {name: '2017-08', trend:	49},
  {name: '2017-09', trend:	50},
  {name: '2017-10', trend:	53},
  {name: '2017-11', trend:	100},
];


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
      for (var i =0; i < Object.keys(myData.bpi).length; i++ ) {
        if (Object.keys(myData.bpi)[i].substring(8,10) == "01") {
          finalObjects[Object.keys(myData.bpi)[i]] = myData.bpi[Object.keys(myData.bpi)[i]];
          data[counter].price = myData.bpi[Object.keys(myData.bpi)[i]] / 100;
          counter++;
        }
      }

      console.log(data);

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
        <LineChart width={1400} height={400} data={data}>
          <Line type="monotone" dataKey="trend" stroke="#8884d8" />
          <Line type="monotone" dataKey="price" stroke="#c0392b" />
          <XAxis dataKey="name" />
        </LineChart>

      </div>
    );
  }
}

export default App;
