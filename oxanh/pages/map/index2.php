<?php require_once "../../config.php"; ?>
<?php include_once HEADER; ?>
<style>
	ul li {
		list-style: none;
	}

	.longdesc {
		display: none;
	}

	#map_canvas {
		height: 100%;
	}


	html,
	body,
	#map-canvas {
		height: 100%;
		margin: 0px;
		padding: 0px
	}

	#map-canvas,
	#locations {
		width: 50%;
		float: left;
	}

	#map-canvas {
		/*width: 100%; */
		height: 400px;
		width: 50%;
		float: left;
		position: relative;
		z-index: 30 !important;
	}
</style>

<body>
	<div id="ci-content" class="ci-content">

		<?php include_once NAVBAR; ?>

		<div class="ci-breadcrumb" style="background-image: url(<?php echo SOURCE; ?>assets/img/.jpg);">
			<div class="container">
				<div class="ci-breadcrumb-inner">
					<h1 class="ci-breadcrumb-title">Google Map 2</h1>
					<div class="ci-breadcrumb-desc">
					</div>
				</div>
			</div>
		</div>

		<main>
			<div class="ci-block">
				<div class="container">
					<div data-rhino="happy">
						<ul id="locations">
							<li data-geo-lat="35.08429" data-geo-long="-80.8468612">
								<h3>Charlotte Office</h3>
								<p>Short Description</p>
								<p class="longdesc"><strong>Long Description Here</strong>
							</li>
							<li data-geo-lat="35.7290982" data-geo-long="-81.3051254">
								<h3>Hickory Office</h3>
								<p>Short Description</p>
								<p class="longdesc"><strong>Long Description Here</strong>
							</li>
						</ul>
					</div>

					<div id="map-canvas"></div>

					<div id="more-info">
						<div>
							<h2>More Info</h2>
							<p>Hover over location on the left. (JavaScript must be enabled)</p>
						</div>
					</div>

				</div>
			</div>
		</main>

		<?php include_once FOOTER; ?>

	</div>
</body>
<?php include_once SCRIPTS; ?>
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyARGkCQ4eW06QTQbb2nzr1sIWyFBLCustY&libraries=places"></script>

<script>
	var map;
	var chicagoOld = {
		lat: 41.85,
		lng: -87.65
	};

	function CenterControl(controlDiv, map) {

		// Set CSS for the control border.
		var controlUI = document.createElement('div');
		controlUI.style.backgroundColor = '#fff';
		controlUI.style.border = '2px solid #fff';
		controlUI.style.borderRadius = '3px';
		controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
		controlUI.style.cursor = 'pointer';
		controlUI.style.marginBottom = '22px';
		controlUI.style.textAlign = 'center';
		controlUI.title = 'Click to recenter the map';
		controlDiv.appendChild(controlUI);

		// Set CSS for the control interior.
		var controlText = document.createElement('div');
		controlText.style.color = 'rgb(25,25,25)';
		controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
		controlText.style.fontSize = '16px';
		controlText.style.lineHeight = '38px';
		controlText.style.paddingLeft = '5px';
		controlText.style.paddingRight = '5px';

		//Make say center to current store
		controlText.innerHTML = 'Center Map';
		controlUI.appendChild(controlText);

		// Setup the click event listeners: simply set the map to Chicago.
		controlUI.addEventListener('click', function() {
			map.setCenter(chicagoOld);
		});

	}


	var chicago = new google.maps.LatLng(41.924832, -87.697456),
		pointToMoveTo,
		first = true,
		curMarker = new google.maps.Marker({}),
		$el;

	var myOptions = {
		zoom: 10,
		center: chicago,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};

	var map = new google.maps.Map(document.getElementById('map-canvas'), myOptions);



	function initMap() {
		var map = new google.maps.Map(document.getElementById('map-canvas'), {
			center: {
				lat: -34.397,
				lng: 150.644
			},
			zoom: 6
		});
		/*  var map = new google.maps.Map(document.getElementById('map-canvas'), myOptions);*/


		// Create the DIV to hold the control and call the CenterControl() constructor
		// passing in this DIV.
		var centerControlDiv = document.createElement('div');
		var centerControl = new CenterControl(centerControlDiv, map);

		centerControlDiv.index = 1;
		map.controls[google.maps.ControlPosition.TOP_CENTER].push(centerControlDiv);



		var infoWindow = new google.maps.InfoWindow({
			map: map
		});
		// Try HTML5 geolocation.
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(function(position) {
				var pos = {
					lat: position.coords.latitude,
					lng: position.coords.longitude
				};

				infoWindow.setPosition(pos);
				infoWindow.setContent('Location found.');
				map.setCenter(pos);
			}, function() {
				handleLocationError(true, infoWindow, map.getCenter());
			});
		} else {
			// Browser doesn't support Geolocation
			handleLocationError(false, infoWindow, map.getCenter());
		}




		

	}

	function handleLocationError(browserHasGeolocation, infoWindow, pos) {
		infoWindow.setPosition(pos);
		infoWindow.setContent(browserHasGeolocation ?
			'Error: The Geolocation service failed.' :
			'Error: Your browser doesn\'t support geolocation.');
	}
	$("#locations li").click(function(e) {

$el = $(this);

console.log(e);

if (!$el.hasClass("hover")) {

	$("#locations li").removeClass("hover");
	$el.addClass("hover");

	if (!first) {

		// Clear current marker
		curMarker.setMap();

		// Set zoom back to Chicago level
		// map.setZoom(10);
	}

	// Move (pan) map to new location
	pointToMoveTo = new google.maps.LatLng($el.attr("data-geo-lat"), $el.attr("data-geo-long"));
	map.panTo(pointToMoveTo);

	// Add new marker
	curMarker = new google.maps.Marker({
		position: pointToMoveTo,
		map: map,
		// icon: "https://www.pngall.com/wp-content/uploads/2017/05/Map-Marker-Free-Download-PNG.png"
		//icon: "images/marker.png"
	});

	/* // On click, zoom map
	 google.maps.event.addListener(curMarker, 'click', function() {
		map.setZoom(14);
	 });*/

	// Fill more info area
	$("#more-info")
		.find("h2")
		.html($el.find("h3").html())
		.end()
		.find("p")
		.html($el.find(".longdesc").html());

	// No longer the first time through (re: marker clearing)
	first = false;
}

});

$("#locations li:first").trigger("click");
</script>