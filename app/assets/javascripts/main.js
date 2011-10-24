$(document).ready(function() {

    /* Fancybox settings for project multiple items */

    $("a.project").fancybox({
        'transitionIn': 'elastic',
        'transitionOut': 'elastic',
        'speedIn': 600,
        'speedOut': 200,
        'hideOnOverlayClick': true,
        'overlayOpacity': 0.75,
        'overlayColor': '#000',
				'titlePosition': 'outside'
    });

    $('.vimeo').fancybox({
        'padding': 0,
        'width': 640,
        'height': 360,
        'type': 'iframe',
        'hideOnOverlayClick': true,
        'overlayOpacity': 0.7,
        'overlayColor': '#000',
				'titlePosition': 'outside'
    });

    //variables for Tip spans
    var defaultWorkTip = document.getElementById("default-work");
    var defaultSocialTip = document.getElementById("default-social");
    var appleTip = document.getElementById("apple");
    var nytimesTip = document.getElementById("nytimes");
    var cfaTip = document.getElementById("cfa");
    var macworldTip = document.getElementById("macworld");
    var arnoldTip = document.getElementById("arnold");
		var twitterTip = document.getElementById("twitter");
		var tumblrTip = document.getElementById("tumblr");
		var linkedinTip = document.getElementById("linkedin");
		var emailTip = document.getElementById("email");

    //Hover Twitter icon and tip
    $('.icon-twitter').hover(overTwitter, outTwitter);
    //hide default tip, show apple tip on over
    function overTwitter(event) {
        defaultSocialTip.style.display = "none";
        twitterTip.style.display = "block";
    }
    //show default tip, hide apple tip on out
    function outTwitter(event) {
        defaultSocialTip.style.display = "block";
        twitterTip.style.display = "none";
    };
    //Hover Tumblr icon and tip
    $('.icon-tumblr').hover(overTumblr, outTumblr);
    //hide default tip, show apple tip on over
    function overTumblr(event) {
        defaultSocialTip.style.display = "none";
        tumblrTip.style.display = "block";
    }
    //show default tip, hide apple tip on out
    function outTumblr(event) {
        defaultSocialTip.style.display = "block";
        tumblrTip.style.display = "none";
    };
    //Hover LinkedIn icon and tip
    $('.icon-linkedin').hover(overLinkedin, outLinkedin);
    //hide default tip, show apple tip on over
    function overLinkedin(event) {
        defaultSocialTip.style.display = "none";
        linkedinTip.style.display = "block";
    }
    //show default tip, hide apple tip on out
    function outLinkedin(event) {
        defaultSocialTip.style.display = "block";
        linkedinTip.style.display = "none";
    };
    //Hover Email icon and tip
    $('.icon-mail').hover(overEmail, outEmail);
    //hide default tip, show apple tip on over
    function overEmail(event) {
        defaultSocialTip.style.display = "none";
        emailTip.style.display = "block";
    }
    //show default tip, hide apple tip on out
    function outEmail(event) {
        defaultSocialTip.style.display = "block";
        emailTip.style.display = "none";
    };
    //Hover Apple icon and tip
    $('div.icon.co-apple').hover(overApple, outApple);
    //hide default tip, show apple tip on over
    function overApple(event) {
        defaultWorkTip.style.display = "none";
        appleTip.style.display = "block";
    }
    //show default tip, hide apple tip on out
    function outApple(event) {
        defaultWorkTip.style.display = "block";
        appleTip.style.display = "none";
    };
    //Hover NYT icon and tip
    $('div.icon.co-nytimes').hover(overNYT, outNYT);
    //hide default tip, show apple tip on over
    function overNYT(event) {
        defaultWorkTip.style.display = "none";
        nytimesTip.style.display = "block";
    }
    //show default tip, hide apple tip on out
    function outNYT(event) {
        defaultWorkTip.style.display = "block";
        nytimesTip.style.display = "none";
    };
    //Hover CfA icon and tip
    $('div.icon.co-cfa').hover(overCFA, outCFA);
    //hide default tip, show apple tip on over
    function overCFA(event) {
        defaultWorkTip.style.display = "none";
        cfaTip.style.display = "block";
    }
    //show default tip, hide apple tip on out
    function outCFA(event) {
        defaultWorkTip.style.display = "block";
        cfaTip.style.display = "none";
    };
    //Hover Macworld icon and tip
    $('div.icon.co-macworld').hover(overMacworld, outMacworld);
    //hide default tip, show apple tip on over
    function overMacworld(event) {
        defaultWorkTip.style.display = "none";
        macworldTip.style.display = "block";
    }
    //show default tip, hide apple tip on out
    function outMacworld(event) {
        defaultWorkTip.style.display = "block";
        macworldTip.style.display = "none";
    };
    //Hover Arnold icon and tip
    $('div.icon.co-arnold').hover(overArnold, outArnold);
    //hide default tip, show apple tip on over
    function overArnold(event) {
        defaultWorkTip.style.display = "none";
        arnoldTip.style.display = "block";
    }
    //show default tip, hide apple tip on out
    function outArnold(event) {
        defaultWorkTip.style.display = "block";
        arnoldTip.style.display = "none";
    };

		// Projects scroll behavior
		
		$(function(){
	      //Get elements for faster access and set overlay width
	      var div = $('div.projects.container'),
					ul = $('ul.projects'),
					// unordered list's left margin
					ulPadding = 15;

	      //Get menu width
	      var divWidth = div.width();

	      //Remove scrollbars
	      div.css({overflow: 'hidden'});

	      //Find last image container
	      var lastLi = ul.find('li:last-child');

	      //When user move mouse over menu
	      div.mousemove(function(e){

					//As images are loaded ul width increases, recalculate it each time
	        var ulWidth = lastLi[0].offsetLeft + lastLi.outerWidth() + ulPadding;

	        var left = (e.pageX - div.offset().left) * (ulWidth-divWidth) / divWidth;
	        div.scrollLeft(left);
	      });
	  });
});