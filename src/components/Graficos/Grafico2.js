import React, { Component } from 'react';
import { Bar, line } from 'react-chartjs-2';
import { Box } from '@material-ui/core'

const data = {
	datasets: [
		{
			label: 'Monto Miles',
			type: 'line',
			data: [0, 200000, 0, 0,0 ],
			fill: false,
			borderColor: '#27bae3',
			backgroundColor: '#27bae3',
			pointBorderColor: '#27bae3',
			pointBackgroundColor: '#27bae3',
			pointHoverBackgroundColor: '#27bae3',
			pointHoverBorderColor: '#27bae3',
			yAxisID: 'y-axis-2'
		},
		{
			label: 'Cant. Documentos',
			type: 'line',
			data: [0, 65, 65, 65,65 ],
			fill: false,
			backgroundColor: '#070a0a',
			borderColor: '#070a0a',
			hoverBackgroundColor: '#070a0a',
			hoverBorderColor: '#070a0a',
			yAxisID: 'y-axis-1'
		}
	]
};

const options = {
    responsive: true,
	labels: ['', 'Mas de 24 Meses', '12 a 24 Meses', '6 a 12 Meses', 'Ultimo 6 Meses'],
	tooltips: {
		mode: 'label'
    },
  
	elements: {
		line: {
			fill: false
		}
	},
	scales: {
		xAxes: [
			{
				display: true,
				gridLines: {
					display: true
				},

				labels: ['', 'Mas de 24 Meses', '12 a 24 Meses', '6 a 12 Meses', 'Ultimo 6 Meses']
			}
		],
		yAxes: [
			{
				type: 'linear',
				display: true,
				position: 'left',
				id: 'y-axis-1',
				gridLines: {
					display: true
				},
				labels: {
					show: true
				}
			},
			{
				type: 'linear',
				display: true,
				position: 'right',
				id: 'y-axis-2',
				gridLines: {
					display: true
				},
				labels: {
					show: true
				}
			}
		]
	}
};

const plugins = [
	{
		afterDraw: (chartInstance, easing) => {
			const { ctx } = chartInstance.chart;
			//ctx.fillText('This text drawn by a plugin', 300, 300);
		}
	}
];

const Grafico2 =()=> {
	
		return (
            <>
        
				{/*<h2>Mixed data Example</h2>*/}
				<Bar data={data} options={options} plugins={plugins} />
	
            </>
		);

}

export default Grafico2;