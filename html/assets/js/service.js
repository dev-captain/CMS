

var spWindow = 559;
var tbWindow = 959;


$(function() {


	//windowサイズ取得
	var windowWidth = document.documentElement.clientWidth;
	if(windowWidth <= spWindow) {
		//画面サイズ559以下（sp）

		//スライドイメージエリア
		$('.slide-img01').bxSlider({
			minSlides: 6,
			maxSlides: 6,
			slideWidth: 260,
			slideMargin: 30,
			ticker: true,
			speed: 80000,
		});


	} else if (windowWidth > spWindow && windowWidth <= tbWindow) {
		//画面サイズ959以下（tb）

		//スライドイメージエリア
		$('.slide-img01').bxSlider({
			minSlides: 6,
			maxSlides: 6,
			slideWidth: 260,
			slideMargin: 30,
			ticker: true,
			speed: 80000,
		});

		
	} else {
		//画面サイズ960以上（pc）

		//スライドイメージエリア
		$('.slide-img01').bxSlider({
			minSlides: 6,
			maxSlides: 6,
			slideWidth: 500,
			slideMargin: 60,
			ticker: true,
			speed: 100000,
		});
	}
});





