'use strict'
for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
        document.querySelectorAll(".drum")[i].addEventListener("click", (() => {
                alert("I got clicked")
        }));
}

