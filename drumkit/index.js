var numberOfDrums = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrums; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        animation(buttonInnerHTML);

    });

}
document.addEventListener("keydown", function (event) {
    makeSound(event.key);
    animation(event.key);
});


function makeSound(key) {
    switch (key) {
        case "A":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;


        case "v":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

        case "i":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "s":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "h":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;


        case "k":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "a":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        default:
            console.log(buttonInnerHTML);
    }
}

function animation(currentKey) {
    var active = document.querySelector("." + currentKey);
    active.classList.add("pressed");

    setTimeout(function () {
        active.classList.remove("pressed");
    }, 100);
}
