/* ==========================================================================
   Document ready & window resizing
   ========================================================================== */

$(document).ready(function() {
	$("#manage_listing_content").width(($(window).width()) - 1 - ($("#manage_listing_nav").width()));
	$("#site_content").height(($(window).height()) - ($("#manage_listing_header").height()) - ($("#airbnb_site_header").height()));
	$("#calendar_help").width(($("#manage_listing_content").width()) - 52 - 1 - 52 - ($("#calendar_content").width()));
	$("#description_help").width(($("#manage_listing_content").width()) - 52 - 1 - 52 - ($("#description_content").width()));
	$("#photos_help").width(($("#manage_listing_content").width()) - 52 - 1 - 52 - ($("#photos_content").width()));
	$("#details_help").width(($("#manage_listing_content").width()) - 52 - 1 - 52 - ($("#details_content").width()));
	$("#calendar_help, #description_help, #photos_help, #details_help").css('min-height', ($("#site_content").height() - 40));
	$("#content_shadow").width($("#manage_listing_content").width());
	$("#advanced_options").css('top', ($("#manage_listing_nav").height() + 70));
});

$(window).resize(function(){
	resizeContent();
});

function resizeContent() {
	$("#manage_listing_content").width(($(window).width()) - 1 - ($("#manage_listing_nav").width()));
	$("#site_content").height(($(window).height()) - ($("#manage_listing_header").height()) - ($("#airbnb_site_header").height()));
	$("#calendar_help").width(($("#manage_listing_content").width()) - 52 - 1 - 52 - ($("#calendar_content").width()));
	$("#description_help").width(($("#manage_listing_content").width()) - 52 - 1 - 52 - ($("#description_content").width()));
	$("#photos_help").width(($("#manage_listing_content").width()) - 52 - 1 - 52 - ($("#photos_content").width()));
	$("#details_help").width(($("#manage_listing_content").width()) - 52 - 1 - 52 - ($("#details_content").width()));
	$("#calendar_help, #description_help, #photos_help, #details_help").css('min-height', ($("#site_content").height() - 40));
	$("#content_shadow").width($("#manage_listing_content").width());
	$("#advanced_options").css('top', ($("#manage_listing_nav").height() + 70));
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
	activatePublishAbility();
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
	activatePublishAbility();
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
	activatePublishAbility();
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
	activatePublishAbility();
}

function showPublish() {
	$('.section').addClass('hidden');
	$('#nav_calendar, #nav_description, #nav_photos, #nav_details').removeClass("active");
	$('#publish_incomplete').removeClass('hidden');
	$('#calendar_availability, .available_info').removeClass('animated');
	$('#publish_cta_complete').addClass('hidden');
}

$('#nav_calendar').hover(
	function() {
		$('#nav_calendar').addClass('hover');
	},
	function() {
		$('#nav_calendar').removeClass('hover');
	}
);

$('#nav_description').hover(
	function() {
		$('#nav_description').addClass('hover');
	},
	function() {
		$('#nav_description').removeClass('hover');
	}
);

$('#nav_photos').hover(
	function() {
		$('#nav_photos').addClass('hover');
	},
	function() {
		$('#nav_photos').removeClass('hover');
	}
);

$('#nav_details').hover(
	function() {
		$('#nav_details').addClass('hover');
	},
	function() {
		$('#nav_details').removeClass('hover');
	}
);

$('#advanced_options').hover(
	function() {
		$('#advanced_options').addClass('hover');
	},
	function() {
		$('#advanced_options').removeClass('hover');
	}
);

$('.section_header.collapsed').hover(
	function() {
		$(this).animate({
			opacity: 1
		}, 100)
	},
	function() {
		$(this).animate({
			opacity: 0.3
		}, 100)
	}
);


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

function savePriceFields () {
	$('.save_notice.price.start').removeClass('hidden');
	clearTimeout(saveComplete);
	saveComplete = setTimeout(
		function(){
			$('.save_notice.price.start').addClass('hidden');
			$('.save_notice.price.finish').removeClass('hidden');
			hideSaveComplete = setTimeout(
				function(){
					$('.save_notice.price.finish').addClass('hidden');
				},1300
			);
		},1800
	)
}


/* ==========================================================================
   Description section
   ========================================================================== */

var saveComplete;
var hideSaveComplete;
var summaryCharCount;
var summaryBarWidth;
var descriptionCompleteCount = 0;
var summaryArrowPosition;
var listingTitle;

function descriptionComplete () {
	$('.status_icon.description.complete').removeClass('hidden');
	$('.tooltip.next.description').addClass('perma-hidden');
	showPhotosTooltip();
	if (descriptionCompleteCount == 0) {
		sectionCompleteCount++;
		descriptionCompleteCount++;
	}
	activatePublishAbility();
}

