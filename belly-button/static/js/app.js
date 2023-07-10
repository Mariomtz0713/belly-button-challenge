// Using D3 to read in samples.json
let sampleData = d3.json('samples.json').then((data) => {console.log(data)});
// data.samples[0].sample_values

var data.sort((a, b) => b.samples[0].sample_values - a.samples[0].sample_values) 

// var sample_values =
// var otu_ids =
// var otu_lables =

// let barChart = {
//     x: 100,
//     y: 50,
//     text: 'Bar Chart',
//     type: 'bar',
//     orientation: 'h'
// };

// traceData = [barChart];

// let layout = {
//     title: 'My First Chart',
//     margin: {
//         l: 100,
//         r: 100,
//         t: 100,
//         b: 100
//     }
// };

// Plotly.newPlot('plot', traceData, layout);