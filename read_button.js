function add_read_buttons() {
  $('.fbMercuryChatTab').each(function(i) {
    if ($(this).find('.mark_as_read').length == 0) {
      $(this).find('.typingIndicator').after('<div class="mark_as_read inputbutton">Mark as read</div>')
      //var thread_url = $(this).find('a.itemAnchor[href*="facebook.com/messages/"]').attr('href')
      $(this).find('.mark_as_read').click(function() {
        alert("Sorry, this button does not work anymore since a recent update of the facebook messenger. It will be disabled now, when I found a way how to make it work again, the button will reappear. However, blocking the `Seen: XX:XX` is unaffected and is still successfully blocked, only this button to manually mark it as read is broken. If you are interested in the technical details, visit http://swege.github.com/fb-unseen/ (will be opened in new tab)")
        chrome.extension.sendRequest({action: 'open_github'})
        localStorage['force_disable_button'] = 'true'
        $(this).remove()
        /*$(this).addClass('inactive')
        $.ajax({
          type: 'GET',
          url: thread_url
        })*/
      })
    }
    else {
      $(this).find('.mark_as_read').removeClass('inactive')
    }
  })
}

$(document).ready(function() {
  chrome.extension.sendRequest({action: 'getSettings'}, function(settings) {
    if (settings.show_mark_as_read && localStorage['force_disable_button'] != 'true') {
      $('#fbDockChatTabs').bind('DOMNodeInserted', function() {
        add_read_buttons()
      })
      add_read_buttons()
    }
  })
})
