// from data.js
var tableData = data;

// YOUR CODE HERE!
// Select the button
var button = d3.select("#filter-btn");

button.on("click", function() {

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  // Verify input is correct
  console.log(inputValue);
  
  // Verify table data is being reference correcty
  console.log(tableData);

  var filteredData = tableData.filter(event => event.datetime === inputValue);

  // Verify filter is working properly
  console.log(filteredData);

  // Use D3 to select the table
  var table = d3.select("#ufo-table");

   // Use D3 to select the table body
  var tbody = d3.select("tbody");
  
   // Clear table 
  tbody.html("");
  
  // Iterate through all the filtered results,  add the key values, add rows to table  
  filteredData.forEach((filteredData) => {
        var row = tbody.append("tr");
        Object.entries(filteredData).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        })
    });
});