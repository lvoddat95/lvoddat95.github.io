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
		zoom: 5,
		mapTypeId: "roadmap",
	});
	infoWindow = new google.maps.InfoWindow();
	// console.log(stores);
	displayFilter();
	displayStores(stores);
	showStoresMarkers(stores);
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
	storeBox.forEach(function (parentElem, index) {
		Array.from(parentElem.children[0].children).forEach(function (childElem, childIndex) {
			childElem.addEventListener('click', function () {
				new google.maps.event.trigger(markers[childIndex], "click");
			})
		});
	});
}

// Tim kiem theo ten
function filterStores(p_this) {
	var foundStores = [];
	var filterCode = p_this.value;
	if (filterCode.length > 1) {
		for (var i = 0; i < stores.length; i++) {
			var code = stores[i]['city'];
			if (code == filterCode) {
				foundStores.push(stores[i]);
			}
		}
	} else {
		// foundStores = stores;
		clearLocations();
		initMap();
		return;
	}

	clearLocations();
	displayStores(foundStores);
	showStoresMarkers(foundStores, true);
	setOnClickListener();
}

// Hien thi thong tin danh sach Store
function displayStores(p_data) {
	var storesHtml = '';
	// console.log(p_data);
	for (var [index, store] of p_data.entries()) {

		var address = store['address'];
		var name = store['name'];
		var phone = store['phone'];
		var city = store['city'];

		storesHtml += `
            <div class="store-item" data-filter="${city}">
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

		document.querySelector('.stores-box > .stores-list').innerHTML = storesHtml;
	}

}
function displayFilter() {
	var storesFilterHtml = '';
	
	var keysFilter = ['city'];
	var filteredDublicate = stores.filter(
		(s => o =>
			(k => !s.has(k) && s.add(k))
			(keysFilter.map(k => o[k]).join('|'))
		)
		(new Set)
	);

	storesFilterHtml += `<select id="select-filter" class="form-select" onchange="filterStores(this);">`;
	storesFilterHtml += `<option value="0" selected="selected">Chọn thành phố</option>`;
	for (var [index, store] of filteredDublicate.entries()) {
		var city = store['city'];
		storesFilterHtml += `<option value="${city}">${city}</option>`;
		document.querySelector('.stores-filter').innerHTML = storesFilterHtml;
	}
	storesFilterHtml += `</select>`;
	// Init Select2
	App.initSelect2("#select-filter", {"language": "vi",minimumResultsForSearch: -1});
}

// Hien thi Markers Store trên map
function showStoresMarkers(stores, fitBounds = false) {
	var bounds = new google.maps.LatLngBounds();
	for (var [index, store] of stores.entries()) {

		var latlng = new google.maps.LatLng(
			store["coordinates"]["latitude"],
			store["coordinates"]["longitude"],
		);
		var name = store["name"];
		var address = store["address"];
		var status = store["status"];
		var phone = store["phone"];

		bounds.extend(latlng);
		createMarker(latlng, name, address, status, phone, index + 1)
	}
	if (fitBounds == true) map.fitBounds(bounds);
}

// Khoi tao Marker tren map
function createMarker(latlng, name, address, status, phone, index) {
	var html = `
      <div class="store-info-window">
        <div class="store-info-name">
          ${name}
        </div>
        <div class="store-info-status">
          ${status}
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
          ${phone}
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
		map.setZoom(14);
	});

	markers.push(marker);
}