"use client"
import React, { Fragment } from 'react';
import { Chart as ChartJs, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from 'react-chartjs-2';

ChartJs.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ accounts }:  DoughnutChartProps ) => {

  const data = {
    datasets: [
      {
        label: "Banks",
        data: [1200, 6733, 5700],
        backgroundColor: ['#007bff', '#2265d8', '#2f91fa']
      }
    ],
    labels: [
      "Bank1", "Bank2", "Bank3"
    ]
  }

  return (
   < Fragment>
    <Doughnut 
      data={data}
      options={{
        cutout: '60%',
        plugins: {
          legend: {
            display: false
          }
        }
      }}
    />
   </Fragment>
  )
};

export default DoughnutChart;
