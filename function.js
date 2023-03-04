
const BASE_URL = "http://localhost:3000/weather"

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };


async function fetchWeather(element) {
  const selectComponent = document.getElementById('selected-station');
  const dateComponent = document.getElementById('date');

  const selectedIndex = selectComponent?.selectedIndex;
  const selectedStation = selectComponent[selectedIndex]?.value;
  const selectedDate =  dateComponent?.value;

  if (selectedIndex === 0 || !!!selectedDate) {
    console.log(`selectedIndex: ${selectedIndex}`);
    console.log(`selectedDate: ${selectedDate}`);
    return;
  }

  const [year, month, day] = selectedDate.split("-");

  const query = `${BASE_URL}/${selectedStation}/${year}/${month}/${day}`

  fetch(query).then((response) => {
    return response.json()
  }).then(parsed => {
    console.log(parsed)
    const table = document.getElementById('table-weathers');
    while(table.rows.length > 1) {
      table.deleteRow(1);
    }
  
    parsed.forEach(item => {
      let row = document.createElement('tr');

      let date = document.createElement('td');
      date.innerHTML = new Date(item.DATA).toLocaleDateString('pt-BR');

      let time = document.createElement('td');
      time.innerHTML = item.HORA;

      let precipitation = document.createElement('td');
      if (item.P_TOTAL == -9999) {
        precipitation.innerHTML = 'sem dados';
      } else {
        precipitation.innerHTML = item.P_TOTAL;
      }
      let tempMax = document.createElement('td');
      if (item.TEMP_MAX == -9999) {
        tempMax.innerHTML = 'sem dados';
      } else {
        tempMax.innerHTML = item.TEMP_MAX;
      }

      let tempMin = document.createElement('td');
      if (item.TEMP_MIN == -9999) {
        tempMin.innerHTML = 'sem dados';
      } else {
        tempMin.innerHTML = item.TEMP_MIN;
      }

      let maxHumidity = document.createElement('td');
      if (item.UMID_MAX == -9999) {
        maxHumidity.innerHTML = 'sem dados';
      } else {
        maxHumidity.innerHTML = item.UMID_MAX;
      }

      let minHumidity = document.createElement('td');
      if (item.UMID_MIN == -9999) {
        minHumidity.innerHTML = 'sem dados';
      } else {
        minHumidity.innerHTML = item.UMID_MIN;
      }

      row.appendChild(date);
      row.appendChild(time);
      row.appendChild(precipitation);
      row.appendChild(tempMax);
      row.appendChild(tempMin);
      row.appendChild(maxHumidity);
      row.appendChild(minHumidity);

      table.appendChild(row);

      
    })
  })
  .catch(error => {
    console.error('Erro ao requisitar dados do backend', error)
  });


}


