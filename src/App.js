import React from 'react';
import BarChart from './components/BarChart';
import LineChart from './components/LineChart';
import DoughnutChart from './components/DoughnutChart';
import './App.css';
import './charts.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: getData()
    };
  }

  componentDidMount() {
    window.setInterval(() => {
      this.setState({
        data: getData()
      })
    }, 5000)
  }

  render() {
    return (
      <div className="App">
          <div className="main chart-wrapper">
            <LineChart
              data={this.state.data[0].data}
              title={this.state.data[0].title}
              color="#3E517A"
            />
          </div>
          <div className="sub chart-wrapper">
            <BarChart
              data={this.state.data[1].data}
              title={this.state.data[1].title}
              color="#70CAD1"
            />
          </div>
          <div className="sub chart-wrapper">
            <BarChart
              data={this.state.data[2].data}
              title={this.state.data[2].title}
              color="#B08EA2"
            />
          </div>
          <div className="sub chart-wrapper">
            <DoughnutChart
              data={this.state.data[3].data}
              title={this.state.data[3].title}
              colors={['#a8e0ff', '#8ee3f5', '#70cad1', '#3e517a', '#b08ea2', '#BBB6DF']}
            />
          </div>
      </div>
  );
  }
}

export default App;


function getData() {
  let data = [];

  data.push({
    title: 'Visits',
    data: getRandomDateArray(150)
  });

  data.push({
    title: 'Categories',
    data: getRandomArray(20)
  });

  data.push({
    title: 'Categories',
    data: getRandomArray(10)
  });

  data.push({
    title: 'Data 4',
    data: getRandomArray(6)
  });

  return data;
}

function getRandomDateArray(numItems) {
  // Create random array of objects (with date)
  let data = [];
  let baseTime = new Date('2020-04-21T00:00:00').getTime(); 
  let dayMs = 24 * 60 * 60 * 1000; // miliseconds of a day
  for(var i = 0; i < numItems; i++) {
    data.push({
      time: new Date(baseTime + i * dayMs), 
      value: Math.round(20 + 80 * Math.random())
    });
  }
  return data;
}

// Data generation
function getRandomArray(numItems) {
  // Create random array of objects
  let names = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let data = [];
  for(var i = 0; i < numItems; i++) {
    data.push({
      label: names[i],
      value: Math.round(20 + 80 * Math.random())
    });
  }
  return data;
}


