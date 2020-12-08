import React from 'react';
import {HorizontalBar} from 'react-chartjs-2';
// import Chart from 'chart.js';

const ChartComponent = ({countryNames, dataArray, labelName}) => {
  const data = {
    labels: countryNames,
    datasets: [
      {
        label: labelName,
        data: dataArray,
        backgroundColor: '#EE6352',
        borderColor: '#EE6352',
        borderWidth: 1,
      },
    ],
  };
  const options = {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      }
//   useEffect(() => {
//     var ctx = document.getElementById('myChart').getContext('2d');
//     new Chart(ctx, {
//       type: 'horizontalBar',
//       data: {
//         labels: countryNames,
//         datasets: [
//           {
//             label: labelName,
//             data: dataArray,
//             backgroundColor: '#EE6352',
//             borderColor: '#EE6352',
//             borderWidth: 1,
//           },
//         ],
//       },
//       options: {
//         scales: {
//           yAxes: [
//             {
//               ticks: {
//                 beginAtZero: true,
//               },
//             },
//           ],
//         },
//       },
//     });
//   });

  return <HorizontalBar
  height={500}
  options={{ maintainAspectRatio: false }}
  style={{height: `500px`}} data={data} options={options} />//<canvas id="myChart" width="400" height="400"></canvas>;
};

export default ChartComponent;
