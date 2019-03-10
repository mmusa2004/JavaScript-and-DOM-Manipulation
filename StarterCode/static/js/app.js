// from data.js
var tableData = data;

// YOUR CODE HERE!
// Select tbody
var tbody = d3.select("tbody");

// print all data on console
// console.log(tableData);

// for each instance of data table, create a new table row within tbody
tableData.forEach(function (ufoReport) {
  // console.log(ufoReport);
  var row = tbody.append("tr");

  // UFO report has values date/time, city, state, country, shape, duration and comments
  Object.entries(ufoReport).forEach(function ([key, value]) {
    // console.log(key, value);
    // Append a cell to the row for each value
    // in the ufo report object
    var cell = tbody.append("td");
    // add cell text value
    cell.text(value);
  });
});

// Select the submit button
var submit = d3.select("#filter-btn");

submit.on("click", function () {

  // prevent page from refreshing
  d3.event.preventDefault();

  // select input element and get raw html code
  var inputElement = d3.select("#datetime");

  // get value property from input element
  var inputValue = inputElement.property("value");

  // print inputValue to console to check
  console.log(inputValue);

  var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);

  tbody.selectAll("td").remove();

  filteredData.forEach(function (ufoReport) {
    console.log(ufoReport);
    var row = tbody.append("tr");

    // UFO report has values date/time, city, state, country, shape, duration and comments
    Object.entries(ufoReport).forEach(function ([key, value]) {
      console.log(key, value);
      // Append a cell to the row for each value
      // in the ufo report object
      var cell = tbody.append("td");
      // add cell text value
      cell.text(value);
    });
  });


});