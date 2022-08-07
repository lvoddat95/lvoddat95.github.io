var map;
var markers = [];
var infoWindow;
var icon = "data:image/png;base64,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";

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
	var storeItem = document.querySelectorAll('.store-item');
	storeBox.forEach(function (parentElem, index) {
		Array.from(parentElem.children[0].children).forEach(function (childElem, childIndex) {
			childElem.addEventListener('click', function () {
				storeItem.forEach(elem => elem.classList.remove('active'));
				childElem.classList.add('active');
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
		var status = store['status'];
		
		storesHtml += `
            <div class="store-item" data-filter="${city}">
              <div class="store-item-inner">
                <div class="store-info-container">
                  	<div class="store-name">
                    	<span>${name}</span>
                  	</div>
                  	<div class="store-address">
					  	<i class="sub-color2 far fa-location-dot fa-fw me-2"></i>${address}</div>
                  	<div class="store-status">
					  	<i class="sub-color2 far fa-clock fa-fw me-2"></i>${status}</div>
					<div class="store-phone">
					  	<i class="sub-color2 far fa-phone fa-fw me-2"></i>${phone}</div>
                </div>
                <div class="store-number-container">
                  <div class="store-number d-none">
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
	storesFilterHtml += `<option value="0" selected="selected">Chọn Tỉnh/Thành phố</option>`;
	for (var [index, store] of filteredDublicate.entries()) {
		var city = store['city'];
		storesFilterHtml += `<option value="${city}">${city}</option>`;
		document.querySelector('.stores-filter').innerHTML = storesFilterHtml;
	}
	storesFilterHtml += `</select>`;
	// Init Select2
	App.initSelect2("#select-filter", {
		"language": "vi"
	});
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
        <div class="store-info-status d-none">
          ${status}
        </div>
        <div class="store-info-address d-none">
          <div class="circle">
            <i class="fas fa-location-arrow"></i>
          </div>
          ${address}
        </div>
        <div class="store-info-phone d-none">
          <div class="circle">
            <i class="fas fa-phone-alt"></i>
          </div>
          ${phone}
        </div>
      </div>
  `;

	var marker = new google.maps.Marker({
		map: map,
		icon: icon,
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