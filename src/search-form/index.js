

import $ from 'jquery'
import page from 'page'


$('#app-body').find('form').submit(function (ev) {

  let busqueda = $(this)
  .find('input[type="text"]')
  .val();

  page(`/search?q=${busqueda}`)

    return false;
});
