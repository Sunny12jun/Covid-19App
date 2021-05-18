import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import { PreparePiChartData } from './utlis'

 
let dataForGraph = [];
function PieChart({ GraphData }) {
    const [data, setData] = useState({});
    useEffect(() => {
        dataForGraph = PreparePiChartData();
        GraphData.map((ele, index) => {
            dataForGraph.datasets[0].data[index] = ele.confirmed;
            dataForGraph.labels[index] = ele.country;
            setData(dataForGraph);
        })

    });
    return (
        <div className='header'>
            <h1 className='title'>Pie Chart</h1>

            <Pie data={data} />
            {/* <Pie data={data} /> */}
        </div>
    )

}

export default PieChart;