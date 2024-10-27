import { series } from './data.js';
console.log("Cargando series...");
function renderSeriesInTable() {
    var tableBody = document.getElementById('series-table');

    console.log(series);
    var totalSeasons = 0; 
    var seriesCount = series.length; 
   
    series.forEach(function (serie) {
        var row = document.createElement('tr');
        row.innerHTML = "\n      <td>".concat(serie.id, "</td>\n      <td>").concat(serie.name, "</td>\n      <td>").concat(serie.channel, "</td>\n      <td>").concat(serie.seasons, "</td>\n    ");
        tableBody.appendChild(row);
      
        totalSeasons += serie.seasons;
    });
    
    var averageSeasons = totalSeasons / seriesCount;
    
    var averageRow = document.createElement('tr');
    averageRow.innerHTML = "\n    <td colspan=\"4\" style=\"text-align: center; font-weight: bold;\">\n      Seasons average: ".concat(averageSeasons.toFixed(2), "\n    </td>\n  ");
    tableBody.appendChild(averageRow);
}
renderSeriesInTable();
