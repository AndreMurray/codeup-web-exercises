



// $.get('https://api.openweathermap.org/data/2.5/forecast', {
//     lat: 29.4252,
//     lon: -98.4916,
//     appid: weatherMapKey.openWeather,
//     units: 'imperial'
// }).done(function(data) {
//     // can be used to get forecast conditions at current time in increments of 24 hours
//     for (let i = 0; i < data.list.length; i += 8) {
//         // console.log(data.list[i]);
//         let html = `
//          <div class="col-3 border border-dark hardBox">
//             <div class="row" >
//                 <div class="col-12" >${data.list[i].dt_txt}</div>
//                 <hr>
//                 <div class="col-12">${data.list[i].main.temp}</div>
//                 <hr>
//                 <div class="col-12">${data.list[i].weather[0].description}</div>
//
//                 <div class="col-12">${data.list[i].main.humidity}</div>
//                 <hr>
//                 <div class="col-12">${data.list[i].wind.speed}</div>
//                 <hr>
//                 <div class="col-12">${data.list[i].main.pressure}</div>
//             </div>
//         </div>
//         `
//         $('#forecast').append(html)
//         // console.log(data.list[i].dt_txt.value)
//     }
//
// }).fail(function(jqXhr, status, error) {
//     console.log(jqXhr);
//     console.log(status);
//     console.log(error);
// });







// Map
mapboxgl.accessToken = keys.mapbox;
let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    zoom: 12,
    center: [-98.652577, 29.416715]


});

//add a trigger event onto the search bar that listens for a keypress of the enter key
$("#searchbutton").click(function(e) {
    let searchBar = $("#place").val() || 'San Antonio, TX';
    geocode(searchBar, keys.mapbox)
        .then(function(result){
            console.log(result)
            return result;
        }).then(function (data) {
            //use the flyTo method to move the map to the coordinates of the search bar
            map.flyTo({
                center: data,
                zoom: 12
            });
        });
    console.log(searchBar)

    let html = "";
    $.get("https://api.openweathermap.org/data/2.5/forecast?q="+searchBar+"&appid="+weatherMapKey.openWeather+"",
        {units: "imperial",}
    ).done(function(data) {
        console.log(data)
        // can be used to get forecast conditions at current time in increments of 24 hours
        for (let i = 0; i < data.list.length; i += 8) {
            // console.log(data.list[i]);
            html += `
         <div class="col-3 border border-4 border-dark hardBox">
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
            $('#forecast').html(html)
            console.log(data.list[i])


        }

    }).fail(function(jqXhr, status, error) {
        console.log(jqXhr);
        console.log(status);
        console.log(error);
    });



});

$('#place').keypress(function(e) {
    // if the key pressed is the enter key
    // trigger the click event on the search button
    if (e.which === 13) {
        $('#searchbutton').click();
    }
});













