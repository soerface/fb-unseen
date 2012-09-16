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
})
