var rawTime = '';

chrome.extension.onMessage.addListener(function(response, sender, sendResponse) {
    rawTime = response;
    var onlyRawNum = rawTime.replace(/\D/g,'');
    if (onlyRawNum > 1)
    {
        chrome.browserAction.setBadgeText({text: onlyRawNum });
        console.log('onlyRawNum: ' + onlyRawNum)
    }
    else if (onlyRawNum <= 1)
    {
         chrome.browserAction.setBadgeText({text: '' });
         console.log('onlyRawNum: ' + onlyRawNum) 
    }
    else
    {
        chrome.browserAction.setBadgeText({text: '' });
    }
});