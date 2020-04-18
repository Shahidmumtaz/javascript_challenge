// from data.js
var tableData = data;


var tbody = d3.select("tbody");
var filter_date = d3.select("#datetime");
var filter_country = d3.select("#country");
var filter_state = d3.select("#state");
var filter_city = d3.select("#city");
var filter_shape = d3.select("#shape");

tableData.forEach(function(ufo) {
    var row = tbody.append("tr");
    Object.entries(ufo).forEach(function([key, value]) {
        var cell = row.append("td");
        cell.text(value);
    });
});

var filter_date = d3.select("#date");
var filter_country = d3.select("#country");
var filter_state = d3.select("#state");
var filter_city = d3.select("#city");
var filter_shape = d3.select("#shape");

filter_date.on("click", function() {
    d3.event.preventDefault();

    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    var filteredTable = tableData.filter(dates => dates.datetime === inputValue);

    d3.selectAll("td").remove();
    filteredTable.forEach(function(ufo) {
        var row = tbody.append("tr");
        Object.entries(ufo).forEach(function([key, value]) {
            var cell = row.append("td");
            cell.text(value);
        });
    });
});

filter_country.on("click", function() {
    d3.event.preventDefault();

    var inputElement = d3.select("#country");
    var inputValue = inputElement.property("value");
    var filteredTable = tableData.filter(countries => countries.country === inputValue);

    d3.selectAll("td").remove();
    filteredTable.forEach(function(ufo) {
        var row = tbody.append("tr");
        Object.entries(ufo).forEach(function([key, value]) {
            var cell = row.append("td");
            cell.text(value);
        });
    });
});

filter_state.on("click", function() {
    d3.event.preventDefault();

    var inputElement = d3.select("#state");
    var inputValue = inputElement.property("value");
    var filteredTable = tableData.filter(states => states.state === inputValue);

    d3.selectAll("td").remove();
    filteredTable.forEach(function(ufo) {
        var row = tbody.append("tr");
        Object.entries(ufo).forEach(function([key, value]) {
            var cell = row.append("td");
            cell.text(value);
        });
    });
})

filter_city.on("click", function() {
    d3.event.preventDefault();

    var inputElement = d3.select("#city");
    var inputValue = inputElement.property("value");
    var filteredTable = tableData.filter(cities => cities.city === inputValue);

    d3.selectAll("td").remove();
    filteredTable.forEach(function(ufo) {
        var row = tbody.append("tr");
        Object.entries(ufo).forEach(function([key, value]) {
            var cell = row.append("td");
            cell.text(value);
        });
    });
});

filter_shape.on("click", function() {
    d3.event.preventDefault();

    var inputElement = d3.select("#shape");
    var inputValue = inputElement.property("value");
    var filteredTable = tableData.filter(shapes => shapes.shape === inputValue);

    d3.selectAll("td").remove();
    filteredTable.forEach(function(ufo) {
        var row = tbody.append("tr");
        Object.entries(ufo).forEach(function([key, value]) {
            var cell = row.append("td");
            cell.text(value);
        });
    });
});