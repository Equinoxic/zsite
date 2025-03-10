ncount = 0

function randomIntRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function createRGBhex(r, g, b) {
    return ((r & 0xff) << 16) + ((g & 0xff) << 8) + (b & 0xff);
}

function clickCount() {
    ++ncount;

    color_r = randomIntRange(0, 255)
    color_g = randomIntRange(0, 255)
    color_b = randomIntRange(0, 255)

    click_counter.textContent = ncount;
    click_counter.style = `color: rgb(${color_r}, ${color_g}, ${color_b})`
}