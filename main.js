import './style.css'

async function fetchDataFromAPIEndpoint() {
  const cards = await fetch('/api/fetchNotion')
  .then((res)=>res.json()
  .then((data)=>(data.results)));
  console.log(cards)


   const inspo = cards.filter(entry => entry.properties.Tags.multi_select[0].name== 'inspo')
   document.querySelector('.inspo').innerHTML =
   inspo.map((card)=>
   `<p>${card.properties.Name.title[0].plain_text}</p>
   <img src=${card.properties.Image.files[0].file.url}>
   `
   ).join('')

   const experiments = cards.filter(entry => entry.properties.Tags.multi_select[0].name== 'experiment')
   document.querySelector('.experiment').innerHTML =
   experiments.map((card)=>
   `<p>${card.properties.Name.title[0].plain_text}</p>
   <img src=${card.properties.Image.files[0].file.url}>
   `
   ).join('')

  //  const idea = cards.filter(entry => entry.properties.Tags.multi_select[0].name== 'idea')
  //  document.querySelector('.idea').innerHTML =
  //  inspo.map((card)=>
  //  `<p>${card.properties.Name.title[0].plain_text}</p>
  //  `
  //  ).join('')

  //  const bookmark = cards.filter(entry => entry.properties.Tags.multi_select[0].name== 'bookmark')
  //  document.querySelector('.bookmark').innerHTML =
  //  inspo.map((card)=>
  //  `<p>${card.properties.Name.title[0].plain_text}</p>
  //  `
  //  ).join('')


}






fetchDataFromAPIEndpoint();
