// Setup, importing d3 and the initial graph appearance
var d3 = require('d3');

var width = 960,
    height = 500;

var svg = d3.select("body")
    .append('svg')
    .attr('width', width)
    .attr('height', height);


// Map setup
var projection = d3.geo.albersUsa()
    .scale([1000])

var path = d3.geo.path()
    .projection(projection);

var data = [10, 2, 3, 54, 102]

var scale = d3.scaleLinear()
    .domain(extent(data))
    .range([height, 0]);

var x_axis = d3.axisBottom()
    .scale(scale);
