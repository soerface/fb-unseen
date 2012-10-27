var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-35892158-1']);
_gaq.push(['_gat._anonymizeIp']);
_gaq.push(['_trackPageview']);

(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = 'https://ssl.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

var settings = new Store('settings', {
    'show_mark_as_read': true,
    'block_chat_seen': true,
    'block_typing_indicator': false
    // TODO
    // 'block_group_seen': false
});

chrome.webRequest.onBeforeRequest.addListener(function(details) {
  return {
    cancel: settings.get('block_chat_seen')
  }
}, { urls: ['*://*.facebook.com/*change_read_status*'] }, ['blocking'])

chrome.webRequest.onBeforeRequest.addListener(function(details) {
  return {
    cancel: settings.get('block_typing_indicator')
  }
}, { urls: ['*://*.facebook.com/*typ.php*'] }, ['blocking'])

chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
  if (request.action == 'getSettings') {
    sendResponse(settings.toObject())
  }
  else if (request.action == 'getDisableButton') {
    sendResponse(localStorage['force_disable_button'])
  }
  else if (request.action == 'setDisableButton') {
    localStorage['force_disable_button'] = 'true'
    chrome.tabs.create({url: 'http://swege.github.com/fb-unseen/', active: false})
  }
})
