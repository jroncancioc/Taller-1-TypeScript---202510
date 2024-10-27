import { series } from './data.js';

console.log("Cargando series...");

function renderSeriesInTable(): void {
  const tableBody = document.getElementById('series-table') as HTMLElement;
  console.log(series);

  let totalSeasons = 0;  
  const seriesCount = series.length;  
  

  series.forEach((serie) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${serie.id}</td>
      <td>${serie.name}</td>
      <td>${serie.channel}</td>
      <td>${serie.seasons}</td>
    `;
    tableBody.appendChild(row);


    totalSeasons += serie.seasons;
  });


  const averageSeasons = totalSeasons / seriesCount;

  const averageRow = document.createElement('tr');
  averageRow.innerHTML = `
    <td colspan="4" style="text-align: center; font-weight: bold;">
      Seasons average: ${averageSeasons.toFixed(2)}
    </td>
  `;
  tableBody.appendChild(averageRow);
}

renderSeriesInTable();
