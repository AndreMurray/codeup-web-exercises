$.get('https://api.openweathermap.org/data/2.5/forecast', {
    lat: 29.4252,
    lon: -98.4916,
    appid: weatherMapKey.openWeather,
    units: 'imperial'
}).done(function(data) {
    // can be used to get forecast conditions at current time in increments of 24 hours
    for (let i = 0; i < data.list.length; i += 8) {
        // console.log(data.list[i]);
        let html = `
         <div class="col-3 border border-dark hardBox">
            <div class="row" >
                <div class="col-12" >${data.list[i].dt_txt}</div>
                <hr>
                <div class="col-12">${data.list[i].main.temp}</div>
                <hr>
                <div class="col-12">${data.list[i].weather[0].description}</div>
                
                <div class="col-12">${data.list[i].main.humidity}</div>
                <hr>
                <div class="col-12">${data.list[i].wind.speed}</div>
                <hr>
                <div class="col-12">${data.list[i].main.pressure}</div>
            </div>
        </div>
        `
        $('#forecast').append(html)
        // console.log(data.list[i].dt_txt.value)
    }

}).fail(function(jqXhr, status, error) {
    console.log(jqXhr);
    console.log(status);
    console.log(error);
});







// Map



    mapboxgl.accessToken = keys.mapbox;
    let map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v9',
        zoom: 12,
        center: [-98.652577, 29.416715]


    });


   let marker =  new mapboxgl.Marker({
       draggable: true
   }).addTo(map).setLngLat()












