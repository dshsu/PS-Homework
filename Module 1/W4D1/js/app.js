console.log("Stranger things are coming!");
console.log("hi");
// $(()=>{
const addH2=()=>{
  // $newH2 = $('<h2>').text('GOOD MORNING!');
   let $h2=$('<h2>').text('Just getting started');
  $('body').append($h2);
  // $('body').append($newH2);
}
const changeH2 = () =>{
  $('h2').text=('Getting Warmed Up');
}
$(()=>{
addH2();
changeH2();
});

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
