'use strict'
// for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
//         document.querySelectorAll(".drum")[i].addEventListener("click", (() => {
//                 alert("I got clicked")
//         }));
// }

 // document.querySelector("#title").addEventListener('click', function () {
 //         alert('this is working')
 // })

for (let i = 0; i < document.querySelectorAll('.drum').length; i++) {
        document.querySelectorAll('.drum')[i].addEventListener('click', function () {
                this.style.color = "white"
        });
}
// audio.play()
// let audio = new Audio("./sounds/tom-1.mp3");
