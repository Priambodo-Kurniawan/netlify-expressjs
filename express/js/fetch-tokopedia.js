var $ = jQuery;

function starReview(rating) {
  if (rating) {
    let html = '';
    let template = `<span class="trx_addons_accent trx_addons_icon-star"></span>`;
    let template2 = `<span class="trx_addons_icon-star uk-text-muted"></span>`;
    for (var i = 1; i <= 5; i++) {
      if (i <= rating) {
        html += template;
      } else {
        html += template2;
      }
    }
    return html;
  } else {
    return '';
  }
}

function getEtalase(container, params) {
  var etalase = 'new';
  if (params) {
    etalase = params;
  }
  var url = `https://mango-existence.glitch.me/tokopedia/${etalase}`;

  $.ajax({
    url: url,
    dataType: 'json',
    success: function(res) {
      let feeds = res.data.products;

      feeds.forEach((feed, idx) => {
        let freshLink = feed.url.split('?')[0];
        let excerpt = feed.name
          .split(' ')
          .slice(0, 4)
          .join(' ');
        let template = `<div class="uk-width-1-3@m uk-width-1-2 uk-margin-bottom uk-margin-remove-top">
          <div class="trx_addons_cv_portfolio_item">
          <div class="trx_addons_cv_portfolio_item_thumb trx_addons_hover trx_addons_hover_style_zoomin">
            <a href="${
              feed.image_url_700
            }" class="inited click-mobile modal-show"
                  rel="magnific" title="${feed.name}" data-price="${
          feed.price
        }" data-link="${freshLink}">
              <img src="${
                feed.image_url_500
              }" class="attachment-trx_addons-thumb-masonry size-trx_addons-thumb-masonry dropshadow-image" alt="01." />
              <img src="${
                feed.image_url_500
              }" class="attachment-trx_addons-thumb-masonry size-trx_addons-thumb-masonry" alt="01." />
              <div class="trx_addons_hover_mask"></div>
              <div class="trx_addons_hover_content">
                <h6 class="trx_addons_hover_title">
                  <a href="${feed.url}" target="_blank">${excerpt}...</a>
                </h6>
                <a href="${
                  feed.url
                }" target="_blank" class="trx_addons_hover_icon trx_addons_hover_icon_link"></a>
                <a href="${
                  feed.image_url_700
                }" class="trx_addons_hover_icon trx_addons_hover_icon_zoom inited modal-show"
                  rel="magnific" title="${feed.name}" data-price="${
          feed.price
        }" data-link="${freshLink}"></a>
              </div>
            </a>
          </div>
        </div>
        </div>`;

        $(container).append(template);

        popUpImage();
      });
    }
  });
}

