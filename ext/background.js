var rawTime = '';

chrome.extension.onMessage.addListener(function(response, sender, sendResponse) {
    rawTime = response;
    chrome.browserAction.setBadgeText({text: rawTime});
});

// var timer = setInterval(function() {
//     if (rawTime > 0)
//     {
//         rawTime = (response - 1);
//         // chrome.browserAction.setBadgeText(rawTime);
//         // chrome.browserAction.setBadgeText({text: rawTime}); 
//     }
//     else if (rawTime == 0)
//     {
//         rawTime = 'σύντομα!';
//         clearInterval(timer);
//     }
// }, 60 * 50);