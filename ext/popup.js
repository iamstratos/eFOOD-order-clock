$(function()
{
    var bg = chrome.extension.getBackgroundPage(),
        deliveryMins = bg.rawTime,
        $deliveryElem = $('#delivery-time');

        $deliveryElem .text("Παράδοση σε " + deliveryMins + "'");  
});
