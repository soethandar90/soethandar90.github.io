var animationFrames = [];
var currentFrame = 0;
var animationInterval;
var intervalSpeed;
var isAnimating = false;
var FONTSIZES = [];
FONTSIZES["Tiny"] = "7pt";
FONTSIZES["Small"] = "10pt";
FONTSIZES["Medium"] = "12pt";
FONTSIZES["Large"] = "16pt";
FONTSIZES["Extra Large"] = "24pt";
FONTSIZES["XXL"] = "32pt";

function setAnimation() {
    document.getElementById("text-area").value = ANIMATIONS[document.getElementById("animation").value];
    var animationText = document.getElementById("text-area").value;
    animationFrames = animationText.split("=====\n");
    document.getElementById("text-area").value = animationFrames[0];
}

function setFont() {
    document.getElementById("text-area").style.fontSize = FONTSIZES[document.getElementById("fontsize").value];
}

function setTurbo() {
    if (isAnimating) {
        clearInterval(animationInterval);
        intervalSpeed = document.getElementById("turbo").checked ? 50 : 250;
        animationInterval = setInterval(showNext, intervalSpeed);
    }
}

function showNext() {
    document.getElementById("text-area").value = animationFrames[currentFrame];
    currentFrame++;
    if (currentFrame >= animationFrames.length) {
        currentFrame = 0;
    }
}

function startAnimation() {
    if (!isAnimating) {
        isAnimating = true;
        document.getElementById("start").disabled = true;
        document.getElementById("stop").disabled = false;
    }
    setFont();
    setAnimation();
    setTurbo();
}

function resetAnimation() {
    setAnimation();
}

function stopAnimation() {
    if (isAnimating) {
        isAnimating = false;
        document.getElementById("start").disabled = false;
        document.getElementById("stop").disabled = true;
    }
    clearInterval(animationInterval);
    document.getElementById("text-area").value = animationFrames[0];
}