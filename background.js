var date = new Date();
var time = date.toLocaleTimeString();

setTimeout(function()
{
	$(".thankyou-message").append('<div class="order-time">Ώρα Παραγγελίας: ' + time + '</div>');
}, 500);
