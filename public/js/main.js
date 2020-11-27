$(document).ready(function () {
	$('#domain-name').hide();
	$('#short-hand').hide();

	$('#shorten-btn').click(function () {
		if ($('#custom-checkbox').is(':checked')) {
			if (!$('#long-url').val()) {
				alert('Long URL not there 1');
			} else if (!$('#short-hand').val()) {
				alert('Short hand not there 1');
			} else {
				alert('Good 1');
			}
		} else if (!$('#long-url').val()) {
			alert('Long URL not there 2');
		} else {
			alert('Good 2');
		}
	});

	$('#custom-checkbox').change(function () {
		if (this.checked) {
			$('#domain-name').show();
			$('#short-hand').show();
		} else {
			$('#domain-name').hide();
			$('#short-hand').hide();
		}
	});
});
