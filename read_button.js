function add_read_buttons() {
  $('.fbMercuryChatTab').each(function(i) {
    if ($(this).find('.mark_as_read').length == 0) {
      $(this).find('.typingIndicator').after('<div class="mark_as_read inputbutton">Mark as read</div>')
      var thread_url = $(this).find('a.itemAnchor[href*="facebook.com/messages/"]').attr('href')
      $(this).find('.mark_as_read').click(function() {
        $(this).addClass('inactive')
        $.ajax({
          type: 'GET',
          url: thread_url
        })
      })
    }
    else {
      $(this).find('.mark_as_read').removeClass('inactive')
    }
  })
}

$(document).ready(function() {
  chrome.extension.sendRequest({action: 'getSettings'}, function(settings) {
    if (settings.show_mark_as_read) {
      $('#fbDockChatTabs').bind('DOMNodeInserted', function() {
        add_read_buttons()
      })
      add_read_buttons()
    }
  })
})
