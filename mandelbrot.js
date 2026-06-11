let body = document.querySelector("p");
let resolution = document.querySelector("input");
let test = document.getElementById("test");
let scale = 3;
let depth = 40;

doThing();

function doThing() {
    body.innerHTML = "";
    for (let yPos = 1; yPos <= resolution.value; yPos++) {
        for (let xPos = 1; xPos <= resolution.value; xPos++) {

            const xCord = -0.761574
            const yCord = -0.0847596

            let width = resolution.value;
            let offset = -0.5;

            let x = xPos / width;
            let y = yPos / width;

            x = (scale * ((x + 0.29) + xCord)) + xCord;
            y = (scale * ((y - 0.39) + yCord)) + yCord;

            if (setCheck(x, y) == true) {
                //body.innerHTML += "&#11035";
            }
            else {
                body.innerHTML += "&#11035";
            }
        }
        body.innerHTML += "<br>";
    }
    body.style.fontSize = 20 / resolution.value + "rem";
}


function setCheck(x0, i0) {
    let x = x0;
    let i = i0;

    for (let range = 0; range < depth; range++) {
        if (Math.sqrt(x * x + i * i) > 2) {
            body.innerHTML += colorize(range);
            return true;
        }

        let tempx = x0 + x * x - i * i;
        let tempi = i0 + 2 * (x * i);
        x = tempx;
        i = tempi;
    }
    return false;
}


function colorize(index) {
    switch (index % 6) {
        case 0:
            return "&#128997";
        case 1:
            return "&#128999";
        case 2:
            return "&#129000";
        case 3:
            return "&#129001";
        case 4:
            return "&#128998";
        case 5:
            return "&#129002";
    }
}


function zoom(increment) {
    scale += scale / 5 * increment;
    doThing();
}

function resetZoom() {
    scale = 3;
    doThing();
}

function iterations() {
    depth = document.getElementById("depth").value;
    doThing();
}