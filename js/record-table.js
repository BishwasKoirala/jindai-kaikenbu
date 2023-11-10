
const { createClient } = supabase

supabase = createClient('https://pfhlnesmvkbnirnizupx.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBmaGxuZXNtdmtibmlybml6dXB4Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5OTU5ODEzNiwiZXhwIjoyMDE1MTc0MTM2fQ.b137OizlMLvfrC2JFxTeOdzkom7Iqe6hUdPnQ8Em9JI');

const createRecords = document.querySelector('.create-records')

const table = 'rentReturn';

function displayData(data) {
  const container = document.getElementById('create-records');
  const table = document.createElement('table');

  // Create table header
  const headerRow = table.insertRow(0);
  for (const column in data[0]) {
    const headerCell = headerRow.insertCell();
    headerCell.textContent = column;
  }

  // Create table rows
  data.forEach((row, index) => {
    const dataRow = table.insertRow(index + 1);
    for (const column in row) {
      const dataCell = dataRow.insertCell();
      dataCell.textContent = row[column];
    }
  });

  // Append the table to your container
  container.appendChild(table);
}



async function fetchData() {
  const { data, error } = await supabase.from(table).select('*');
  
  if (error) {
    console.error('Error fetching data:', error);
  } else {
    // Data has been fetched successfully
    displayData(data);
  }
}

fetchData();
