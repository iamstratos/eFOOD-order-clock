var date = new Date();
var time = date.toLocaleTimeString();

setTimeout(function()
{
	var $thankyouMessageDiv = $(".thankyou-message");

	if ($thankyouMessageDiv.length > 0)
	{
		$thankyouMessageDiv.append('<div class="order-time">Ώρα Παραγγελίας: ' + time + '</div>');
	}
}, 500);
