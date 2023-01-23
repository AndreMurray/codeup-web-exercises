$.get('https://api.openweathermap.org/data/2.5/forecast', {
    lat: 29.4252,
    lon: -98.4916,
    appid: weatherMapKey.openWeather,
    units: 'imperial'
}).done(function(data) {
    // can be used to get forecast conditions at current time in increments of 24 hours
    for (let i = 0; i < data.list.length; i += 8) {
        console.log(data.list[i]);
    }
}).fail(function(jqXhr, status, error) {
    console.log(jqXhr);
    console.log(status);
    console.log(error);
});

mapboxgl.accessToken = keys.mapbox;
let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    zoom: 12,
    center: [-98.652577, 29.416715]

});