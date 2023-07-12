// Default plot
function init() {

d3.json('samples.json').then((data) => {

console.log(data);

var allIds = data.metadata;
var firstIdInfo = data.metadata[0];
var queryID = data.names[0];
var queryData = data.samples.filter(person => person.id == queryID)[0];

// Displaying first demographic info
d3.select('#sample-metadata').html(
    `id: ${firstIdInfo.id} <br>
    ethinicity: ${firstIdInfo.ethnicity} <br>
    gender: ${firstIdInfo.gender} <br>
    age: ${firstIdInfo.age} <br>
    location: ${firstIdInfo.location} <br>
    bbtype: ${firstIdInfo.bbtype} <br>
    wfreq: ${firstIdInfo.wfreq}`
    )


// Arrays of data values for charts
var sampleValues = queryData.sample_values;
var otuIds = queryData.otu_ids;
var otuLabels = queryData.otu_labels;

// Top 10 data values
var top10SampleValues = sampleValues.slice(0, 10).reverse();
var top10OtuIds = otuIds.slice(0, 10).reverse();
var top10OtuLabes = otuLabels.slice(0, 10).reverse();

// Creating Bar Chart
let barChart = [{
    x: top10SampleValues,
    y: top10OtuIds.map(x => `OTU  ${x}`),
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
        size: sampleValues,
        color: otuIds
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
d3.json('samples.json').then((data) => {

console.log(data) 






    })
};


init();


