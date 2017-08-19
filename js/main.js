$(document).ready(function () {



	// resize height
	function wResize() {
		$("header").css("min-height", $(window).height());
	};
	wResize();
	$(window).resize(function () {
		wResize();
	})

	// Tabs jquerry

	$(".header__top-contacts .tab_item").not(":first").hide();
	$(".header__top-contacts .tab").click(function () {
		$(".header__top-contacts .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".header__top-contacts .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	$(".header__tabs .tab_item").not(":first").hide();
	$(".header__tabs .tab").click(function () {
		$(".header__tabs .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".header__tabs .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	$(".contacts .tab_item").not(":first").hide();
	$(".contacts .tab").click(function () {
		$(".contacts .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".contacts .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	$(".footer .tab_item").not(":first").hide();
	$(".footer .tab").click(function () {
		$(".footer .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".footer .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");



	// Stellar paralax
	$.stellar({
		responsive: true
	});


	//OWLCarousel 
	$(document).ready(function () {
		$('.owl-carousel').owlCarousel({
			responsive: {
				0: {
					items: 1,
					nav: true
				}
			},
			navText: "",
		});
	});

	// Magnific-popup 
		$('.img__popup').magnificPopup({
			type: 'image'
		});

		$('.popup__form').magnificPopup();

	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function () {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//SVG Fallback
	if (!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function () {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};
	

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("form").submit(function (e) {
		var $this = $(this);
		e.preventDefault;
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function () {
			alert("Спасибо за заявку!");
			setTimeout(function () {
				var magnificPopup = $.magnificPopup.instance;
				magnificPopup.close();
				$this.trigger("reset");
			}, 1000);
		});
		return false;
	});

});


$(window).load(function () {
	// animated

	$(".header__h1").animated("fadeInDown", "fadeOut");
	$(".header__tabs .wrapper").animated("flipInY", "fadeOut");
	$(".profi__item").animated("fadeInLeft", "fadeOutLeft");
	$(".callback h3").animated("fadeInUp", "fadeOut");
	$(".footer").animated("fadeInLeft", "fadeOut");

});