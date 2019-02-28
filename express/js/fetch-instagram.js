var $ = jQuery;

$.ajax({
  url: 'https://mango-existence.glitch.me/',
  dataType: 'json',
  success: function(data) {
    let feeds = data.graphql.user.edge_owner_to_timeline_media.edges;
    let username = data.graphql.user.username;
    let profpic = data.graphql.user.profile_pic_url_hd;
    let fullname = data.graphql.user.full_name;
    let biography = data.graphql.user.biography;
    let igLink = data.graphql.user.username;
    let tokpedLink = data.graphql.user.external_url;

    $('#username, .username').text(username);
    $('#fullname').text(fullname);
    $('#biography').text(biography);
    $('#profpic').attr('src', profpic);
    $('#profpic2').attr('src', profpic);
    $('.btn-instagram').attr('href', 'https://www.instagram.com/' + igLink);
    $('.tokopedia-link').attr('href', tokpedLink);

    feeds.forEach((feed, idx) => {
      let excerpt = feed.node.edge_media_to_caption.edges[0].node.text
        .split(' ')
        .slice(0, 4)
        .join(' ');
      let template = `<div class="uk-width-1-3@m uk-width-1-2">
      <div class="trx_addons_cv_portfolio_item">
        <div class="trx_addons_cv_portfolio_item_thumb trx_addons_hover trx_addons_hover_style_zoomin">
          <a href="${
            feed.node.display_url
          }" class="modal-show click-mobile inited"
                rel="magnific" title="${feed.node.edge_media_to_caption.edges[0].node.text.replace(
                  /(?:\r\n|\r|\n)/g,
                  '<br>'
                )}" data-ig-link="https://www.instagram.com/p/${
        feed.node.shortcode
      }/">
            <img src="${
              feed.node.thumbnail_src
            }" class="attachment-trx_addons-thumb-masonry size-trx_addons-thumb-masonry dropshadow-image" alt="01." />
            <img src="${
              feed.node.thumbnail_src
            }" class="attachment-trx_addons-thumb-masonry size-trx_addons-thumb-masonry" alt="01." />
            <div class="trx_addons_hover_mask"></div>
            <div class="trx_addons_hover_content">
              <h6 class="trx_addons_hover_title">
                ${excerpt}...
              </h6>
              <a href="https://www.instagram.com/p/${
                feed.node.shortcode
              }/" class="trx_addons_hover_icon trx_addons_hover_icon_link" target="_blank"></a>
              <a href="${
                feed.node.display_url
              }" class="trx_addons_hover_icon trx_addons_hover_icon_zoom inited modal-show"
                rel="magnific" title="${feed.node.edge_media_to_caption.edges[0].node.text.replace(
                  /(?:\r\n|\r|\n)/g,
                  '<br>'
                )}" data-ig-link="https://www.instagram.com/p/${
        feed.node.shortcode
      }/"></a>
            </div>
          </a>
        </div>
      </div>
      </div>`;

      $('#container-feed').append(template);

      popUpImage();
    });
  }
});

$('body').on('click', '.modal-show', function() {
  let iglink = $(this).data('ig-link');
  let button = buttonTemplate({
    href: iglink,
    label: 'see post Instagram',
    class: 'btn-share-ig'
  });

  if (iglink) {
    $('.mfp-bottom-bar').append(button);
  }
});
