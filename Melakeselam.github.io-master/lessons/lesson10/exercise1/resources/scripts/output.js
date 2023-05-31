"use strict";

$(function() {
	$('#lab').change(function() {
		var file = '/lessons/'+$('#lab').val();
		$.ajax({
			'url': file,
			'type': 'GET',
			'success': ajaxSuccess,
			'error': ajaxFailure
		});
	});
});

function ajaxSuccess(data) {
	$('#output').val(data);
}

function ajaxFailure(xhr, status, exception) {
  console.log(xhr, status, exception);
}
