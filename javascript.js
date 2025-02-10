function changeTrafficLight() {
    const red = document.getElementById("red");
    const yellow = document.getElementById("yellow");
    const green = document.getElementById("green");

    if (yellow.classList.contains("yellow-light")) {
        yellow.classList.remove("yellow-light");
        yellow.classList.add("light-off");

        red.classList.remove("light-off");
        red.classList.add("red-light");
    } 
    else if (red.classList.contains("red-light")) {
        red.classList.remove("red-light");
        red.classList.add("light-off");

        green.classList.remove("light-off");
        green.classList.add("green-light");
    } 
    else {
        green.classList.remove("green-light");
        green.classList.add("light-off");

        yellow.classList.remove("light-off");
        yellow.classList.add("yellow-light");
    }
}



