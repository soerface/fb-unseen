function matching_brackets(data) {
  var open_brackets = 0;
  for(var i=0; i<data.length; i++) {
    if (data[i] == '[') {
      open_brackets++;
    } else if (data[i] == ']') {
      open_brackets--;
    }
    if (open_brackets == 0) {
      return data.slice(0, i+1);
    }
  }
}

function add_read_buttons() {
  $('.vBot').each(function(i) {
    if ($(this).find('.mark_as_read').length == 0) {
      $(this).find('._510g').after('<div class="mark_as_read inputbutton">Mark as read</div>');
      var fbnub = $(this).parents('.fbNubFlyoutInner');
      var full_conversation_url = fbnub.find('a.itemAnchor[href*="facebook.com/messages/"]').attr('href')
      var threads;
      $.ajax({
        type: 'GET',
        url: full_conversation_url
      }).done(function ( data ) {
        var exp = /^\<script\>bigPipe\.onPageletArrive\((.*threads":(.*))\)\<\/script\>$/m;
        exp.exec(data);
        threads = JSON.parse(matching_brackets(RegExp.$2));
      });
      var exp = /.*facebook.com\/messages\/(.*)$/;
      exp.exec(full_conversation_url);
      var partner_id = 'fbid:' + RegExp.$1;
      var read_url = 'https://m.facebook.com/messages/read/?tid=';
      $(this).find('.mark_as_read').click(function() {
        chrome.extension.sendRequest({action: 'trackMarkAsRead'})
        var button = $(this)
        button.addClass('inactive');
        setTimeout(function() {
          var conversation_id = '';
          for (var i=0; i<threads.length; i++) {
            if ($.inArray(partner_id, threads[i].participants) != -1) {
              conversation_id = threads[i].thread_id;
              break;
            }
          }
          $.ajax({
            type: 'GET',
            url: read_url + conversation_id
          });
          button.removeClass('inactive');
        }, 2000);
      })
    }
  })
}

$(document).ready(function() {
  chrome.extension.sendRequest({action: 'getSettings'}, function(settings) {
    if (settings.show_mark_as_read) {
      $('#ChatTabsPagelet').bind('DOMNodeInserted', function() {
        add_read_buttons()
      })
      add_read_buttons()
    }
  })
})
