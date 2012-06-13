function get_thread_id() {
  var chunk = $('script:contains("thread_id")').text()
  var pos = chunk.indexOf('(')
  var data = JSON.parse(chunk.slice(pos + 1, chunk.length - 1)) // somewhere in there are some "thread_id"s
}

function add_read_buttons() {
  $('.fbMercuryChatTab').each(function(i) {
    if ($(this).find('.mark_as_read').length == 0) {
      // a.titlebarText
      // .fbChatConvItem a.profileLink
      $(this).find('.typingIndicator').after('<a><div class="mark_as_read inputbutton">Mark as read</div></a>')
      $(this).find('.mark_as_read').click(function() {
        var dtsg = $('input[name="fb_dtsg"]').attr('value')
        var re = /user=(\d*)/
        var user = re.exec($('a.topborder').attr('ajaxify'))[1]
        var thread_id = get_thread_id()
        $.ajax({
          type: 'POST',
          url: 'https://www.facebook.com/ajax/mercury/change_read_status.php?__a=1&explicit=true',
          data: {
            'ids[id.xxxxxxxxxxxxxxx]': true, // x are digits
            'fb_dtsg': dtsg,
            '__user': user
            //"phstamp": "xxxxxxxxxxxxxxxxxxxxxxx" // seems irrelevant
          }
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
