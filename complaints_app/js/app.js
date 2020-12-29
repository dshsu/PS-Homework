// Pull the info from the 311 API
//NYC link: https://data.cityofnewyork.us/resource/erm2-nwe9.json
// Filter by agency - we only want the NYPD
// Filter by borough
// show the number of items wanted (default is 10)
    // use a show-hide onclick function to reveal the response?
// include a button to show the police response -
    //keep response hidden until button is clicked
// make sure the button only works on that one complaint
//----------------------------------------------
// $(() =>{
//   $('button').on('click', (event)=>{
//
//     event.preventDefault();
//     console.log(event.target);
//
//     const userInput = event.target.innerHTML.toUpperCase();
//     let limit = document.getElementById("crimenum");
//
// async function getCopData(){
//   const copData = await $.ajax({
//       url:'https://data.cityofnewyork.us/resource/erm2-nwe9.json',
//       type: 'GET',
//       data: {
//         '$limit' : limit,
//         agency : 'NYPD',
//         borough : userInput,
//       }
//     })
//     console.log("Cop Data Loaded");
//     return copData;
//
//   let display = await displayData(copData)({
//         for (let i=0; i < copData.length; i++)
//         {
//           let entry = $('<p>');
//           entry.text(`${copData[i].descriptor}`);
//           let button = $('<button>');
//           button.text('Police Response');
//           let response = $('<span>');
//           response.text(`${copData[i].resolution_description}`).hide();
//           button.click(() => {response.toggle()});
//           entry.append(button);
//           entry.append(response);
//           $("#results").append(entry);
//         }});
//       ()=>{
//         console.log('display request failed');
//       };
//   })
// });
$(() =>{
  $('.borough').on('click', (event)=>{
  $('#results').empty();
    event.preventDefault();
    console.log(event.target);

    const userInput = event.target.innerHTML.toUpperCase();
    let numberOfRequest = $('input')[0].value;
    if (!(numberOfRequest)) {
      numberOfRequest = 10;
    }

    $.ajax({
      url:'https://data.cityofnewyork.us/resource/erm2-nwe9.json',
      type: 'GET',
      data: {
        '$limit' : numberOfRequest,
        agency : 'NYPD',
        borough : userInput,
      }
    }).then(
      (data)=>{
        console.log(data);
        for (let i=0; i < data.length; i++) {
          let entry = $('<p>');
          entry.text(`${data[i].descriptor} `);
          let button = $('<button>');
          button.text('Police Response');
          let response = $('<span>');
          response.text(` ${data[i].resolution_description}`).hide();
          button.click(() => {response.toggle()});
          entry.append(button);
          entry.append(response);
          $("#results").append(entry);
        }
      },
      ()=>{
        console.log('API Request failed');
      })
  })
});
