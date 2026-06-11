//Created by Judds Wells 6/10/26

import { Logic } from "./logic.js";
import { Display } from "./display.js";

//html document
const canvasElement = document.querySelector("canvas");
const ctx = canvasElement.getContext("2d");
const resolutionSlider = document.querySelector("input");
const zoomIn = document.querySelector("#zoomIn");
const zoomOut = document.querySelector("#zoomOut");
const zoomReset = document.querySelector("#reset");
const depthSlider = document.querySelector("#depth");

//variables
const centerX = -0.761574;
const centerY = -0.0847596;
let scale = 3;
let depth = 40;

//objects
const display = new Display(ctx);
const logic = new Logic();

//event listeners
resolutionSlider.addEventListener("input", mapPixels);
zoomOut.addEventListener("click", () => {
    zoom(1);
});
zoomIn.addEventListener("click", () => {
    zoom(-1);
});
zoomReset.addEventListener("click", resetZoom);
depthSlider.addEventListener("input", updateDepth);

mapPixels();
renderFrame();

function renderFrame() {
    const resolution = getResolution();

    for (let y = 0; y < resolution; y++) {
        for (let x = 0; x < resolution; x++) {

            const { real, imag } =
                mapToComplex(x, y, resolution);

            const iterations =
                logic.setCheck(real, imag, depth);

            display.renderPixel(x, y, iterations);
        }
    }
}

function mapToComplex(x, y, resolution) {

    const nx = (x / resolution) - 0.5;
    const ny = (y / resolution) - 0.5;

    return {
        real: centerX + nx * scale,
        imag: centerY + ny * scale
    };
}

function getResolution() {
    return Number(resolutionSlider.value);
}

function mapPixels() {
    const resolution = getResolution();

    canvasElement.width = resolution;
    canvasElement.height = resolution;

    renderFrame();
}

function zoom(increment) {
    scale += scale / 5 * increment;
    mapPixels();
}

function resetZoom() {
    scale = 3;
    mapPixels();
}

function updateDepth() {
    depth = Number(depthSlider.value);
    mapPixels();
}