(function ($){
	'use strict'

	$(document).ready(function () {
		$(".small_img").on('click', function () {
			$(".big_img").attr('src',$(this).attr('src'));
		});
	});

	$(document).ready(function () {
		$(".big_img").imagezoomsl({
			zoomrange : [3, 3]
		});
	});
}) (jQuery);