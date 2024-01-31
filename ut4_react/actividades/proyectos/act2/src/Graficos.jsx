import React from 'react';
import {Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend,} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Chart.js Line Chart',
        },
    },
};

const labels = [];

export function Graficos({registros}) {
    const labels = registros.map((info) => info.fecha);
    const data = {
        labels: labels,
        datasets: [{
            label: 'IMC',
            data: registros.map((info) => info.weight / ((info.height / 100) * (info.height / 100))),
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        }]
    };

    return <Line options={options} data={data} />;
}
