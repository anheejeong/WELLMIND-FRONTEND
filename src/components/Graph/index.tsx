import { useEffect, useRef } from 'react'

import ApexCharts from 'apexcharts'

import { GraphItem } from '@/types'

const timeToMinutes = (time: string): number => {
  const [hours, minutes] = time.split(':').map(Number)
  return hours * 60 + minutes
}

const minutesToTime = (minutes: number): string => {
  const hours = Math.floor(minutes / 60)
    .toString()
    .padStart(2, '0')
  const mins = (minutes % 60).toString().padStart(2, '0')
  return `${hours}:${mins}`
}

export const Graph = ({ time, date }: GraphItem) => {
  const chartRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const timeInMinutes = time.map(timeToMinutes)

    const minValue = Math.min(...timeInMinutes)
    const maxValue = Math.max(...timeInMinutes)
    const padding = 10

    const options = {
      chart: {
        height: 230,
        width: 520,
        type: 'line',
        toolbar: {
          show: false,
        },
        animations: {
          enabled: false,
        },
      },
      series: [
        {
          name: 'TEAM C',
          type: 'line',
          data: timeInMinutes,
          color: '#3300ff',
        },
      ],
      stroke: {
        width: 5,
        curve: 'smooth',
      },
      labels: date,
      xaxis: {
        type: 'datetime',
      },
      yaxis: {
        show: false,
        min: minValue - padding,
        max: maxValue + padding,
        labels: {
          formatter: (value: number) => minutesToTime(value),
        },
      },
      tooltip: {
        shared: true,
        intersect: false,
        offsetY: 10,
        y: {
          formatter: (value: number) => minutesToTime(value),
        },
      },
      grid: {
        show: false,
      },
    }
    const chart = new ApexCharts(chartRef.current, options)
    chart.render()
    return () => {
      chart.destroy()
    }
  })
  return <div ref={chartRef} />
}
