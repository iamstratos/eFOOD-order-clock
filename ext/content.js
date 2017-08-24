var date = new Date();
var time = date.toLocaleTimeString();

setTimeout(function()
{

	var $thankyouMessageDiv = $(".thankyou-message"),
		getTime = $('.thankyou-message h2 strong').text(),
		onlyNums = getTime.replace(/[^0-9]/g, ''),
	    parseNum = parseInt(onlyNums),
		mins = (parseNum - 1),
		minsMinus = 0;

	if ($thankyouMessageDiv.length > 0)
	{
		$thankyouMessageDiv.append('<div class="order-time">Παράδοση σε: ' + onlyNums + ' \' - Ώρα Παραγγελίας: ' + time + '</div>');
		chrome.extension.sendMessage( "σε " + onlyNums + "'" );
		// chrome.extension.sendMessage( onlyNums );
	}
	   
	var timer = setInterval(function() {
		if (mins > 0)
	    {
			minsMinus = mins--;
			$('.thankyou-message h2 strong').text("σε " + minsMinus + "'");
			chrome.extension.sendMessage( $('.thankyou-message h2 strong').text() );
			// chrome.extension.sendMessage( minsMinus );
	    } else if (mins == 0){
	    	$('.thankyou-message h2 strong').text("σύντομα!");
	    	clearInterval(timer);
	    }
	}, 60 * 1000);

}, 500);