
const { createClient } = supabase

supabase = createClient('https://pfhlnesmvkbnirnizupx.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBmaGxuZXNtdmtibmlybml6dXB4Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5OTU5ODEzNiwiZXhwIjoyMDE1MTc0MTM2fQ.b137OizlMLvfrC2JFxTeOdzkom7Iqe6hUdPnQ8Em9JI');

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
