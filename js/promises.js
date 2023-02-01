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

// async function getRepos(username) {
//     let response = await fetch(`https://api.github.com/users/AndreMurray/events/public`);
//     let data = await response.json();
//     console.log( data[0]['created_at'])
//
// }

// getRepos("")



function getLastCommitDate(username) {
    return fetch(`https://api.github.com/users/${username}/events`, {headers: {'Authorization': `token ${GIT_API}`}})
        .then(data => data.json())
        .then(data => {
            let pushEvents = data.filter(event => event.type = "pushEvent");
            let mostRecentPush = pushEvents[0];
            let dateObj = mostRecentPush.created_at;
            return new  Date(dateObj).toLocaleString()
        })
}

getLastCommitDate("AndreMurray").then((data) => {
    console.log(data)
})







