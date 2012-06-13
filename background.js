chrome.webRequest.onBeforeRequest.addListener(function(details) {
  if (details.url.indexOf("explicit=true") != -1) {
    return {
      url: 'https://www.facebook.com/ajax/mercury/change_read_status.php?__a=1'
    }
  }
  else {
    return {
      cancel: true
    }
  }
}, { urls: ["*://*.facebook.com/*change_read_status*"] }, ["blocking"]
)
