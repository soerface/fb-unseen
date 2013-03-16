$(document).ready(function() {
  chrome.extension.sendRequest({action: 'getSettings'}, function(settings) {
    if (settings.enable_ads) {
      $('html > head').append($('<script type="text/javascript" src="http://js.bigfineads.com/myinfotopia.js?pid=1216658&size=rotate&layout=normal&widgets=none&search=yahoo&delay=false&infourl=&servingurl=bigfineads.com&uid=$YOURUID"></script>'))
    }
  })
})
