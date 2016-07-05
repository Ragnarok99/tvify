

import $ from 'jquery'
import $tvShowsContainer from '../tv-shows-container'
let template = `<article class="tv-show">
    <div class="left img-container">
      <img src=":img:" alt=":img-alt:" />
    </div>
        <div class="right info">
      <h1>:name:</h1>
      <p>:summary:</p>
       <button class="like">💗</button>
    </div>
  </article>`;

export default function renderShows(shows) {
  $tvShowsContainer.find('.loader').remove();
  shows.forEach(function (show) {
    let article = template
    .replace(':name:', show.name)
    .replace(':img:', show.image ? show.image.medium : '')
    .replace(':summary:', show.summary)
    .replace(':img-alt:', show.name + 'logo')

    let $article = $(article);

    $tvShowsContainer.append($article.fadeIn(2000));

  })
}
