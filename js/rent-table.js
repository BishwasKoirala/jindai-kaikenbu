document.addEventListener('DOMContentLoaded', function () {
  // Initialize Supabase
  const supabaseUrl = 'https://ivoaofipzllrsyzymtha.supabase.co';
  const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml2b2FvZmlwemxscnN5enltdGhhIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5NzYyMjcxOCwiZXhwIjoyMDEzMTk4NzE4fQ.ohmO9rBGH5H31wvD9TmHxzln7g9M5COWTQGpCZE1-QY';
  const supabase = supabase.createClient(supabaseUrl, supabaseKey);

  // Function to fetch and display rent/return records
  async function fetchRecords() {
    const { data, error } = await supabase.from('rentReturn').select('*');
    if (error) {
      console.error('Error fetching data:', error);
    } else {
      renderRecords(data);
    }
  }

  // Function to render the records on the webpage
  function renderRecords(records) {
    const recordList = document.getElementById('recordList');

    records.forEach((record) => {
      const listItem = document.createElement('li');
      listItem.textContent = `ID: ${record['id']}, Name: ${record['name']}, Book: ${record['the-book']}, Action: ${record['rent-or-return']}, Date: ${record['date']}`;
      recordList.appendChild(listItem);
    });
  }

  // Call fetchRecords when the DOM is loaded
  fetchRecords();
});
