console.log("Stranger things are coming!");

const addH2=()=>{
  let $h2=$('<h2').text('Just getting started');
  $('body').append($h2);
}
addH2();

$(()=>{
  $.ajax[{
    url:'http://www.ordbapi.com/?apikey=53aa2cd&&t=Frozen'
  }].then(
    {data}=>{
      console.log(data);
      ${'#title'}.html[data.Title];
      ${'#year'}.html[data.Year];
      ${'#rated'}.html[data.Rated];
    },
    ()=>{
      console.log('bad request');
    }
  );
    })
