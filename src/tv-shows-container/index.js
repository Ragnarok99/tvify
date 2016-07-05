import $ from 'jquery'

let $tvShowsContainer =  $('#app-body').find('.tv-shows')

$tvShowsContainer.on('click', 'button.like', function(event) {
  let $this = $(this);
  // $this.animate({
  //   'font-size': '30px'
  // },'fast') /*FORMA 1 DE ANIMAR*/

  $this.closest('.tv-show').toggleClass('liked');/* FORMA 2*/
});  
export default $tvShowsContainer;
