/* ==========================================================================
   Document ready & window resizing
   ========================================================================== */

$(document).ready(function() {
	$("#manage_listing_content").width(($(window).width()) - 1 - ($("#manage_listing_nav").width()));
	$("#site_content").height(($(window).height()) - ($("#manage_listing_header").height()) - ($("#airbnb_site_header").height()));
	$("#calendar_help").width(($("#manage_listing_content").width()) - 52 - 1 - 52 - ($("#calendar_content").width()));
	$("#description_help").width(($("#manage_listing_content").width()) - 72 - 1 - 52 - ($("#description_content").width()));
	$("#photos_help").width(($("#manage_listing_content").width()) - 52 - 1 - 52 - ($("#photos_content").width()));
	$("#details_help").width(($("#manage_listing_content").width()) - 52 - 1 - 52 - ($("#details_content").width()));
	$("#calendar_help, #description_help, #photos_help, #details_help").css('min-height', ($("#site_content").height() - 40));
	$("#content_shadow").width($("#manage_listing_content").width());
});

$(window).resize(function(){
	resizeContent();
});

function resizeContent() {
	$("#manage_listing_content").width(($(window).width()) - 1 - ($("#manage_listing_nav").width()));
	$("#site_content").height(($(window).height()) - ($("#manage_listing_header").height()) - ($("#airbnb_site_header").height()));
	$("#calendar_help").width(($("#manage_listing_content").width()) - 52 - 1 - 52 - ($("#calendar_content").width()));
	$("#description_help").width(($("#manage_listing_content").width()) - 72 - 1 - 52 - ($("#description_content").width()));
	$("#photos_help").width(($("#manage_listing_content").width()) - 52 - 1 - 52 - ($("#photos_content").width()));
	$("#details_help").width(($("#manage_listing_content").width()) - 52 - 1 - 52 - ($("#details_content").width()));
	$("#calendar_help, #description_help, #photos_help, #details_help").css('min-height', ($("#site_content").height() - 40));
	$("#content_shadow").width($("#manage_listing_content").width());
}

/* ==========================================================================
   Section navigation
   ========================================================================== */

function showCalendar() {
	$('.section').addClass('hidden');
	$('#nav_description, #nav_photos, #nav_details').removeClass("active");
	$('#calendar').removeClass('hidden');
	$("#nav_calendar").addClass("active");
	$("#calendar_help").height(($("#calendar_content").height()));
	$("#publish_cta").removeClass('hidden');
}

function showDescription() {
	$('.section').addClass('hidden');
	$('#nav_calendar, #nav_photos, #nav_details').removeClass("active");
	$('#description').removeClass('hidden');
	$("#nav_description").addClass("active");
	$("#description_help").height(($("#description_content").height()));
	$("#publish_cta").removeClass('hidden').addClass('animated fadeInUp');
	$('#calendar_availability, .available_info').removeClass('animated');
	$('.tooltip.next.description').addClass('hidden');
}

function showPhotos() {
	$('.section').addClass('hidden');
	$('#nav_calendar, #nav_description, #nav_details').removeClass("active");
	$('#photos').removeClass('hidden');
	$("#nav_photos").addClass("active");
	$("#photos_help").height(($("#photos_content").height()));
	$("#publish_cta").removeClass('hidden').addClass('animated fadeInUp');
	$('#calendar_availability, .available_info').removeClass('animated');
	$('.tooltip.next.photos').addClass('hidden');
}

function showDetails() {
	$('.section').addClass('hidden');
	$('#nav_calendar, #nav_description, #nav_photos').removeClass("active");
	$('#details').removeClass('hidden');
	$("#nav_details").addClass("active");
	$("#details_help").height(($("#details_content").height()));
	$("#publish_cta").removeClass('hidden').addClass('animated fadeInUp');
	$('#calendar_availability, .available_info').removeClass('animated');
	$('.tooltip.next.details').addClass('hidden');
}

function showPublish() {
	$('.section').addClass('hidden');
	$('#nav_calendar, #nav_description, #nav_photos, #nav_details').removeClass("active");
	$('#publish_incomplete').removeClass('hidden');
	$('#calendar_availability, .available_info').removeClass('animated');
}


/* ==========================================================================
   Calendar section
   ========================================================================== */


$('#option_always').hover(
	function() {
		$('#option_sometimes, #option_onetime').animate({
			opacity: 0.25
		}, 0), $('#option_always').addClass('active');
	},
	function() {
		$('#option_sometimes, #option_onetime').animate({
			opacity: 1
		}, 0), $('#option_always').removeClass('active');
	}
);

$('#option_sometimes').hover(
	function() {
		$('#option_always, #option_onetime').animate({
			opacity: 0.25
		}, 0), $('#option_sometimes').addClass('active');
	},
	function() {
		$('#option_always, #option_onetime').animate({
			opacity: 1
		}, 0), $('#option_sometimes').removeClass('active');
	}
);

