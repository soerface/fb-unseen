var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-35892158-1']);
_gaq.push(['_gat._anonymizeIp']);
_gaq.push(['_trackPageview']);

(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = 'https://ssl.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

function set_icon(state) {
  if (state) {
    chrome.extension.sendRequest({action: 'quickEnable'})
  } else {
    chrome.extension.sendRequest({action: 'quickDisable'})
  }
}

window.addEvent("domready", function () {
    // Option 1: Use the manifest:
    new FancySettings.initWithManifest(function (settings) {
      var elements = ['show_mark_as_read', 'block_chat_seen', 'block_typing_indicator', 'hide_chat_seen', 'enable_ads']
      elements.forEach(function(element) {
        settings.manifest[element].addEvent("action", function (state) {
          _gaq.push(['_trackEvent', 'Settings', element, state.toString()])
          if (element == 'block_chat_seen') {
          set_icon(state)
          }
          })
        })
      })

    // Option 2: Do everything manually:
    /*
    var settings = new FancySettings("My Extension", "icon.png");
    
    var username = settings.create({
        "tab": i18n.get("information"),
        "group": i18n.get("login"),
        "name": "username",
        "type": "text",
        "label": i18n.get("username"),
        "text": i18n.get("x-characters")
    });
    
    var password = settings.create({
        "tab": i18n.get("information"),
        "group": i18n.get("login"),
        "name": "password",
        "type": "text",
        "label": i18n.get("password"),
        "text": i18n.get("x-characters-pw"),
        "masked": true
    });
    
    var myDescription = settings.create({
        "tab": i18n.get("information"),
        "group": i18n.get("login"),
        "name": "myDescription",
        "type": "description",
        "text": i18n.get("description")
    });
    
    var myButton = settings.create({
        "tab": "Information",
        "group": "Logout",
        "name": "myButton",
        "type": "button",
        "label": "Disconnect:",
        "text": "Logout"
    });
    
    // ...
    
    myButton.addEvent("action", function () {
        alert("You clicked me!");
    });
    
    settings.align([
        username,
        password
    ]);
    */
});
