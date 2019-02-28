/* ATTENTION! This file was generated automatically! Don't change it!!!
----------------------------------------------------------------------- */
jQuery(document).ready(function() {
  'use strict';
  TRX_ADDONS_STORAGE['vc_init_counter'] = 0;
  trx_addons_init_actions();
});
jQuery(window).on('beforeunload', function() {
  'use strict';
  jQuery('#page_preloader')
    .css({ display: 'block', opacity: 0 })
    .animate({ opacity: 0.8 }, 300);
});
function trx_addons_init_actions() {
  'use strict';
  if (
    TRX_ADDONS_STORAGE['vc_edit_mode'] > 0 &&
    jQuery('.vc_empty-placeholder').length == 0 &&
    TRX_ADDONS_STORAGE['vc_init_counter']++ < 30
  ) {
    setTimeout(trx_addons_init_actions, 200);
    return;
  }
  jQuery('#page_preloader')
    .animate({ opacity: 0 }, 300)
    .css({ display: 'none' });
  if (trx_addons_is_retina()) {
    trx_addons_set_cookie('trx_addons_is_retina', 1, 365);
  }
  trx_addons_add_hidden_element_handler(
    'ready_actions',
    trx_addons_ready_actions
  );
  trx_addons_ready_actions();
  trx_addons_resize_actions();
  trx_addons_scroll_actions();
  jQuery(window).resize(function() {
    'use strict';
    trx_addons_resize_actions();
  });
  jQuery(window).scroll(function() {
    'use strict';
    trx_addons_scroll_actions();
  });
}
function trx_addons_ready_actions(container) {
  'use strict';
  if (arguments.length == 0) var container = jQuery('body');
  if (
    container.find('.trx_addons_tabs:not(.inited)').length > 0 &&
    jQuery.ui &&
    jQuery.ui.tabs
  ) {
    container.find('.trx_addons_tabs:not(.inited)').each(function() {
      'use strict';
      var init = jQuery(this).data('active');
      if (isNaN(init)) {
        init = 0;
        var active = jQuery(this)
          .find('> ul > li[data-active="true"]')
          .eq(0);
        if (active.length > 0) {
          init = active.index();
          if (isNaN(init) || init < 0) init = 0;
        }
      } else {
        init = Math.max(0, init);
      }
      jQuery(this)
        .addClass('inited')
        .tabs({
          active: init,
          show: { effect: 'fadeIn', duration: 300 },
          hide: { effect: 'fadeOut', duration: 300 },
          create: function(event, ui) {
            if (ui.panel.length > 0) trx_addons_init_hidden_elements(ui.panel);
          },
          activate: function(event, ui) {
            if (ui.newPanel.length > 0)
              trx_addons_init_hidden_elements(ui.newPanel);
          }
        });
    });
  }
  if (
    container.find('.trx_addons_accordion:not(.inited)').length > 0 &&
    jQuery.ui &&
    jQuery.ui.accordion
  ) {
    container.find('.trx_addons_accordion:not(.inited)').each(function() {
      'use strict';
      var accordion = jQuery(this);
      var headers = accordion.data('headers');
      if (headers === undefined) headers = 'h5';
      var height_style = accordion.data('height-style');
      if (height_style === undefined) height_style = 'content';
      var init = accordion.data('active');
      var active = false;
      if (isNaN(init)) {
        init = 0;
        var active = accordion.find(headers + '[data-active="true"]').eq(0);
        if (active.length > 0) {
          while (!active.parent().hasClass('trx_addons_accordion')) {
            active = active.parent();
          }
          init = active.index();
          if (isNaN(init) || init < 0) init = 0;
        }
      } else {
        init = Math.max(0, init);
      }
      accordion.addClass('inited').accordion({
        active: init,
        header: headers,
        heightStyle: height_style,
        create: function(event, ui) {
          if (ui.panel.length > 0) {
            trx_addons_init_hidden_elements(ui.panel);
          } else if (active !== false && active.length > 0) {
            active.find('>' + headers).trigger('click');
          }
        },
        activate: function(event, ui) {
          if (ui.newPanel.length > 0)
            trx_addons_init_hidden_elements(ui.newPanel);
        }
      });
    });
  }
  if (window.trx_addons_init_sliders) trx_addons_init_sliders(jQuery('body'));
  if (window.trx_addons_sc_init_actions)
    trx_addons_sc_init_actions(jQuery('body'));
  if (TRX_ADDONS_STORAGE['popup_engine'] == 'pretty') {
    container
      .find(
        "a[href$='jpg']:not(.inited),a[href$='jpeg']:not(.inited),a[href$='png']:not(.inited),a[href$='gif']:not(.inited)"
      )
      .attr('rel', 'prettyPhoto[slideshow]');
    var images = container
      .find(
        "a[rel*='prettyPhoto']:not(.inited):not([data-rel*='pretty']):not([rel*='magnific']):not([data-rel*='magnific'])"
      )
      .addClass('inited');
    try {
      images.prettyPhoto({
        social_tools: '',
        template: 'facebook',
        deeplinking: false
      });
    } catch (e) {}
  } else if (TRX_ADDONS_STORAGE['popup_engine'] == 'magnific') {
    container
      .find(
        "a[href$='jpg']:not(.inited),a[href$='jpeg']:not(.inited),a[href$='png']:not(.inited),a[href$='gif']:not(.inited)"
      )
      .attr('rel', 'magnific');
    var images = container
      .find(
        "a[rel*='magnific']:not(.inited):not(.prettyphoto):not([rel*='pretty']):not([data-rel*='pretty'])"
      )
      .addClass('inited');
    try {
      images.magnificPopup({
        type: 'image',
        mainClass: 'mfp-img-mobile',
        closeOnContentClick: true,
        closeBtnInside: true,
        fixedContentPos: true,
        midClick: true,
        preloader: true,
        tLoading: TRX_ADDONS_STORAGE['msg_magnific_loading'],
        gallery: { enabled: true },
        image: {
          tError: TRX_ADDONS_STORAGE['msg_magnific_error'],
          verticalFit: true
        },
        zoom: {
          enabled: true,
          duration: 300,
          easing: 'ease-in-out',
          opener: function(openerElement) {
            if (!openerElement.is('img')) {
              if (
                openerElement.parents('.trx_addons_hover').find('img').length >
                0
              )
                openerElement = openerElement
                  .parents('.trx_addons_hover')
                  .find('img');
              else if (openerElement.siblings('img').length > 0)
                openerElement = openerElement.siblings('img');
              else if (
                openerElement
                  .parent()
                  .parent()
                  .find('img').length > 0
              )
                openerElement = openerElement
                  .parent()
                  .parent()
                  .find('img');
            }
            return openerElement;
          }
        },
        callbacks: {
          beforeClose: function() {
            jQuery('.mfp-figure figcaption').hide();
            jQuery('.mfp-figure .mfp-arrow').hide();
          }
        }
      });
    } catch (e) {}
  }
  if (
    container.find(
      '.post_counters_likes:not(.inited),.comment_counters_likes:not(.inited)'
    ).length > 0
  ) {
    container
      .find(
        '.post_counters_likes:not(.inited),.comment_counters_likes:not(.inited)'
      )
      .addClass('inited')
      .on('click', function(e) {
        'use strict';
        var button = jQuery(this);
        var inc = button.hasClass('enabled') ? 1 : -1;
        var post_id = button.hasClass('post_counters_likes')
          ? button.data('postid')
          : button.data('commentid');
        var cookie_likes = trx_addons_get_cookie(
          button.hasClass('post_counters_likes')
            ? 'trx_addons_likes'
            : 'trx_addons_comment_likes'
        );
        if (cookie_likes === undefined || cookie_likes === null)
          cookie_likes = '';
        jQuery
          .post(TRX_ADDONS_STORAGE['ajax_url'], {
            action: button.hasClass('post_counters_likes')
              ? 'post_counter'
              : 'comment_counter',
            nonce: TRX_ADDONS_STORAGE['ajax_nonce'],
            post_id: post_id,
            likes: inc
          })
          .done(function(response) {
            'use strict';
            var rez = {};
            try {
              rez = JSON.parse(response);
            } catch (e) {
              rez = { error: TRX_ADDONS_STORAGE['msg_ajax_error'] };
              console.log(response);
            }
            if (rez.error === '') {
              var counter = rez.counter;
              if (inc == 1) {
                var title = button.data('title-dislike');
                button
                  .removeClass('enabled trx_addons_icon-heart-empty')
                  .addClass('disabled trx_addons_icon-heart');
                cookie_likes +=
                  (cookie_likes.substr(-1) != ',' ? ',' : '') + post_id + ',';
              } else {
                var title = button.data('title-like');
                button
                  .removeClass('disabled trx_addons_icon-heart')
                  .addClass('enabled trx_addons_icon-heart-empty');
                cookie_likes = cookie_likes.replace(',' + post_id + ',', ',');
              }
              button
                .data('likes', counter)
                .attr('title', title)
                .find(
                  button.hasClass('post_counters_likes')
                    ? '.post_counters_number'
                    : '.comment_counters_number'
                )
                .html(counter);
              trx_addons_set_cookie(
                button.hasClass('post_counters_likes')
                  ? 'trx_addons_likes'
                  : 'trx_addons_comment_likes',
                cookie_likes,
                365
              );
            } else {
              alert(TRX_ADDONS_STORAGE['msg_error_like']);
            }
          });
        e.preventDefault();
        return false;
      });
  }
  if (
    container.find('.socials_share .socials_caption:not(.inited)').length > 0
  ) {
    container
      .find('.socials_share .socials_caption:not(.inited)')
      .each(function() {
        'use strict';
        jQuery(this)
          .addClass('inited')
          .on('click', function(e) {
            'use strict';
            jQuery(this)
              .siblings('.social_items')
              .fadeToggle();
            e.preventDefault();
            return false;
          });
      });
  }
  if (container.find('.socials_share .social_items:not(.inited)').length > 0) {
    container
      .find('.socials_share .social_items:not(.inited)')
      .each(function() {
        'use strict';
        jQuery(this)
          .addClass('inited')
          .on('click', '.social_item_popup > a.social_icons', function(e) {
            'use strict';
            var url = jQuery(this).data('link');
            window.open(
              url,
              '_blank',
              'scrollbars=0, resizable=1, menubar=0, left=100, top=100, width=480, height=400, toolbar=0, status=0'
            );
            e.preventDefault();
            return false;
          });
      });
  }
  container.find('.widget ul > li').each(function() {
    'use strict';
    if (jQuery(this).find('ul').length > 0) {
      jQuery(this).addClass('has_children');
    }
  });
  container
    .find('.widget_archive a:not(.inited)')
    .addClass('inited')
    .each(function() {
      'use strict';
      var val = jQuery(this)
        .html()
        .split(' ');
      if (val.length > 1) {
        val[val.length - 1] = '<span>' + val[val.length - 1] + '</span>';
        jQuery(this).html(val.join(' '));
      }
    });
  container
    .find('.trx_addons_scroll_to_top:not(.inited)')
    .addClass('inited')
    .on('click', function(e) {
      'use strict';
      jQuery('html,body').animate({ scrollTop: 0 }, 'slow');
      e.preventDefault();
      return false;
    });
}
function trx_addons_scroll_actions() {
  'use strict';
  var scroll_offset = jQuery(window).scrollTop();
  var scroll_to_top_button = jQuery('.trx_addons_scroll_to_top');
  var adminbar_height = Math.max(0, jQuery('#wpadminbar').height());
  if (scroll_to_top_button.length > 0) {
    if (scroll_offset > 100) scroll_to_top_button.addClass('show');
    else scroll_to_top_button.removeClass('show');
  }
  jQuery('[data-animation^="animated"]:not(.animated)').each(function() {
    'use strict';
    if (jQuery(this).offset().top < scroll_offset + jQuery(window).height())
      jQuery(this).addClass(jQuery(this).data('animation'));
  });
}
function trx_addons_resize_actions() {
  'use strict';
  if (window.trx_addons_resize_sliders) trx_addons_resize_sliders();
}
function trx_addons_get_cookie(name) {
  'use strict';
  var defa = arguments[1] != undefined ? arguments[1] : null;
  var start = document.cookie.indexOf(name + '=');
  var len = start + name.length + 1;
  if (!start && name != document.cookie.substring(0, name.length)) {
    return defa;
  }
  if (start == -1) return defa;
  var end = document.cookie.indexOf(';', len);
  if (end == -1) end = document.cookie.length;
  return unescape(document.cookie.substring(len, end));
}
function trx_addons_set_cookie(name, value, expires, path, domain, secure) {
  'use strict';
  var expires = arguments[2] != undefined ? arguments[2] : 0;
  var path = arguments[3] != undefined ? arguments[3] : '/';
  var domain = arguments[4] != undefined ? arguments[4] : '';
  var secure = arguments[5] != undefined ? arguments[5] : '';
  var today = new Date();
  today.setTime(today.getTime());
  if (expires) {
    expires = expires * 1000 * 60 * 60 * 24;
  }
  var expires_date = new Date(today.getTime() + expires);
  document.cookie =
    name +
    '=' +
    escape(value) +
    (expires ? ';expires=' + expires_date.toGMTString() : '') +
    (path ? ';path=' + path : '') +
    (domain ? ';domain=' + domain : '') +
    (secure ? ';secure' : '');
}
function trx_addons_del_cookie(name, path, domain) {
  'use strict';
  var path = arguments[1] != undefined ? arguments[1] : '/';
  var domain = arguments[2] != undefined ? arguments[2] : '';
  if (trx_addons_get_cookie(name))
    document.cookie =
      name +
      '=' +
      (path ? ';path=' + path : '') +
      (domain ? ';domain=' + domain : '') +
      ';expires=Thu, 01-Jan-1970 00:00:01 GMT';
}
function trx_addons_clear_listbox(box) {
  'use strict';
  for (var i = box.options.length - 1; i >= 0; i--) box.options[i] = null;
}
function trx_addons_add_listbox_item(box, val, text) {
  'use strict';
  var item = new Option();
  item.value = val;
  item.text = text;
  box.options.add(item);
}
function trx_addons_del_listbox_item_by_value(box, val) {
  'use strict';
  for (var i = 0; i < box.options.length; i++) {
    if (box.options[i].value == val) {
      box.options[i] = null;
      break;
    }
  }
}
function trx_addons_del_listbox_item_by_text(box, txt) {
  'use strict';
  for (var i = 0; i < box.options.length; i++) {
    if (box.options[i].text == txt) {
      box.options[i] = null;
      break;
    }
  }
}
function trx_addons_find_listbox_item_by_value(box, val) {
  'use strict';
  var idx = -1;
  for (var i = 0; i < box.options.length; i++) {
    if (box.options[i].value == val) {
      idx = i;
      break;
    }
  }
  return idx;
}
function trx_addons_find_listbox_item_by_text(box, txt) {
  'use strict';
  var idx = -1;
  for (var i = 0; i < box.options.length; i++) {
    if (box.options[i].text == txt) {
      idx = i;
      break;
    }
  }
  return idx;
}
function trx_addons_select_listbox_item_by_value(box, val) {
  'use strict';
  for (var i = 0; i < box.options.length; i++) {
    box.options[i].selected = val == box.options[i].value;
  }
}
function trx_addons_select_listbox_item_by_text(box, txt) {
  'use strict';
  for (var i = 0; i < box.options.length; i++) {
    box.options[i].selected = txt == box.options[i].text;
  }
}
function trx_addons_get_listbox_values(box) {
  'use strict';
  var delim = arguments[1] ? arguments[1] : ',';
  var str = '';
  for (var i = 0; i < box.options.length; i++) {
    str += (str ? delim : '') + box.options[i].value;
  }
  return str;
}
function trx_addons_get_listbox_texts(box) {
  'use strict';
  var delim = arguments[1] ? arguments[1] : ',';
  var str = '';
  for (var i = 0; i < box.options.length; i++) {
    str += (str ? delim : '') + box.options[i].text;
  }
  return str;
}
function trx_addons_sort_listbox(box) {
  'use strict';
  var temp_opts = new Array();
  var temp = new Option();
  for (var i = 0; i < box.options.length; i++) {
    temp_opts[i] = box.options[i].clone();
  }
  for (var x = 0; x < temp_opts.length - 1; x++) {
    for (var y = x + 1; y < temp_opts.length; y++) {
      if (temp_opts[x].text > temp_opts[y].text) {
        temp = temp_opts[x];
        temp_opts[x] = temp_opts[y];
        temp_opts[y] = temp;
      }
    }
  }
  for (var i = 0; i < box.options.length; i++) {
    box.options[i] = temp_opts[i].clone();
  }
}
function trx_addons_get_listbox_selected_index(box) {
  'use strict';
  for (var i = 0; i < box.options.length; i++) {
    if (box.options[i].selected) return i;
  }
  return -1;
}
function trx_addons_get_listbox_selected_value(box) {
  'use strict';
  for (var i = 0; i < box.options.length; i++) {
    if (box.options[i].selected) {
      return box.options[i].value;
    }
  }
  return null;
}
function trx_addons_get_listbox_selected_text(box) {
  'use strict';
  for (var i = 0; i < box.options.length; i++) {
    if (box.options[i].selected) {
      return box.options[i].text;
    }
  }
  return null;
}
function trx_addons_get_listbox_selected_option(box) {
  'use strict';
  for (var i = 0; i < box.options.length; i++) {
    if (box.options[i].selected) {
      return box.options[i];
    }
  }
  return null;
}
function trx_addons_get_radio_value(radioGroupObj) {
  'use strict';
  for (var i = 0; i < radioGroupObj.length; i++)
    if (radioGroupObj[i].checked) return radioGroupObj[i].value;
  return null;
}
function trx_addons_set_radio_checked_by_num(radioGroupObj, num) {
  'use strict';
  for (var i = 0; i < radioGroupObj.length; i++)
    if (radioGroupObj[i].checked && i != num) radioGroupObj[i].checked = false;
    else if (i == num) radioGroupObj[i].checked = true;
}
function trx_addons_set_radio_checked_by_value(radioGroupObj, val) {
  'use strict';
  for (var i = 0; i < radioGroupObj.length; i++)
    if (radioGroupObj[i].checked && radioGroupObj[i].value != val)
      radioGroupObj[i].checked = false;
    else if (radioGroupObj[i].value == val) radioGroupObj[i].checked = true;
}
function trx_addons_form_validate(form, opt) {
  'use strict';
  if (typeof opt.error_message_show == 'undefined')
    opt.error_message_show = true;
  if (typeof opt.error_message_time == 'undefined')
    opt.error_message_time = 5000;
  if (typeof opt.error_message_class == 'undefined')
    opt.error_message_class = 'trx_addons_message_box_error';
  if (typeof opt.error_message_text == 'undefined')
    opt.error_message_text = 'Incorrect data in the fields!';
  if (typeof opt.error_fields_class == 'undefined')
    opt.error_fields_class = 'trx_addons_field_error';
  if (typeof opt.exit_after_first_error == 'undefined')
    opt.exit_after_first_error = false;
  var error_msg = '';
  form.find(':input').each(function() {
    'use strict';
    if (error_msg != '' && opt.exit_after_first_error) return;
    for (var i = 0; i < opt.rules.length; i++) {
      if (jQuery(this).attr('name') == opt.rules[i].field) {
        var val = jQuery(this).val();
        var error = false;
        if (typeof opt.rules[i].min_length == 'object') {
          if (
            opt.rules[i].min_length.value > 0 &&
            val.length < opt.rules[i].min_length.value
          ) {
            if (error_msg == '')
              jQuery(this)
                .get(0)
                .focus();
            error_msg +=
              '<p class="trx_addons_error_item">' +
              (typeof opt.rules[i].min_length.message != 'undefined'
                ? opt.rules[i].min_length.message
                : opt.error_message_text) +
              '</p>';
            error = true;
          }
        }
        if (
          (!error || !opt.exit_after_first_error) &&
          typeof opt.rules[i].max_length == 'object'
        ) {
          if (
            opt.rules[i].max_length.value > 0 &&
            val.length > opt.rules[i].max_length.value
          ) {
            if (error_msg == '')
              jQuery(this)
                .get(0)
                .focus();
            error_msg +=
              '<p class="trx_addons_error_item">' +
              (typeof opt.rules[i].max_length.message != 'undefined'
                ? opt.rules[i].max_length.message
                : opt.error_message_text) +
              '</p>';
            error = true;
          }
        }
        if (
          (!error || !opt.exit_after_first_error) &&
          typeof opt.rules[i].mask == 'object'
        ) {
          if (opt.rules[i].mask.value != '') {
            var regexp = new RegExp(opt.rules[i].mask.value);
            if (!regexp.test(val)) {
              if (error_msg == '')
                jQuery(this)
                  .get(0)
                  .focus();
              error_msg +=
                '<p class="trx_addons_error_item">' +
                (typeof opt.rules[i].mask.message != 'undefined'
                  ? opt.rules[i].mask.message
                  : opt.error_message_text) +
                '</p>';
              error = true;
            }
          }
        }
        if (
          (!error || !opt.exit_after_first_error) &&
          typeof opt.rules[i].equal_to == 'object'
        ) {
          if (
            opt.rules[i].equal_to.value != '' &&
            val !=
              jQuery(
                jQuery(this).get(0).form[opt.rules[i].equal_to.value]
              ).val()
          ) {
            if (error_msg == '')
              jQuery(this)
                .get(0)
                .focus();
            error_msg +=
              '<p class="trx_addons_error_item">' +
              (typeof opt.rules[i].equal_to.message != 'undefined'
                ? opt.rules[i].equal_to.message
                : opt.error_message_text) +
              '</p>';
            error = true;
          }
        }
        if (opt.error_fields_class != '')
          jQuery(this).toggleClass(opt.error_fields_class, error);
      }
    }
  });
  if (error_msg != '' && opt.error_message_show) {
    var error_message_box = form.find('.trx_addons_message_box');
    if (error_message_box.length == 0)
      error_message_box = form.parent().find('.trx_addons_message_box');
    if (error_message_box.length == 0) {
      form.append('<div class="trx_addons_message_box"></div>');
      error_message_box = form.find('.trx_addons_message_box');
    }
    if (opt.error_message_class)
      error_message_box.toggleClass(opt.error_message_class, true);
    error_message_box.html(error_msg).fadeIn();
    setTimeout(function() {
      error_message_box.fadeOut();
    }, opt.error_message_time);
  }
  return error_msg != '';
}
function trx_addons_document_animate_to(id) {
  'use strict';
  if (id.indexOf('#') == -1) id = '#' + id;
  var obj = jQuery(id).eq(0);
  if (obj.length == 0) return;
  var oft = jQuery(id).offset().top;
  var st = jQuery(window).scrollTop();
  var speed = Math.min(
    1600,
    Math.max(
      400,
      Math.round((Math.abs(oft - st) / jQuery(window).height()) * 100)
    )
  );
  jQuery('body,html').animate(
    {
      scrollTop:
        oft -
        jQuery('#wpadminbar').height() -
        jQuery('header.fixedTopMenu .topWrap').height()
    },
    speed,
    'swing'
  );
}
function trx_addons_document_set_location(curLoc) {
  'use strict';
  if (
    history.pushState === undefined ||
    navigator.userAgent.match(/MSIE\s[6-9]/i) != null
  )
    return;
  try {
    history.pushState(null, null, curLoc);
    return;
  } catch (e) {}
  location.href = curLoc;
}
function trx_addons_add_to_url(prm) {
  'use strict';
  var ignore_empty = arguments[1] !== undefined ? arguments[1] : true;
  var loc = location.href;
  var q = loc.indexOf('?');
  var attr = {};
  if (q > 0) {
    var qq = loc.substr(q + 1).split('&');
    var parts = '';
    for (var i = 0; i < qq.length; i++) {
      var parts = qq[i].split('=');
      attr[parts[0]] = parts.length > 1 ? parts[1] : '';
    }
  }
  for (var p in prm) {
    attr[p] = prm[p];
  }
  loc = (q > 0 ? loc.substr(0, q) : loc) + '?';
  var i = 0;
  for (p in attr) {
    if (ignore_empty && attr[p] == '') continue;
    loc += (i++ > 0 ? '&' : '') + p + '=' + attr[p];
  }
  return loc;
}
function trx_addons_add_hidden_element_handler(key, handler) {
  if (TRX_ADDONS_STORAGE['hidden_elements'] === undefined)
    TRX_ADDONS_STORAGE['hidden_elements'] = [];
  TRX_ADDONS_STORAGE['hidden_elements'][key] = handler;
}
function trx_addons_init_hidden_elements(cont) {
  if (TRX_ADDONS_STORAGE['hidden_elements']) {
    for (key in TRX_ADDONS_STORAGE['hidden_elements']) {
      TRX_ADDONS_STORAGE['hidden_elements'][key](cont);
    }
  }
}
function trx_addons_browser_is_mobile() {
  'use strict';
  var check = false;
  (function(a) {
    if (
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od|ad)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(
        a
      ) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
        a.substr(0, 4)
      )
    )
      check = true;
  })(navigator.userAgent || navigator.vendor || window.opera);
  return check;
}
function trx_addons_browser_is_ios() {
  'use strict';
  return navigator.userAgent.match(/iPad|iPhone|iPod/i) != null;
}
function trx_addons_is_retina() {
  'use strict';
  var mediaQuery =
    '(-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3/2), (min-resolution: 1.5dppx)';
  return (
    window.devicePixelRatio > 1 ||
    (window.matchMedia && window.matchMedia(mediaQuery).matches)
  );
}
function trx_addons_get_file_name(path) {
  'use strict';
  path = path.replace(/\\/g, '/');
  var pos = path.lastIndexOf('/');
  if (pos >= 0) path = path.substr(pos + 1);
  return path;
}
function trx_addons_get_file_ext(path) {
  'use strict';
  var pos = path.lastIndexOf('.');
  path = pos >= 0 ? path.substr(pos + 1) : '';
  return path;
}
function trx_addons_check_images_complete(cont) {
  'use strict';
  var complete = true;
  cont.find('img').each(function() {
    if (!complete) return;
    if (!jQuery(this).get(0).complete) complete = false;
  });
  return complete;
}
function trx_addons_serialize(mixed_val) {
  'use strict';
  var obj_to_array = arguments.length == 1 || argument[1] === true;
  switch (typeof mixed_val) {
    case 'number':
      if (isNaN(mixed_val) || !isFinite(mixed_val)) return false;
      else
        return (
          (Math.floor(mixed_val) == mixed_val ? 'i' : 'd') +
          ':' +
          mixed_val +
          ';'
        );
    case 'string':
      return 's:' + mixed_val.length + ':"' + mixed_val + '";';
    case 'boolean':
      return 'b:' + (mixed_val ? '1' : '0') + ';';
    case 'object':
      if (mixed_val == null) return 'N;';
      else if (mixed_val instanceof Array) {
        var idxobj = { idx: -1 };
        var map = [];
        for (var i = 0; i < mixed_val.length; i++) {
          idxobj.idx++;
          var ser = trx_addons_serialize(mixed_val[i]);
          if (ser) map.push(trx_addons_serialize(idxobj.idx) + ser);
        }
        return 'a:' + mixed_val.length + ':{' + map.join('') + '}';
      } else {
        var class_name = trx_addons_get_class(mixed_val);
        if (class_name == undefined) return false;
        var props = new Array();
        for (var prop in mixed_val) {
          var ser = trx_addons_serialize(mixed_val[prop]);
          if (ser) props.push(trx_addons_serialize(prop) + ser);
        }
        if (obj_to_array)
          return 'a:' + props.length + ':{' + props.join('') + '}';
        else
          return (
            'O:' +
            class_name.length +
            ':"' +
            class_name +
            '":' +
            props.length +
            ':{' +
            props.join('') +
            '}'
          );
      }
    case 'undefined':
      return 'N;';
  }
  return false;
}
function trx_addons_get_class(obj) {
  'use strict';
  if (
    obj instanceof Object &&
    !(obj instanceof Array) &&
    !(obj instanceof Function) &&
    obj.constructor
  ) {
    var arr = obj.constructor.toString().match(/function\s*(\w+)/);
    if (arr && arr.length == 2) return arr[1];
  }
  return false;
}
function trx_addons_init_sliders(container) {
  'use strict';
  if (container.find('.slider_swiper:not(.inited)').length > 0) {
    container.find('.slider_swiper:not(.inited)').each(function() {
      'use strict';
      trx_addons_add_hidden_element_handler(
        'swiper',
        trx_addons_init_hidden_sliders
      );
      if (jQuery(this).parents('div:hidden,article:hidden').length > 0) return;
      var id = jQuery(this).attr('id');
      if (id == undefined) {
        id = 'swiper_' + Math.random();
        id = id.replace('.', '');
        jQuery(this).attr('id', id);
      }
      jQuery(this)
        .css({ display: 'block', opacity: 0 })
        .addClass(id)
        .addClass('inited')
        .data('settings', { mode: 'horizontal' });
      var smw = jQuery(this).data('slides-min-width');
      if (smw == undefined) {
        smw = 250;
        jQuery(this).attr('data-slides-min-width', smw);
      }
      var width = jQuery(this).width();
      if (width == 0)
        width = jQuery(this)
          .parent()
          .width();
      var spv = jQuery(this).data('slides-per-view');
      if (spv == undefined) {
        spv = 1;
        jQuery(this).attr('data-slides-per-view', spv);
      }
      if (width / spv < smw) spv = Math.max(1, Math.floor(width / smw));
      var space = jQuery(this).data('slides-space');
      if (space == undefined) space = 0;
      if (TRX_ADDONS_STORAGE['swipers'] === undefined)
        TRX_ADDONS_STORAGE['swipers'] = {};
      TRX_ADDONS_STORAGE['swipers'][id] = new Swiper('.' + id, {
        calculateHeight: !jQuery(this).hasClass('slider_height_fixed'),
        resizeReInit: true,
        autoResize: true,
        loop: true,
        grabCursor: true,
        pagination: jQuery(this).hasClass('slider_pagination')
          ? '#' + id + ' .slider_pagination_wrap'
          : false,
        paginationClickable: jQuery(this).hasClass('slider_pagination')
          ? '#' + id + ' .slider_pagination_wrap'
          : false,
        nextButton: jQuery(this).hasClass('slider_controls')
          ? '#' + id + ' .slider_next'
          : false,
        prevButton: jQuery(this).hasClass('slider_controls')
          ? '#' + id + ' .slider_prev'
          : false,
        autoplay: jQuery(this).hasClass('slider_noautoplay')
          ? false
          : jQuery(this).data('interval') == '' ||
            isNaN(jQuery(this).data('interval'))
          ? 7000
          : parseInt(jQuery(this).data('interval')),
        autoplayDisableOnInteraction: false,
        initialSlide: 0,
        slidesPerView: spv,
        loopedSlides: spv,
        spaceBetween: space,
        speed: 600
      });
      jQuery(this).animate({ opacity: 1 }, 'fast');
    });
  }
}
function trx_addons_init_hidden_sliders(container) {
  'use strict';
  trx_addons_init_sliders(container);
  trx_addons_resize_sliders(container);
}
function trx_addons_resize_sliders(container) {
  'use strict';
  if (container === undefined) container = jQuery('body');
  container.find('.slider_swiper.inited').each(function() {
    'use strict';
    if (jQuery(this).parents('div:hidden,article:hidden').length > 0) return;
    var id = jQuery(this).attr('id');
    var width = jQuery(this).width();
    var last_width = jQuery(this).data('last-width');
    if (isNaN(last_width)) last_width = 0;
    if (last_width == 0 || last_width != width) {
      var smw = jQuery(this).data('slides-min-width');
      var spv = jQuery(this).data('slides-per-view');
      if (width / spv < smw) spv = Math.max(1, Math.floor(width / smw));
      jQuery(this).data('last-width', width);
      if (TRX_ADDONS_STORAGE['swipers'][id].params.slidesPerView != spv) {
        TRX_ADDONS_STORAGE['swipers'][id].params.slidesPerView = spv;
        TRX_ADDONS_STORAGE['swipers'][id].params.loopedSlides = spv;
      }
    }
    if (!jQuery(this).hasClass('slider_height_fixed')) {
      var h = 0;
      if (jQuery(this).find('.swiper-slide > img').length > 0) {
        jQuery(this)
          .find('.swiper-slide > img')
          .each(function() {
            if (jQuery(this).height() > h) h = jQuery(this).height();
          });
        jQuery(this).height(h);
      } else if (
        jQuery(this)
          .find('.swiper-slide')
          .text() == '' ||
        jQuery(this).hasClass('slider_height_auto')
      ) {
        jQuery(this).height(Math.floor((width / 16) * 9));
      }
    }
  });
}
jQuery(document).ready(function() {
  'use strict';
  if (jQuery('.trx_addons_contact_form_form').length > 0) {
    jQuery('.trx_addons_contact_form_form').submit(function(e) {
      'use strict';
      trx_addons_contact_form_validate(jQuery(this));
      e.preventDefault();
      return false;
    });
  }
});
function trx_addons_contact_form_validate(form) {
  'use strict';
  var url = form.attr('action');
  if (url == '') return false;
  form.find('input').removeClass('trx_addons_error_field');
  var error = trx_addons_form_validate(form, {
    rules: [
      {
        field: 'name',
        min_length: {
          value: 1,
          message: TRX_ADDONS_STORAGE['msg_field_name_empty']
        }
      },
      {
        field: 'email',
        min_length: {
          value: 7,
          message: TRX_ADDONS_STORAGE['msg_field_email_empty']
        },
        mask: {
          value: TRX_ADDONS_STORAGE['email_mask'],
          message: TRX_ADDONS_STORAGE['msg_field_email_not_valid']
        }
      },
      {
        field: 'message',
        min_length: {
          value: 3,
          message: TRX_ADDONS_STORAGE['msg_field_text_empty']
        }
      }
    ]
  });
  if (!error && url != '#') {
    jQuery
      .post(url, {
        action: 'send_contact_form',
        nonce: TRX_ADDONS_STORAGE['ajax_nonce'],
        data: form.serialize()
      })
      .done(function(response) {
        'use strict';
        var rez = {};
        try {
          rez = JSON.parse(response);
        } catch (e) {
          rez = { error: TRX_ADDONS_STORAGE['msg_ajax_error'] };
          console.log(response);
        }
        var result = form
          .find('.trx_addons_message_box')
          .toggleClass('trx_addons_message_box_error', false)
          .toggleClass('trx_addons_message_box_success', false);
        if (rez.error === '') {
          form.get(0).reset();
          result
            .addClass('trx_addons_message_box_success')
            .html(TRX_ADDONS_STORAGE['msg_send_complete']);
        } else {
          result
            .addClass('trx_addons_message_box_error')
            .html(TRX_ADDONS_STORAGE['msg_send_error'] + ' ' + rez.error);
        }
        result
          .fadeIn()
          .delay(3000)
          .fadeOut();
      });
  }
  return !error;
}
jQuery(document).ready(function() {
  'use strict';
  jQuery('.sc_recent_news_header_category_item_more').on('click', function() {
    'use strict';
    jQuery(this)
      .toggleClass('opened')
      .find('.sc_recent_news_header_more_categories')
      .slideToggle();
  });
});
jQuery(document).ready(function() {
  'use strict';
  if (jQuery('.trx_addons_cv_section').length > 0) {
    jQuery('.trx_addons_cv_section_ajax').on(
      'tabsbeforeactivate',
      '.trx_addons_tabs',
      function(event, ui) {
        'use strict';
        if (ui.newPanel.data('need-content'))
          trx_addons_tab_content_loader(ui.newPanel, 1);
      }
    );
    jQuery('.trx_addons_cv_section_ajax').on(
      'click',
      '.trx_addons_pagination a',
      function(e) {
        'use strict';
        var panel = jQuery(this).parents('.trx_addons_tabs_content');
        if (panel.length == 0)
          panel = jQuery(this).parents('.trx_addons_cv_section_content');
        trx_addons_tab_content_loader(panel, jQuery(this).data('page'));
        e.preventDefault();
        return false;
      }
    );
    jQuery('.trx_addons_cv_section').on(
      'click',
      '.trx_addons_cv_section_title, .trx_addons_tabs_titles > li > a',
      function(e) {
        'use strict';
        console.log('triggered to clicked');
        trx_addons_document_set_location(
          trx_addons_add_to_url({
            section: jQuery(this)
              .parents('.trx_addons_cv_section')
              .data('section'),
            tab: jQuery(this).hasClass('trx_addons_cv_section_title')
              ? ''
              : jQuery(this).data('tab')
          })
        );
        e.preventDefault();
        return false;
      }
    );
    jQuery(
      '.trx_addons_cv_section_title > a.trx_addons_cv_section_title_icon'
    ).on('click', function(e) {
      'use strict';
      if (!e) {
        window.event.cancelBubble = true;
      } else if (e.stopPropagation) {
        e.stopPropagation();
      }
    });
    if (jQuery('.trx_addons_cv_navi_buttons').length > 0) {
      var cont = jQuery('.trx_addons_cv_navi_buttons');
      var titles = '';
      var href = location.href;
      cont.find('.trx_addons_cv_section_title').each(function(idx) {
        'use strict';
        var section = jQuery(this)
          .parent()
          .data('section');
        titles +=
          '<a href="javascript:void()" class="trx_addons_cv_navi_buttons_item' +
          (href.indexOf('section=' + section) > 0 ||
          (href.indexOf('section=') == -1 && idx == 0)
            ? ' trx_addons_cv_navi_buttons_item_active'
            : '') +
          '"' +
          ' data-idx="' +
          idx +
          '"' +
          ' data-section="' +
          section +
          '"' +
          ' title="' +
          jQuery(this).text() +
          '"' +
          '></a>';
      });
      cont.append(
        '<div class="trx_addons_cv_navi_buttons_area">' + titles + '</div>'
      );
      cont.find('.trx_addons_cv_navi_buttons_area a').on('click', function(e) {
        'use strict';
        cont
          .find('.trx_addons_cv_section')
          .eq(jQuery(this).data('idx'))
          .find('.trx_addons_cv_section_title')
          .trigger('click');
        jQuery(this)
          .parent()
          .find('.trx_addons_cv_navi_buttons_item')
          .removeClass('trx_addons_cv_navi_buttons_item_active');
        jQuery(this).addClass('trx_addons_cv_navi_buttons_item_active');
        e.preventDefault();
        return false;
      });
      trx_addons_add_hidden_element_handler(
        'cv_navi_buttons',
        trx_addons_cv_navi_buttons_state
      );
    }
    jQuery('.trx_addons_cv_header .trx_addons_cv_button_cv2').on(
      'click',
      function(e) {
        'use strict';
        jQuery('body').removeClass('trx_addons_cv_splash');
        e.preventDefault();
        return false;
      }
    );
  }
});
function trx_addons_tab_content_loader(panel, page) {
  'use strict';
  if (panel.html().replace(/\s/g, '') == '')
    panel.html('<div style="min-height:64px;"></div>');
  else panel.find('> *').css('opacity', 0);
  panel.data('need-content', false).addClass('trx_addons_loading');
  jQuery
    .post(TRX_ADDONS_STORAGE['ajax_url'], {
      nonce: TRX_ADDONS_STORAGE['ajax_nonce'],
      action: 'trx_addons_ajax_get_posts',
      section: panel.parents('.trx_addons_cv_section').data('section'),
      tab: panel.data('tab'),
      page: page
    })
    .done(function(response) {
      'use strict';
      panel.removeClass('trx_addons_loading');
      var rez = {};
      try {
        rez = JSON.parse(response);
      } catch (e) {
        rez = { error: TRX_ADDONS_STORAGE['msg_ajax_error'] };
        console.log(response);
      }
      if (rez.error !== '') {
        panel.html('<div class="trx_addons_error">' + rez.error + '</div>');
      } else {
        panel.html(rez.data).fadeIn(function() {
          trx_addons_init_hidden_elements(panel);
        });
      }
    });
}
function trx_addons_cv_navi_buttons_state(container) {
  'use strict';
  var act = jQuery('.trx_addons_cv_section_title.ui-state-active');
  var buttons = jQuery('.trx_addons_cv_navi_buttons_item');
  if (act.length > 0 && buttons.length > 0) {
    buttons.removeClass('trx_addons_cv_navi_buttons_item_active');
    buttons
      .eq(act.parent().index())
      .addClass('trx_addons_cv_navi_buttons_item_active');
  }
}
function trx_addons_sc_init_actions() {
  'use strict';
  trx_addons_add_hidden_element_handler(
    'sc_ready_actions',
    trx_addons_sc_ready_actions
  );
  trx_addons_sc_ready_actions();
  trx_addons_sc_resize_actions();
  trx_addons_sc_scroll_actions();
  jQuery(window).resize(function() {
    'use strict';
    trx_addons_sc_resize_actions();
  });
  jQuery(window).scroll(function() {
    'use strict';
    trx_addons_sc_scroll_actions();
  });
}
function trx_addons_sc_ready_actions(container) {
  'use strict';
  if (arguments.length == 0) var container = jQuery('body');
  trx_addons_sc_init_skills(container);
}
function trx_addons_sc_scroll_actions() {
  'use strict';
  trx_addons_sc_init_skills();
}
function trx_addons_sc_resize_actions() {
  'use strict';
}
function trx_addons_sc_init_skills(container) {
  'use strict';
  if (arguments.length == 0) var container = jQuery('body');
  var scrollPosition = jQuery(window).scrollTop() + jQuery(window).height();
  container.find('.trx_addons_sc_skills_item:not(.inited)').each(function() {
    'use strict';
    var skillsItem = jQuery(this);
    if (jQuery(this).parents('div:hidden,article:hidden').length > 0) {
      return;
    }
    var scrollSkills = skillsItem.offset().top;
    if (scrollPosition > scrollSkills) {
      skillsItem.addClass('inited');
      var skills = skillsItem.parents('.trx_addons_sc_skills').eq(0);
      var type = skills.data('type');
      var total =
        type == 'pie' && skills.hasClass('trx_addons_sc_skills_compact_on')
          ? skillsItem.find('.trx_addons_sc_skills_data .pie')
          : skillsItem.find('.trx_addons_sc_skills_total').eq(0);
      var start = parseInt(total.data('start'));
      var stop = parseInt(total.data('stop'));
      var maximum = parseInt(total.data('max'));
      var startPercent = Math.round((start / maximum) * 100);
      var stopPercent = Math.round((stop / maximum) * 100);
      var ed = total.data('ed');
      var speed = parseInt(total.data('speed'));
      var step = parseInt(total.data('step'));
      var duration = parseInt(total.data('duration'));
      if (isNaN(duration)) duration = Math.ceil(maximum / step) * speed;
      if (type == 'bar') {
        var dir = skills.data('dir');
        var count = skillsItem.find('.trx_addons_sc_skills_count').eq(0);
        if (dir == 'horizontal')
          count
            .css('width', startPercent + '%')
            .animate({ width: stopPercent + '%' }, duration);
        else if (dir == 'vertical')
          count
            .css('height', startPercent + '%')
            .animate({ height: stopPercent + '%' }, duration);
        trx_addons_sc_animate_skills_counter(
          start,
          stop,
          speed,
          step,
          ed,
          total
        );
      } else if (type == 'counter') {
        trx_addons_sc_animate_skills_counter(
          start,
          stop,
          speed,
          step,
          ed,
          total
        );
      } else if (type == 'pie') {
        var steps = parseInt(total.data('steps'));
        var bg_color = total.data('bg_color');
        var border_color = total.data('border_color');
        var cutout = parseInt(total.data('cutout'));
        var easing = total.data('easing');
        var options = {
          segmentShowStroke: true,
          segmentStrokeColor: border_color,
          segmentStrokeWidth: 1,
          percentageInnerCutout: cutout,
          animationSteps: steps,
          animationEasing: easing,
          animateRotate: true,
          animateScale: false
        };
        var pieData = [];
        total.each(function() {
          'use strict';
          var color = jQuery(this).data('color');
          var stop = parseInt(jQuery(this).data('stop'));
          var stopPercent = Math.round((stop / maximum) * 100);
          pieData.push({ value: stopPercent, color: color });
        });
        if (total.length == 1) {
          trx_addons_sc_animate_skills_counter(
            start,
            stop,
            Math.round(1500 / steps),
            step,
            ed,
            total
          );
          pieData.push({ value: 100 - stopPercent, color: bg_color });
        }
        var canvas = skillsItem.find('canvas');
        canvas
          .attr({ width: skillsItem.width(), height: skillsItem.width() })
          .css({ width: skillsItem.width(), height: skillsItem.height() });
        new Chart(canvas.get(0).getContext('2d')).Doughnut(pieData, options);
      }
    }
  });
}
function trx_addons_sc_animate_skills_counter(
  start,
  stop,
  speed,
  step,
  ed,
  total
) {
  'use strict';
  start = Math.min(stop, start + step);
  total.text(start + ed);
  if (start < stop) {
    setTimeout(function() {
      trx_addons_sc_animate_skills_counter(start, stop, speed, step, ed, total);
    }, speed);
  }
}
