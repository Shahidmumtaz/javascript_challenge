// from data.js
var tableData = data;
var tbody = d3.select("tbody");

var input_date = d3.select("#datetime");
var input_country = d3.select("#country");
var input_state = d3.select("#state");
var input_city = d3.select("#city");
var input_shape = d3.select("#shape");


tableData.forEach(function(ufo) {
    var row = tbody.append("tr");
    Object.entries(ufo).forEach(function([key, value]) {
        var cell = row.append("td");
        cell.text(value);
    });
});

//filter date

var filter_date = d3.select("#filterdate");

filter_date.on("click", function() {
    d3.event.preventDefault();

    var dinputElement = d3.select("#datetime");
    var dinputValue = dinputElement.property("value");
    var dfilteredTable = tableData.filter(dates => dates.datetime === dinputValue);

    d3.selectAll("td").remove();
    dfilteredTable.forEach(function(ufo) {
        var drow = tbody.append("tr");
        Object.entries(ufo).forEach(function([key, value]) {
            var dcell = drow.append("td");
            dcell.text(value);
        });
    });
});

var filter_country = d3.select("#filtercountry");

filter_country.on("click", function() {
    d3.event.preventDefault();

    var cinputElement = d3.select("#country");
    var cinputValue = cinputElement.property("value");
    var cfilteredTable = tableData.filter(countries => countries.country === cinputValue);

    d3.selectAll("td").remove();
    cfilteredTable.forEach(function(ufo) {
        var crow = tbody.append("tr");
        Object.entries(ufo).forEach(function([key, value]) {
            var ccell = crow.append("td");
            ccell.text(value);
        });
    });
});

var filter_state = d3.select("#filterstate");

filter_state.on("click", function() {
    d3.event.preventDefault();

    var sinputElement = d3.select("#state");
    var sinputValue = sinputElement.property("value");
    var sfilteredTable = tableData.filter(states => states.state === sinputValue);

    d3.selectAll("td").remove();
    sfilteredTable.forEach(function(ufo) {
        var srow = tbody.append("tr");
        Object.entries(ufo).forEach(function([key, value]) {
            var scell = srow.append("td");
            scell.text(value);
        });
    });
})

var filter_city = d3.select("#filtercity");

filter_city.on("click", function() {
    d3.event.preventDefault();

    var ctinputElement = d3.select("#city");
    var ctinputValue = ctinputElement.property("value");
    var ctfilteredTable = tableData.filter(cities => cities.city === ctinputValue);

    d3.selectAll("td").remove();
    ctfilteredTable.forEach(function(ufo) {
        var ctrow = tbody.append("tr");
        Object.entries(ufo).forEach(function([key, value]) {
            var ctcell = ctrow.append("td");
            ctcell.text(value);
        });
    });
});

var filter_shape = d3.select("#filtershape");

filter_shape.on("click", function() {
    d3.event.preventDefault();

    var shinputElement = d3.select("#shape");
    var shinputValue = shinputElement.property("value");
    var shfilteredTable = tableData.filter(shapes => shapes.shape === shinputValue);

    d3.selectAll("td").remove();
    shfilteredTable.forEach(function(ufo) {
        var shrow = tbody.append("tr");
        Object.entries(ufo).forEach(function([key, value]) {
            var shcell = shrow.append("td");
            shcell.text(value);
        });
    });
});