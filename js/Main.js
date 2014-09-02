		var check = true;
		$(document).ready(function() {
		    $(window).scroll(function() {
		        if ($(window).scrollTop() > 400 && check) {
		            $(".header").css("position", "fixed");
		            $(".header").css("top", "-80px");
		            $(".header").animate({
		                "top": "0"
		            }, 1000);
		            $("#logo").css("position", "absolute");
		            $("#logo").css("height", "30px");
		            $("#logo").css("top", "-3px");
		            $("#logo").css("width", "auto");
		            $(".header").css("height", "45px");
		            $(".lg").hide();
		            $(".navbar-default").addClass("navbar-right");
		            check = false;
		        }
		        if ($(window).scrollTop() < 400) {
		            $("#logo").css("left", "3%");
		            $("#logo").css("height", "80px");
		            $("#logo").css("width", "200px");
		            $("#logo").css("position", "static");
		            $(".header").css("position", "absolute");
		            $(".header").css("height", "155px");
		            $(".navbar-default").removeClass("navbar-right");
		            $(".header").addClass("center");
		            $(".header").css("top", "0");
		            $(".lg").show();
		            check = true;
		        }
		        if ($(window).scrollTop() > 80) {
		            $(".upperBar").animate({
		                "opacity": "1"
		            }, 3000);
		        }
		    });
		});