// Create div container and assign it a named class.
// This is for CSS to show it correctly
var boardContainer = document.createElement('div');
boardContainer.setAttribute("class", "board-container");

// Create a able with an id so we can target it in updates
var table = document.createElement('table');
table.setAttribute("id", "board");

// Just takes the input and changes in to string to send to a function to change the
// square.
function send_location_change(row, col){
    var row = row.toString();
    var col = col.toString();
    return [row, col];
}

// Creates the board and populates the ID's inside the table
$(function () {
    $('.board-container').append(table);

    var row = "";

    console.info(row);

    for (var i = 0; i < 8; i++) {
        var tableData = "";
        // var tableRow = document.createElement('tr');
        row += "<tr id='row_" + i + "'>" +
            "\n";

        for(var n = 0; n < 8; n++) {
            tableData += "<td id='col_" + n + "'>"
                + "Location: " + i + ":" +
                n +
                "</td>" + "\n";
            // tableRow.appendChild(document.createElement('td') );
            // table.appendChild(tableRow);
        }
        row += tableData + "</tr>" + "\n";
        // console.info(i);
        // console.info(row);


    }
    $("#board").append(row);

    // Testing purposes - just change the square in 1, 3 to KING
    var target = send_location_change(1, 3);
    var targetId = "table#board tr#row_" + target[0] + " td#col_" + target[1];
    $(targetId).text("KING");


});