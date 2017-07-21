var date = new Date();
var time = date.toLocaleTimeString();

setTimeout(function()
{
	var $thankyouMessageDiv = $(".thankyou-message"),
		getTime = $('.thankyou-message h2 strong').text(),
		onlyNums = getTime.replace(/[^0-9]/g, ''),
	    parseNum = parseInt(onlyNums),
	    mins = (parseNum - 1);

	if ($thankyouMessageDiv.length > 0)
	{
		$thankyouMessageDiv.append('<div class="order-time">Παράδωση σε: ' + onlyNums + ' \' - Ώρα Παραγγελίας: ' + time + '</div>');
	}
	   
	var timer = setInterval(function() {
		if (mins > 0)
	    {
	    	$('.thankyou-message h2 strong').text("σε " + mins-- + "'");
	    } else if (mins == 0){
	    	$('.thankyou-message h2 strong').text("σύντομα!");
	    	clearInterval(timer);
	    }
	}, 60 * 1000);

}, 500);
