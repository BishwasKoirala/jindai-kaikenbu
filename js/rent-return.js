
const { createClient } = supabase

supabase = createClient('https://ivoaofipzllrsyzymtha.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml2b2FvZmlwemxscnN5enltdGhhIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5NzYyMjcxOCwiZXhwIjoyMDEzMTk4NzE4fQ.ohmO9rBGH5H31wvD9TmHxzln7g9M5COWTQGpCZE1-QY');

const form = document.querySelector('#rent-return-form')

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const formInputs = form.querySelectorAll('input,select')
  
  let submission = {}

  formInputs.forEach( element => {
    const {value,name} = element
    if (value) {
      submission[name] = value;
    }

  })

  console.log(submission)

    const { error , data } = await supabase.from('rentReturn').insert([submission])
    console.log({error,data})

    if (error) {
      alert('therewas an error/エラー発生')
    } else {
      alert('thanks for answering/ご協力ありがとうございました')
    }

    formInputs.forEach(element => element.value = '')

})
