var vg_1 = "chorolopleth.vg.json";
vegaEmbed("#choro", vg_1).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
var vg_2 = "bubble_chart.vg.json";
vegaEmbed("#bubble", vg_2).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
var vg_3 = "heatmap.vg.json";
vegaEmbed("#heatmap", vg_3).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
var vg_5 = "donut_chart_my.vg.json";
vegaEmbed("#donut_my", vg_5).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
var vg_7 = "donut_chart.vg.json";
vegaEmbed("#donut", vg_7).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
var vg_8 = "stacked_areachart.vg.json";
vegaEmbed("#area_chart", vg_8).then(function(result) {
   // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
var vg_6 = "combined_charts.vg.json";
vegaEmbed("#combined_charts", vg_6).then(function(result) {
   // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
// Load the JSON file


// // Load the combined specification
// vegaEmbed("#combined_chart", vg_6).then(function(result) {
//     // Extract the vconcat array from the spec
//     const spec = result.spec;

//     // Embed the first chart (area chart)
//     vegaEmbed("#area_chart", spec.vconcat[0]).then(function(result) {
//         console.log("Area chart loaded");
//     }).catch(console.error);

//     // Embed the second chart (donut chart)
//     vegaEmbed("#donut", spec.vconcat[1]).then(function(result) {
//         console.log("Donut chart loaded");
//     }).catch(console.error);

// }).catch(console.error);