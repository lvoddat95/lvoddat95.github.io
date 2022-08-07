window.onload = function () {

}

var map;
var markers = [];
var infoWindow;

// init
function initMap() {
	var VN = {
		lat: 15.7583505,
		lng: 101.4150247
	};
	map = new google.maps.Map(document.getElementById("map"), {
		center: VN,
		zoom: 6,
		mapTypeId: "roadmap",
	});
	infoWindow = new google.maps.InfoWindow();
	searchStores();
}

// Tim kiem theo ten
function searchStores() {
	var foundStores = [];
	var searchCode = document.getElementById('search-code').value;
	if (searchCode) {

		for (var store of stores) {
			var code = store['name'];		
		console.log(code);
			if (code == searchCode) {
				foundStores.push(store);
			}
		}

	} else {
		foundStores = stores;
	}
	// clearLocations();
	displayStores(foundStores);
	showStoresMarkers(foundStores);
	setOnClickListener();
}

// Xoa het markers
function clearLocations() {
	infoWindow.close();
	for (var i = 0; i < markers.length; i++) {
		markers[i].setMap(null);
	}
	markers.length = 0;
}

// Xu kien click vao item tren danh sach Store
function setOnClickListener() {
	var storeBox = document.querySelectorAll('.stores-box');
	var storeElements = document.querySelectorAll('.store-item');
	
	storeBox.forEach(function (parentElem, index) {
		Array.from(parentElem.children[0].children).forEach(function (childElem, childIndex) {
			childElem.addEventListener('click', function () {
				new google.maps.event.trigger(markers[childIndex], "click");
			})
		});
	});
		
}

// Hien thi thong tin danh sach Store
function displayStores() {
	var storesHtml = '';
	var storesFilterHtml = '';
	for (var [index, store] of stores.entries()) {
		var address = store['address'];
		var name = store['name'];
		var phone = store['phoneNumber'];
		storesHtml += `
            <div class="store-item">
              <div class="store-item-background">
                <div class="store-info-container">
                  <div class="store-address">
                    <span>${name}</span>
                  </div>
                  <div class="store-phone-number">${phone}</div>
                </div>
                <div class="store-number-container">
                  <div class="store-number">
                    ${index+1}
                  </div>
                </div>
              </div>
            </div>`;
			
			storesFilterHtml += `
            <div class="store-item">
                <ul class="list-unstyled">
					<li><span>${name}</span></li>
				</ul>
            </div>`;
			

		document.querySelector('.stores-box > .stores-list').innerHTML = storesHtml;
		document.querySelector('.stores-box > .stores-filter').innerHTML = storesFilterHtml;

	}
}

// Hien thi Markers Store trên map
function showStoresMarkers(stores) {
	var bounds = new google.maps.LatLngBounds();
	for (var [index, store] of stores.entries()) {

		var latlng = new google.maps.LatLng(
			store["coordinates"]["latitude"],
			store["coordinates"]["longitude"],
		);
		var name = store["name"];
		var address = store["address"];
		var openStatusText = store["openStatusText"];
		var phoneNumber = store["phoneNumber"];

		bounds.extend(latlng);
		createMarker(latlng, name, address, openStatusText, phoneNumber, index + 1)
	}
	// map.fitBounds(bounds);
}

// Khoi tao Marker tren map
function createMarker(latlng, name, address, openStatusText, phoneNumber, index) {
	var html = `
      <div class="store-info-window">
        <div class="store-info-name">
          ${name}
        </div>
        <div class="store-info-status">
          ${openStatusText}
        </div>
        <div class="store-info-address">
          <div class="circle">
            <i class="fas fa-location-arrow"></i>
          </div>
          ${address}
        </div>
        <div class="store-info-phone">
          <div class="circle">
            <i class="fas fa-phone-alt"></i>
          </div>
          ${phoneNumber}
        </div>
      </div>
  `;

	var marker = new google.maps.Marker({
		map: map,
		position: latlng,
	});

	google.maps.event.addListener(marker, 'click', function () {
		infoWindow.setContent(html);
		infoWindow.open(map, marker);
		map.panTo(this.getPosition());
		map.setZoom(12);
	});

	markers.push(marker);
}