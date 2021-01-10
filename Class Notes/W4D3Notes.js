// $('submit-btn').on('click',()=>{
//   console.log($('#input-box').val());
// });
const list=[];

$('form').on('submit',(event)=>{
  console.log($('#input-box-fn').val());
  //treats this list as a stack
  list.push($('#input-box-fn').val());
//to prevent automatic refresh
  event.preventDefault();
  //resets input box once the button is pressed
$(event.currentTarget).trigger('reset');
render();
});
const render=()=>{
  console.log('list: ', list);
//  $('ul').empty();
  //  list.forEach((item)=>{
      $('ul').append('<li>' + list[list.length-1] + '</li>');
  //  });
    $('li').on('click', (event)=>{
      $(event.currentTarget).css('text-decoration','line-through');
     $(event.currentTarget).effect('shake');
    })
  };
