// Default plot
function init() {

d3.json('samples.json').then((data) => {console.log(data);

// Arrays of data values for charts
var sampleValues = data.samples.map(data => data.sample_values);
var otuIds = data.samples.map(data => data.otu_ids);
var otuLabels = data.samples.map(data => data.otu_labels);

// Top 10 data values
let sortedSampleValues = sampleValues.sort((a, b) => b - a);
let top10SampleValues = sortedSampleValues.slice(0, 10);
let sortedOtuIds = otuIds.sort((a,b) => b - a);
let top10OtuIds = sortedOtuIds.slice(0,10);
let sortedOtuLabels = otuLabels.sort((a,b) => b - a);
let top10OtuLabes = sortedOtuLabels.slice(0,10);

let barChart = [{
    x: top10SampleValues[0].reverse(),
    y: top10OtuIds[0].reverse().map(x => 'OTU ' + x),
    text: top10OtuLabes[0].reverse(),
    type: 'bar',
    orientation: 'h'
}];
        
let layout = {
    title: 'Manifesting a Pink Dress',
    margin: {
        l: 150,
        r: 50,
        t: 50,
        b: 50
    }
};
    
Plotly.newPlot('bar', barChart, layout);

})};


// Updated plot
function plotupdated () {

};


init();


