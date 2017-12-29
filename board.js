var boardContainer = document.createElement('div');
boardContainer.setAttribute("class", "board-container");
var table = document.createElement('table');
table.setAttribute("id", "board");



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

});