function updateListingTitle (val) {
	listingTitle = val.value;
	$('#header_title').text(listingTitle);
	if (val.value.length == 0) {
		$('#header_title').text('Private room in San Francisco');
	}
}

function saveOverviewFields () {
	$('.save_notice.overview.start').removeClass('hidden');
	clearTimeout(saveComplete);
	saveComplete = setTimeout(
		function(){
			$('.save_notice.overview.start').addClass('hidden');
			$('.save_notice.overview.finish').removeClass('hidden');
			hideSaveComplete = setTimeout(
				function(){
					$('.save_notice.overview.finish').addClass('hidden');
				},1300
			);
		},1800
	);
}

function addDescriptionDetails () {
	showDescriptionSection();
	$('.description_field_container h4').addClass('hidden');
	$('.section_header.description').removeClass('hidden');
}

function saveSpaceFields () {
	$('.save_notice.space.start').removeClass('hidden');
	clearTimeout(saveComplete);
	saveComplete = setTimeout(
		function(){
			$('.save_notice.space.start').addClass('hidden');
			$('.save_notice.space.finish').removeClass('hidden');
			hideSaveComplete = setTimeout(
				function(){
					$('.save_notice.space.finish').addClass('hidden');
				},1300
			);
		},1800
	);
}

function saveNeighborhoodFields () {
	$('.save_notice.neighborhood.start').removeClass('hidden');
	clearTimeout(saveComplete);
	saveComplete = setTimeout(
		function(){
			$('.save_notice.neighborhood.start').addClass('hidden');
			$('.save_notice.neighborhood.finish').removeClass('hidden');
			hideSaveComplete = setTimeout(
				function(){
					$('.save_notice.neighborhood.finish').addClass('hidden');
				},1300
			);
		},1800
	);
}

function charCount (val) {
	summaryCharCount = val.value.length;
	summaryBarWidth = (100 * (summaryCharCount/200));
	summaryArrowPosition = (243 * (summaryCharCount/200));
	$('#character_count').text(summaryCharCount);
	$('#summary_bar').width(summaryBarWidth + '%');
	$('#arrow_count_summary').css('padding-left', summaryArrowPosition);
	if (summaryCharCount >= 50) {
		descriptionComplete();
		$('#summary_bar').removeClass('yellow');
		$('#summary_bar').addClass('green');
	}
	if (summaryCharCount < 50) {
		$('#summary_bar').removeClass('green');
		$('#summary_bar').addClass('yellow');
	}

}

function showPhotosTooltip () {
	if (summaryCharCount >= 50) {
		$('.tooltip.next.photos').removeClass('hidden');
	}
}

function showDescriptionSection () {
	if ($('.description_field_container.space').hasClass('hidden')) {
		$('.description_field_container.space').removeClass('hidden');
		$('.section_header.description').removeClass('collapsed');
		$('.section_header.description').addClass('open');
	}
	else {
		$('.description_field_container.space').addClass('hidden');
		$('.section_header.description').removeClass('open');
		$('.section_header.description').addClass('collapsed');
		resizeContent();
	}
	$("#description_help").height(($("#description_content").height()));
}

function showNeighborhoodSection () {
	if ($('.description_field_container.neighborhood').hasClass('hidden')) {
		$('.description_field_container.neighborhood').removeClass('hidden');
		$('.section_header.neighborhood').removeClass('collapsed');
		$('.section_header.neighborhood').addClass('open');
	}
	else {
		$('.description_field_container.neighborhood').addClass('hidden');
		$('.section_header.neighborhood').removeClass('open');
		$('.section_header.neighborhood').addClass('collapsed');
	}
	$("#description_help").height(($("#description_content").height()));
}

/* ==========================================================================
   Photos section
   ========================================================================== */

function triggerFileUpload () {
	$('.btn.add_photos').click($('input[type=file].listing_photos').trigger('click'));
}

