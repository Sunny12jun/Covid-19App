import { Card, CardContent } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import './App.css';
import Table from './Table';
import { sortData } from './utlis';

import Pie from './PieChart'
function App() {

  const [tableData, setTableData] = useState([])
  const [pichart, setpichart] = useState([])

  useEffect(() => {

    const getCountriesData = async () => {
      await fetch("https://covid19-api.com/country/all?format=json")
        .then((responce) => responce.json())
        .then((data) => {
          const piData = data.filter(ele => ele.code === 'IN' || ele.code === 'US');
          const sortedData = sortData(data);
          setTableData(sortedData);
          setpichart(piData);

        });
    };
    getCountriesData();
  }, []);


  return (
    <div className="app">
      <div className="app__left">

        <h1>COVID 19 TRACKER</h1>
        <Card className="">

          <CardContent>
            <h3>Live cases by country</h3>
            <Table countries={tableData} />
          </CardContent>

          <CardContent>
            <h3>Country wise cases</h3>
            <div>
              <Pie GraphData={pichart} />
            </div>
          </CardContent>
        </Card>
      </div>

    </div>



  );
}


export default App;
