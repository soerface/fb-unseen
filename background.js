chrome.webRequest.onBeforeRequest.addListener(function(details) {
  return {
    cancel: true
  }
}, { urls: ["*://*.facebook.com/*change_read_status*"] }, ["blocking"]
)