$("input[type=file].listing_photos").change(function () {
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

var amenitiesCompleteCount = 0;

function detailsSet () {
	$('.status_icon.details.complete').removeClass('hidden');
	$('.tooltip.next.details').addClass('perma-hidden');
	$('#preview_address_incomplete').addClass('hidden');
	$('#preview_address_complete').removeClass('hidden');
	if (amenitiesCompleteCount == 0) {
		sectionCompleteCount++;
		amenitiesCompleteCount++;
	}
	activatePublishAbility();
}

function saveAddressFields () {
	$('.save_notice.address.start').removeClass('hidden');
	clearTimeout(saveComplete);
	saveComplete = setTimeout(
		function(){
			$('.save_notice.address.start').addClass('hidden');
			$('.save_notice.address.finish').removeClass('hidden');
			hideSaveComplete = setTimeout(
				function(){
					$('.save_notice.address.finish').addClass('hidden');
				},1300
			);
		},1000
	);
}

function saveAmenities () {
	$('.save_notice.amenities.start').removeClass('hidden');
	clearTimeout(saveComplete);
	saveComplete = setTimeout(
		function(){
			$('.save_notice.amenities.start').addClass('hidden');
			$('.save_notice.amenities.finish').removeClass('hidden');
			hideSaveComplete = setTimeout(
				function(){
					$('.save_notice.amenities.finish').addClass('hidden');
				},1300
			);
		},1000
	);
}

function makeBold (val) {
	if ($(val).parent('label').hasClass('bold')) {
		$(val).parent('label').removeClass('bold');
	}
	else {
		$(val).parent('label').addClass('bold');
	}
}

function showRoomsBedsSection () {
	if ($('.details_field_container.roomsbeds').hasClass('hidden')) {
		$('.details_field_container.roomsbeds').removeClass('hidden');
		$('.section_header.roomsbeds').removeClass('collapsed');
		$('.section_header.roomsbeds').addClass('open');
	}
	else {
		$('.details_field_container.roomsbeds').addClass('hidden');
		$('.section_header.roomsbeds').removeClass('open');
		$('.section_header.roomsbeds').addClass('collapsed');
		resizeContent();
	}
	$("#details_help").height(($("#details_content").height()));
}

function showAmenitiesSection () {
	if ($('.amenities_section').hasClass('hidden')) {
		$('.amenities_section').removeClass('hidden');
		$('.section_header.amenities').removeClass('collapsed');
		$('.section_header.amenities').addClass('open');
	}
	else {
		$('.amenities_section').addClass('hidden');
		$('.section_header.amenities').removeClass('open');
		$('.section_header.amenities').addClass('collapsed');
		resizeContent();
	}
	$("#details_help").height(($("#details_content").height()));
}

function showEditCity () {
	if ($('#edit_city_state_country').hasClass('hidden')) {
		$('#edit_city_state_country').removeClass('hidden');
		$('#city_state_country').addClass('hidden');
		$('.details_field_container.address').addClass('all');
		$('.details_field_container.address').removeClass('local_only');
	}
	else {
		$('#edit_city_state_country').addClass('hidden');
		$('#city_state_country').removeClass('hidden');
		$('.details_field_container.address').removeClass('all');
		$('.details_field_container.address').addClass('local_only');
	}
	$("#details_help").height(($("#details_content").height()));
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

$('.details_field_container.address').hover(
	function() {
		$('.help_container.address').removeClass('hidden');
	},
	function() {
		$('.help_container.address').addClass('hidden');
	}
);

$('.amenities_section.common').hover(
	function() {
		$('.help_container.amenities_common').removeClass('hidden');
	},
	function() {
		$('.help_container.amenities_common').addClass('hidden');
	}
);

$('.amenities_section.extras').hover(
	function() {
		$('.help_container.amenities_extras').removeClass('hidden');
	},
	function() {
		$('.help_container.amenities_extras').addClass('hidden');
	}
);

$('.amenities_section.special').hover(
	function() {
		$('.help_container.amenities_special').removeClass('hidden');
	},
	function() {
		$('.help_container.amenities_special').addClass('hidden');
	}
);


/* ==========================================================================
   Publish section
   ========================================================================== */

var sectionCompleteCount = 0;
var restoreHighlightInstructions;

function highlightInstructions () {
	$('#publish_cta h3').addClass('animated pulse');
	clearTimeout(restoreHighlightInstructions);
	restoreHighlightInstructions = setTimeout(
		function(){
			$('#publish_cta h3').removeClass('animated pulse');
		},800
	);
}

function activatePublishAbility () {
	if(sectionCompleteCount >= 4) {
		$('.btn.pink.publish').removeClass('disabled');
		$('.btn.pink.publish').addClass('animated tada');
		$('#publish_cta').addClass('perma-hidden');
		$('#publish_cta_complete').removeClass('hidden');
	}
}

function triggerProfileUpload () {
	$('.add_profile_photo').click($('input[type=file].profile_photos').trigger('click'));
}

$("input[type=file].profile_photos").change(function () {
    $('img.add_profile_photo').addClass('hidden');
    $('img.profile_photo').removeClass('hidden');
});

function showVerifyPhone () {
	$('#verify_phone_placeholder').addClass('hidden');
	$('#verify_phone').removeClass('hidden');
}

function activateFinalPublish () {
	$('.final_publish.btn').removeClass('disabled');
	$('.final_publish.btn').addClass('animated pulse');
}