function getEtalaseNew(container, params) {
  var etalase = 'new';
  if (params) {
    etalase = params;
  }
  var url = `https://mango-existence.glitch.me/tokopedia/${etalase}`;

  $.ajax({
    url: url,
    dataType: 'json',
    success: function(res) {
      let feeds = res.data.products;

      feeds.forEach((feed, idx) => {
        let freshLink = feed.url.split('?')[0];
        let template = `<div class="uk-width-1-2@m uk-width-1-1 uk-margin-bottom uk-margin-remove-top uk-first-column">
                      <div class="uk-background-default box-shadow-card uk-box-shadow-hover-xlarge uk-padding-small" style="border-radius: 10px;">
                        <div uk-grid class="uk-grid-medium">
                          <div class="uk-width-1-3 uk-position-relative">
                            <div class="image-card">
                              <a href="${feed.image_url_700}"
                                class="inited click-mobile modal-show" rel="magnific"
                                title="${feed.name}" data-price="${
          feed.price
        }" data-link="${freshLink}">
                                <img
                                src="${feed.image_url_500}"
                                class="attachment-trx_addons-thumb-masonry size-trx_addons-thumb-masonry dropshadow-image" alt="01.">
                                <img
                                src="${feed.image_url_500}"
                                class="attachment-trx_addons-thumb-masonry size-trx_addons-thumb-masonry uk-position-relative" alt="01.">
                                <div class="trx_addons_hover_mask"></div>
                              </a>
                            </div>
                          </div>
                          <div class="uk-width-2-3">
                            <h4 class="uk-h5 uk-margin-remove uk-text-left"><b>${feed.name.substring(
                              0,
                              30
                            ) + '...'}</b></h4>
                            <div>
                              ${starReview(feed.rating)}
                              &nbsp;${
                                feed.count_review
                                  ? '(' + feed.count_review + ')'
                                  : ''
                              }
                            </div>
                            <p class="uk-text-muted uk-margin-small-bottom">${
                              feed.price
                            }</p>
                          </div>
                        </div>
                      </div>
                      <div class="trx_addons_cv_portfolio_item uk-hidden">
                        <div class="trx_addons_cv_portfolio_item_thumb trx_addons_hover trx_addons_hover_style_zoomin">
                          <a href="${feed.image_url_500}"
                            class="inited click-mobile modal-show" rel="magnific" title="${
                              feed.name
                            }" data-price="${
          feed.price
        }" data-link="${freshLink}">
                            <img
                              src="${feed.image_url_500}"
                              class="attachment-trx_addons-thumb-masonry size-trx_addons-thumb-masonry dropshadow-image" alt="01.">
                            <img
                              src="${feed.image_url_500}"
                              class="attachment-trx_addons-thumb-masonry size-trx_addons-thumb-masonry" alt="01.">
                            <div class="trx_addons_hover_mask"></div>
                          </a>
                          <div class="trx_addons_hover_content"><a
                              href="${feed.image_url_500}"
                              class="inited click-mobile modal-show" rel="magnific"
                              title="${feed.name}" data-price="${
          feed.price
        }" data-link="${freshLink}">
                            </a>
                            <h6 class="trx_addons_hover_title"><a
                                href="${feed.url}"
                                class="inited click-mobile modal-show" rel="magnific"
                                title="${feed.name}" data-price="${
          feed.price
        }" data-link="${freshLink}">
                              </a><a
                                href="${freshLink}"
                                target="_blank">IPHONE 7 128GB SECOND...</a>
                            </h6>
                            <a href="${freshLink}"
                              target="_blank" class="trx_addons_hover_icon trx_addons_hover_icon_link"></a>
                            <a href="${feed.url}"
                              class="trx_addons_hover_icon trx_addons_hover_icon_zoom inited modal-show" rel="magnific"
                              title="${feed.name}" data-price="${
          feed.price
        }" data-link="${freshLink}"></a>
                          </div>
                    
                        </div>
                      </div>
                    </div>`;

        $(container).append(template);

        popUpImage();
      });
    }
  });
}

getEtalase('#container-tokped-1', 'second');
getEtalase('#container-tokped-2', 'new');
// getEtalase('#container-tokped-3', 'sold');
getEtalaseNew('#container-new', 'sold');

function buttonTemplate(obj, column) {
  let temp = `<div class="trx_addons_contact_form_field modal-button uk-grid uk-grid-small">
    <div class="uk-width-1-${column ? column : '1'}">
    <a href="${obj.href}" target="_blank">
      <button class="${obj.class ? obj.class : ''}">${obj.label}</button>
    </a>
    </div>
  </div>`;
  return temp;
}

function linkWhatsapp(obj) {
  let link = `https://api.whatsapp.com/send?phone=${obj.num}&text=${obj.msg}`;
  let button = `<div class="uk-width-1-2">
    <a href="${link}">
      <button>${obj.label}</button>
    </a>
    </div>`;
  return button;
}

$('body').on('click', '.modal-show', function() {
  let price = $(this).data('price');
  let link = $(this).data('link');
  let productName = $(this).attr('title');
  let message = `Halo is this product available: \r\n *${productName}* \r\n\r\n\r\n ${link}`;
  let encodedMsg = window.encodeURIComponent(message);

  let button = buttonTemplate(
    {
      href: link,
      label: 'see product'
    },
    2
  );
  let buttonWa = linkWhatsapp({
    num: '+6287889562890',
    msg: encodedMsg,
    label: 'ask admin'
  });

  if (price) {
    let nextClass = $('.mfp-title')
      .next()
      .attr('class');

    if (nextClass == 'modal-price') {
      $('.modal-price').text(price);
    } else {
      let temp = `<div class="modal-price">${price}</div>`;
      $('.mfp-title').append(temp);
      $('.mfp-bottom-bar').append(button);
      $('.trx_addons_contact_form_field.modal-button').append(buttonWa);
    }
  }
});
