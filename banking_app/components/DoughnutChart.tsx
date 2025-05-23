"use client"

import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)

interface DoughnutChartProps {
  accounts: any[]
}

const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
  const data = {
    datasets: [
      {
        label: 'Banks',
        data: [1250, 2500, 3750],
        backgroundColor: ['#0747b6', '#2265d8', '#2f91fa']
      }
    ],
    labels: ['Bank 1', 'Bank 2', 'Bank 3']
  }

  const options = {
    cutout: '60%',
    plugins: {
      legend: {
        display: false
      }
    }
  }

  return <Doughnut data={data} options={options} />
}

export default DoughnutChart
