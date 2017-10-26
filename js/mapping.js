var mymap = L.map('map').setView([51.51798, -0.20827], 15);

L.tileLayer('https://api.mapbox.com/styles/v1/crishernandezco/ciubia0tp005t2iodbmfb6d4s/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiY3Jpc2hlcm5hbmRlemNvIiwiYSI6ImNpdGxqd2ttNzAwMTQyb29ia2Z6cTA1cmMifQ.XvmSqMosFphwEPOpCCOAoQ', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18
  }).addTo(mymap);

var geojsonLayer = new L.GeoJSON.AJAX("data/coordinates.geojson");
geojsonLayer.addTo(mymap);

var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(mymap);
}

mymap.on('click', onMapClick);
