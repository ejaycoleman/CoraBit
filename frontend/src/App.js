import React, { Component } from 'react';
import './App.css';
import Button from 'antd/lib/button';
import { LineChart, Line, XAxis } from 'recharts';

// this would be retrieved by the API
const data = [
{name: '2004-01', trend:	0, price: 18},
{name: '2004-02', trend:	0, price: 18},
{name: '2004-03', trend:	0, price: 18},
{name: '2004-04', trend:	0, price: 18},
{name: '2004-05', trend:	0, price: 18},
{name: '2004-06', trend:	0, price: 18},
{name: '2004-07', trend:	0, price: 18},
{name: '2004-08', trend:	0, price: 18},
{name: '2004-09', trend:	0, price: 18},
{name: '2004-10', trend:	0, price: 18},
{name: '2004-11', trend:	0, price: 18},
{name: '2004-12', trend:	0, price: 18},
{name: '2005-01', trend:	0, price: 18},
{name: '2005-02', trend:	0, price: 18},
{name: '2005-03', trend:	0, price: 18},
{name: '2005-04', trend:	0, price: 18},
{name: '2005-05', trend:	0, price: 18},
{name: '2005-06', trend:	0, price: 18},
{name: '2005-07', trend:	0, price: 18},
{name: '2005-08', trend:	0, price: 18},
{name: '2005-09', trend:	0, price: 18},
{name: '2005-10', trend:	0, price: 18},
{name: '2005-11', trend:	0, price: 18},
{name: '2005-12', trend:	0, price: 18},
{name: '2006-01', trend:	0, price: 18},
{name: '2006-02', trend:	0, price: 18},
{name: '2006-03', trend:	0, price: 18},
{name: '2006-04', trend:	0, price: 18},
{name: '2006-05', trend:	0, price: 18},
{name: '2006-06', trend:	0, price: 18},
{name: '2006-07', trend:	0, price: 18},
{name: '2006-08', trend:	0, price: 18},
{name: '2006-09', trend:	0, price: 18},
{name: '2006-10', trend:	0, price: 18},
{name: '2006-11', trend:	0, price: 18},
{name: '2006-12', trend:	0, price: 18},
{name: '2007-01', trend:	0, price: 18},
{name: '2007-02', trend:	0, price: 18},
{name: '2007-03', trend:	0, price: 18},
{name: '2007-04', trend:	0, price: 18},
{name: '2007-05', trend:	0, price: 18},
{name: '2007-06', trend:	0, price: 18},
{name: '2007-07', trend:	0, price: 18},
{name: '2007-08', trend:	0, price: 18},
{name: '2007-09', trend:	0, price: 18},
{name: '2007-10', trend:	0, price: 18},
{name: '2007-11', trend:	0, price: 18},
{name: '2007-12', trend:	0, price: 18},
{name: '2008-01', trend:	0, price: 18},
{name: '2008-02', trend:	0, price: 18},
{name: '2008-03', trend:	0, price: 18},
{name: '2008-04', trend:	0, price: 18},
{name: '2008-05', trend:	0, price: 18},
{name: '2008-06', trend:	0, price: 18},
{name: '2008-07', trend:	0, price: 18},
{name: '2008-08', trend:	0, price: 18},
{name: '2008-09', trend:	0, price: 18},
{name: '2008-10', trend:	0, price: 18},
{name: '2008-11', trend:	0, price: 18},
{name: '2008-12', trend:	0, price: 18},
{name: '2009-01', trend:	0, price: 18},
{name: '2009-02', trend:	0, price: 18},
{name: '2009-03', trend:	0, price: 18},
{name: '2009-04', trend:	0, price: 18},
{name: '2009-05', trend:	0, price: 18},
{name: '2009-06', trend:	0, price: 18},
{name: '2009-07', trend:	0, price: 18},
{name: '2009-08', trend:	0, price: 18},
{name: '2009-09', trend:	0, price: 18},
{name: '2009-10', trend:	0, price: 18},
{name: '2009-11', trend:	0, price: 18},
{name: '2009-12', trend:	0, price: 18},
{name: '2010-01', trend:	0, price: 18},
{name: '2010-02', trend:	0, price: 18},
{name: '2010-03', trend:	0, price: 18},
{name: '2010-04', trend:	0, price: 18},
{name: '2010-05', trend:	0, price: 18},
{name: '2010-06', trend:	0, price: 18},
{name: '2010-07', trend:	0, price: 18},
{name: '2010-08', trend:	0, price: 18},
{name: '2010-09', trend:	0, price: 18},
{name: '2010-10', trend:	0, price: 18},
{name: '2010-11', trend:	0, price: 18},
{name: '2010-12', trend:	0, price: 18},
{name: '2011-01', trend:	0, price: 18},
{name: '2011-02', trend:	0, price: 18},
{name: '2011-03', trend:	0, price: 18},
{name: '2011-04', trend:	0, price: 18},
{name: '2011-05', trend:	2, price: 18},
{name: '2011-06', trend:	6, price: 18},
{name: '2011-07', trend:	3, price: 18},
{name: '2011-08', trend:	2, price: 18},
{name: '2011-09', trend:	2, price: 18},
{name: '2011-10', trend:	1, price: 18},
{name: '2011-11', trend:	1, price: 18},
{name: '2011-12', trend:	1, price: 18},
{name: '2012-01', trend:	1, price: 18},
{name: '2012-02', trend:	1, price: 18},
{name: '2012-03', trend:	1, price: 18},
{name: '2012-04', trend:	1, price: 18},
{name: '2012-05', trend:	1, price: 18},
{name: '2012-06', trend:	1, price: 18},
{name: '2012-07', trend:	1, price: 18},
{name: '2012-08', trend:	1, price: 18},
{name: '2012-09', trend:	1, price: 18},
{name: '2012-10', trend:	1, price: 18},
{name: '2012-11', trend:	1, price: 18},
{name: '2012-12', trend:	1, price: 18},
{name: '2013-01', trend:	2, price: 18},
{name: '2013-02', trend:	2, price: 18},
{name: '2013-03', trend:	6, price: 18},
{name: '2013-04', trend:	18, price: 18},
{name: '2013-05', trend:	7, price: 15},
{name: '2013-06', trend:	5, price: 15},
{name: '2013-07', trend:	5, price: 15},
{name: '2013-08', trend:	5, price: 15},
{name: '2013-09', trend:	4, price: 15},
{name: '2013-10', trend:	7, price: 15},
{name: '2013-11', trend:	25, price: 12},
{name: '2013-12', trend:	28, price: 12},
{name: '2014-01', trend:	19, price: 12},
{name: '2014-02', trend:	21, price: 12},
{name: '2014-03', trend:	16, price: 12},
{name: '2014-04', trend:	9, price: 19},
{name: '2014-05', trend:	7, price: 19},
{name: '2014-06', trend:	7, price: 19},
{name: '2014-07', trend:	7, price: 19},
{name: '2014-08', trend:	7, price: 19},
{name: '2014-09', trend:	7, price: 19},
{name: '2014-10', trend:	7, price: 19},
{name: '2014-11', trend:	6, price: 19},
{name: '2014-12', trend:	7, price: 19},
{name: '2015-01', trend:	7, price: 19},
{name: '2015-02', trend:	7, price: 19},
{name: '2015-03', trend:	6, price: 19},
{name: '2015-04', trend:	6, price: 19},
{name: '2015-05', trend:	5, price: 19},
{name: '2015-06', trend:	6, price: 19},
{name: '2015-07', trend:	7, price: 19},
{name: '2015-08', trend:	6, price: 19},
{name: '2015-09', trend:	6, price: 19},
{name: '2015-10', trend:	6, price: 19},
{name: '2015-11', trend:	8, price: 19},
{name: '2015-12', trend:	8, price: 19},
{name: '2016-01', trend:	8, price: 19},
{name: '2016-02', trend:	7, price: 19},
{name: '2016-03', trend:	7, price: 19},
{name: '2016-04', trend:	7, price: 19},
{name: '2016-05', trend:	9, price: 19},
{name: '2016-06', trend:	11, price: 19},
{name: '2016-07', trend:	8, price: 20},
{name: '2016-08', trend:	8, price: 20},
{name: '2016-09', trend:	7, price: 20},
{name: '2016-10', trend:	8, price: 20},
{name: '2016-11', trend:	10, price: 22},
{name: '2016-12', trend:	11, price: 22},
{name: '2017-01', trend:	15, price: 22},
{name: '2017-02', trend:	13, price: 22},
{name: '2017-03', trend:	17, price: 22},
{name: '2017-04', trend:	14, price: 22},
{name: '2017-05', trend:	35, price: 22},
{name: '2017-06', trend:	35, price: 22},
{name: '2017-07', trend:	30, price: 22},
{name: '2017-08', trend:	49, price: 22},
{name: '2017-09', trend:	50, price: 22},
{name: '2017-10', trend:	53, price: 22},
{name: '2017-11', trend:	100, price: 25},
];



/*








*/



class App extends Component {
  getBitcoinPrices(startDate, endDate) {
    // startDate form 2013-09-01
    // endDate form 2013-09-05
    //https://api.coindesk.com/v1/bpi/historical/close.json?start=2013-09-01&end=2013-09-05
    var apiEndpoint = "https://api.coindesk.com/v1/bpi/historical/close.json?start="+startDate+"&end="+endDate;
    /* $.getJSON(apiEndpoint)
      .then(({ results }) => this.setState({ bitcoinPrices: results })); */
  }
  getTwitterTrends(startDate, endDate, interval) {

  }
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          AntD has been installed :D
        </p>
        <Button type="primary">Button</Button>
        <LineChart width={1000} height={400} data={data}>
          <Line type="monotone" dataKey="trend" stroke="#8884d8" />
          <Line type="monotone" dataKey="price" stroke="#c0392b" />
          <XAxis dataKey="name" />
        </LineChart>

      </div>
    );
  }
}

export default App;
