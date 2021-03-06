﻿//Mark current active link
$(document).ready(function () {
    $("#nav li a").each(function () {
        var hreflink = $(this).attr("href");
		var locationHref = location.href.split("/").pop();
        if (hreflink == locationHref) {
            $(this).parent().addClass("selected");
		}
    });
});
//Resize #main to fit window size
$(document).ready(function() {
	//On load set #main height & width
	windowWidth = $(window).width();
	windowHeight = $(window).height();
	menuWidth = $("#nav").outerWidth();
	headerHeight = $("header").height();
	footerHeight = $("footer").innerHeight();
	$("#main").height(windowHeight - headerHeight - footerHeight);
	$("#main").width(windowWidth - menuWidth);
	$(".fixed").width(windowWidth - menuWidth);
});

//On window resize
$(window).resize(function() {
	windowWidth = $(window).width();
	windowHeight = $(window).height();
	menuWidth = $("#nav").outerWidth();
	headerHeight = $("header").height();
	footerHeight = $("footer").innerHeight();
	$("#main").height(windowHeight - headerHeight - footerHeight);
	$("#main").width(windowWidth - menuWidth);
	$(".fixed").width(windowWidth - menuWidth);
});

//Update close
$(document).ready(function () {
	$("#updatebar").hide();
	$("#updatebar").fadeIn("Fast");
	
	$(".btnClose").click(function() {
		$("#updatebar").fadeOut("slow");
	});
});

//Add styled class to dataTables_lenght
$(document).ready(function() {
	$(".dataTables_length label select").addClass("styled");
});

//Main fadeIn
$(document).ready(function () {
	$("#main").hide();
	$("#main").fadeIn("slow");
});

//CD Rotate
$(function() {
var $rotateElement = $(".album-art-cd");
rotate(0);
function rotate(degree) {

      // For webkit browsers: e.g. Chrome
    $rotateElement.css({ WebkitTransform: 'rotate(' + degree + 'deg)'});
      // For Mozilla browser: e.g. Firefox
    $rotateElement.css({ '-moz-transform': 'rotate(' + degree + 'deg)'});

      // Animate rotation with a recursive call
    setTimeout(function() { rotate(++degree); },30);
    }
});

//Acesskey
function accesskey()
{
	document.getElementByClassName('.dataTables_filter div input').accessKey="q";
}