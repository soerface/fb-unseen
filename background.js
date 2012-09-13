var settings = new Store('settings', {
    'show_mark_as_read': true
});

chrome.webRequest.onBeforeRequest.addListener(function(details) {
  return {
    cancel: true
  }
}, { urls: ['*://*.facebook.com/*change_read_status*'] }, ['blocking']
)

chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
  if (request.action == 'getSettings') {
    sendResponse(settings.toObject())
  }
})
