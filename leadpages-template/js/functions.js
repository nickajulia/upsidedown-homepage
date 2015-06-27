$(document).ready(function(){

	var toggleHeaderSize = function(){

		if( $(".logo").length === 0 || $(".logo").is(":hidden") ){
			$(".header").removeClass("header-with-logo");
		}
		else {
			$(".header").addClass("header-with-logo");
		}
	};

	toggleHeaderSize();

	if( window.location.href.indexOf("/template/") > -1 ){
		setInterval(function(){ toggleHeaderSize(); },1000);
	}


/*-------
	var $customCss = $("<style type='text/css' ></style>").appendTo("body");

	var setButtonColors = function(){

		var $el = $("#button-colors"),
			regular_top_color = $el.css("border-top-color"),
			regular_bottom_color = $el.css("border-bottom-color"),
			hover_top_color = $el.css("border-left-color"),
			hover_bottom_color = $el.css("border-right-color"),
			cssText = "";

		cssText += '.button-wrap a{ background: '+regular_top_color+';\
					background: -moz-linear-gradient(top, '+regular_top_color+' 0%, '+regular_bottom_color+' 100%);\
					background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,'+regular_top_color+'), color-stop(100%,'+regular_bottom_color+'));\
					background: -webkit-linear-gradient(top, '+regular_top_color+' 0%,'+regular_bottom_color+' 100%);\
					background: -o-linear-gradient(top, '+regular_top_color+' 0%,'+regular_bottom_color+' 100%);\
					background: -ms-linear-gradient(top, '+regular_top_color+' 0%,'+regular_bottom_color+' 100%);\
					background: linear-gradient(to bottom, '+regular_top_color+' 0%,'+regular_bottom_color+' 100%);\
					filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\''+regular_top_color+'\', endColorstr=\''+regular_bottom_color+'\',GradientType=0 ); }';

		cssText += '.button-wrap a:hover { background: '+hover_top_color+';\
					background: -moz-linear-gradient(top, '+hover_top_color+' 0%, '+hover_bottom_color+' 100%);\
					background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,'+hover_top_color+'), color-stop(100%,'+hover_bottom_color+'));\
					background: -webkit-linear-gradient(top, '+hover_top_color+' 0%,'+hover_bottom_color+' 100%);\
					background: -o-linear-gradient(top, '+hover_top_color+' 0%,'+hover_bottom_color+' 100%);\
					background: -ms-linear-gradient(top, '+hover_top_color+' 0%,'+hover_bottom_color+'100%);\
					background: linear-gradient(to bottom, '+hover_top_color+' 0%,'+hover_bottom_color+' 100%);\
					filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\''+hover_top_color+'\', endColorstr=\''+hover_bottom_color+'\',GradientType=0 ); }';


		$customCss.html( cssText );
	}

	if( window.location.href.indexOf("/template/") > -1 || true ){
		setInterval(function(){ setButtonColors(); },1000);
	}

	setButtonColors();

 --------*/


});