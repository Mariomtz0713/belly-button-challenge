// Default plot
function init() {

d3.json('samples.json').then((data) => {console.log(data);

var allIds = data.metadata;
var firstIdInfo = data.metadata[0];
var queryID = data.names[0];
var queryData = data.samples.filter(person => person.id == queryID)[0];
d3.select('#sample-metadata').text(
    `id: ${firstIdInfo.id}
    ethinicity: ${firstIdInfo.ethnicity}
    gender: ${firstIdInfo.gender}
    age: ${firstIdInfo.age}
    location: ${firstIdInfo.location}
    bbtype: ${firstIdInfo.bbtype}
    wfreq: ${firstIdInfo.wfreq}`
    )
console.log(firstIdInfo)

// Arrays of data values for charts
var sampleValues = queryData.sample_values;
var otuIds = queryData.otu_ids;
var otuLabels = queryData.otu_labels;


// Top 10 data values
var sortedSampleValues = sampleValues.sort((a, b) => b - a);
var top10SampleValues = sortedSampleValues.slice(0, 10).reverse();

var top10OtuIds = otuIds.slice(0, 10).reverse();

var sortedOtuLabels = otuLabels.sort((a,b) => b - a);
var top10OtuLabes = sortedOtuLabels.slice(0, 10).reverse();

// Creating Bar Chart
let barChart = [{
    x: top10SampleValues,
    y: top10OtuIds.map(x => 'OTU ' + x),
    text: top10OtuLabes,
    type: 'bar',
    orientation: 'h'
}];

Plotly.newPlot('bar', barChart);

// Creating Bubble Chart
let bubbleChart = [{
    x: otuIds,
    y: sampleValues,
    text: otuLabels,
    mode: 'markers',
    marker: {
        color: otuIds,
        size: sampleValues
    }

}];

let layout = {
    height: 600,
    width: 1000,
    xaxis: {
        title: 'OTU ID'
    }
};

Plotly.newPlot('bubble', bubbleChart, layout)

    })

};


// Updated plot
function plotupdated () {
d3.json('samples.json').then((data) => (console.log(data)))
};


init();