$('#option_onetime').hover(
	function() {
		$('#option_sometimes, #option_always').animate({
			opacity: 0.25
		}, 0), $('#option_onetime').addClass('active');
	},
	function() {
		$('#option_sometimes, #option_always').animate({
			opacity: 1
		}, 0), $('#option_onetime').removeClass('active');
	}
);

function setCalendarAlways() {
	$('#choose_availability').addClass('hidden');
	$('#calendar_availability').addClass('show_calendar_always animated fadeIn');
	$('.available_info.always').removeClass('hidden');
	$('.status_icon.calendar.complete, .tooltip.next.description').removeClass('hidden');
	sectionCompleteCount++;
	activatePublishAbility();
}

function setCalendarSometimes() {
	$('#choose_availability').addClass('hidden');
	$('#calendar_availability').addClass('show_calendar_sometimes animated fadeIn');
	$('.available_info.sometimes').removeClass('hidden');
	$('.status_icon.calendar.complete, .tooltip.next.description').removeClass('hidden');
	sectionCompleteCount++;
	activatePublishAbility();
}

function setCalendarOneTime() {
	$('#choose_availability').addClass('hidden');
	$('#calendar_availability').addClass('show_calendar_onetime animated fadeIn');
	$('.available_info.onetime').removeClass('hidden');
	$('.status_icon.calendar.complete, .tooltip.next.description').removeClass('hidden');
	sectionCompleteCount++;
	activatePublishAbility();
}

function chooseCalendarAgain() {
	$('.available_info.always, .available_info.sometimes, .available_info.onetime').addClass('hidden');
	$('#calendar_availability').removeClass('show_calendar_always show_calendar_sometimes show_calendar_onetime animated fadeIn');
	$('#choose_availability').removeClass('hidden');
	sectionCompleteCount--;
}


/* ==========================================================================
   Description section
   ========================================================================== */

function showSaveDescription () {
	$('.btn.description').removeClass('hidden');
	$('#character_count').removeClass('hidden');
}

function hideSaveDescription () {
	$('.status_icon.description.complete, .tooltip.next.photos').removeClass('hidden');
	$('.tooltip.next.description').addClass('perma-hidden');
	$('.btn.description').addClass('hidden');
	$('#character_count').addClass('hidden');
	sectionCompleteCount++;
	activatePublishAbility();
}

/* ==========================================================================
   Photos section
   ========================================================================== */

function triggerFileUpload () {
	$('.btn.add_photos').click($('input[type=file]').trigger('click'));
}

$("input[type=file]").change(function () {
    $('.photo_area').addClass('all');
    $('.photo_area').addClass('all');
    $('.status_icon.photos.complete, .tooltip.next.details').removeClass('hidden');
    $('.tooltip.next.photos').addClass('perma-hidden');
    sectionCompleteCount++;
    activatePublishAbility();
});

/* ==========================================================================
   Details section
   ========================================================================== */

function detailsSet () {
	$('.status_icon.details.complete').removeClass('hidden');
	$('.tooltip.next.details').addClass('perma-hidden');
	sectionCompleteCount++;
	activatePublishAbility();
}


/* ==========================================================================
   Tooltips
   ========================================================================== */


function hideDescriptionTooltip() {
	$('.tooltip.next.description').addClass('hidden');
}

function hidePhotosTooltip() {
	$('.tooltip.next.photos').addClass('hidden');
}

function hideDetailsTooltip() {
	$('.tooltip.next.details').addClass('hidden');
}

/* ==========================================================================
   Help section
   ========================================================================== */


$('#calendar_availability').hover(
	function() {
		$('.help_container.calendar').removeClass('hidden');
	},
	function() {
		$('.help_container.calendar').addClass('hidden');
	}
);

$('#standard_prices').hover(
	function() {
		$('.help_container.prices').removeClass('hidden');
	},
	function() {
		$('.help_container.prices').addClass('hidden');
	}
);

function showTitleHelp() {
	$('.help_container.title').removeClass('hidden');
}

function hideTitleHelp() {
	$('.help_container.title').addClass('hidden');
}

function showDescriptionHelp() {
	$('.help_container.description').removeClass('hidden');
}

function hideDescriptionHelp() {
	$('.help_container.description').addClass('hidden');
}

$('#photo_uploader').hover(
	function() {
		$('.help_container.add.photos').removeClass('hidden');
	},
	function() {
		$('.help_container.add.photos').addClass('hidden');
	}
);

$('.photo_area').hover(
	function() {
		$('.help_container.edit.photos').removeClass('hidden');
	},
	function() {
		$('.help_container.edit.photos').addClass('hidden');
	}
);

/* ==========================================================================
   Publish section
   ========================================================================== */

var sectionCompleteCount = 0;

function activatePublishAbility () {
	if(sectionCompleteCount >= 4) {
		$('.btn.pink.publish').removeClass('disabled');
		$('.btn.pink.publish').addClass('animated tada');
		$('#publish_cta').addClass('hidden');
		$('#publish_cta_complete').removeClass('hidden');
	}
}






