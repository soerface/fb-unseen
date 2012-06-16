function add_read_buttons() {
  $('.fbMercuryChatTab').each(function(i) {
    if ($(this).find('.mark_as_read').length == 0) {
      $(this).find('.typingIndicator').after('<a><div class="mark_as_read inputbutton">Mark as read</div></a>')
      var thread_url = $(this).find('a.itemAnchor[href*="facebook.com/messages/"]').attr('href')
      $(this).find('.mark_as_read').click(function() {
        $.ajax({
          type: 'GET',
          url: thread_url
        })
      })
    }
  })
}

$(document).ready(function() {
  $('#fbDockChatTabs').bind('DOMNodeInserted', function() {
    add_read_buttons()
  })
  add_read_buttons()
})
