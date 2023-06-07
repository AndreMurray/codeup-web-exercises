"use strict";

// $.ajax({url:"https://api.coingecko.com/api/v3/coins/global/bitcoin",
// method: "GET",
// dataType: "json"}).done(function (data) {
//     console.log(data)
// })


$.get("https://api.coingecko.com/api/v3/coins/bitcoin").done(function (data) {

    let newArray = "";
   console.log(data.tickers)
    data.tickers.forEach(function (data) {
        let dateStr = data.last_fatch_at;
        let dateObj = new Date(dateStr);
        let formattedDate = `${dateObj.getDate()}/${dateObj.getMonth() + 1}/${dateObj.getFullYear()}`;
        $(".result").append(`<li>${data.base}</li>
<li>${data.coin_id}</li>
<li>${formattedDate}</li>`);
    });


});