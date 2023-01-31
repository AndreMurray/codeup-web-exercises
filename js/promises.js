'use strict'

// async function getActivity(username) {
//     try {
//         let response = await fetch(`https://api.github.com/users/${username}/events`, {headers: {'Authorization': `token ${GIT_API}`}})
//         console.log(username)
//     } catch (error) {
//         console.log(`ERROR: ${error}`)
//     }
//
//
//     }

    // getActivity(AndreMurray)
    //     .then(data => console.log(data))
    //     .catch(function (error) {
    //
    //     });

async function getRepos(username) {
    let response = await fetch(`https://api.github.com/users/AndreMurray/events/public`);
    let data = await response.json();
    console.log( data[0]['created_at'])

}

getRepos("")



//The setInterval() method allows code to be executed at a specified time interval. The specified code will continue executing at the given interval until the method clearInterval() is called.






// var count = 0;
// var max = 10;
// var interval = 1000; // interval time in milliseconds
//
// var intervalId = setInterval(function () {
//     if (count >= max) {
//         clearInterval(intervalId);
//         console.log('All done');
//     } else {
//         count++;
//         console.log('Repeating this line ' + count);
//     }
// }, interval);

