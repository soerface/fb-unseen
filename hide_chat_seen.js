$(document).ready(function() {
  chrome.extension.sendRequest({action: 'getSettings'}, function(settings) {
    if (settings.hide_chat_seen) {
      $('html > head').append($('<style>div.seen { display: none; }</style>'))
    }
  })
})
