/*
 * Learning Google Maps Geocoding by example
 * Miguel Marnoto
 * 2015 - en.marnoto.com
 *
 */

var map;
var markers;

function initMap(roude) {

    var addressInput = ["Kuiv", "Eilat", "Nazareth", "Jerusalem"];

    var ways = [];
    for (i = 1; i < addressInput.length - 2; ++i){
        ways.push({
            location: addressInput[i],
            stopover: true
        });
    }
    var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer;
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 7,
        center: addressInput[1]
    });
    directionsDisplay.setMap(map);
    directionsService.route({
        origin: addressInput[0],
        destination: addressInput[addressInput.length - 1],
        waypoints: ways,
        optimizeWaypoints: true,
        travelMode: 'DRIVING'
    }, function (response, status) {
        if (status === 'OK') {
            directionsDisplay.setDirections(response);
        } else {
            window.alert('Directions request failed due to ' + status);
        }
    });
}

