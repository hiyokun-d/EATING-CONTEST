/* lu tau lah ini apaan lah yah soalnya gw males ngetik wkwkwkwkwk */

//player A.K.A cursor
let player = {
    x: 0,
  y: 0,
    r: 15,
  color: "RED",
    health: 500,
}

let collider = {
  player: true,
  circlethings: true
}

let circlesThingsArray = []

let score = 0
let reduceHealth = 0.2
let addHealth = 10

let isDied = false

let spawnLimit = 15
let spawnTimes = 1000; // 6 seconds

//window
let window_width;
let window_height;
setInterval(() => {
  window_width = window.innerWidth;
  window_height = window.innerHeight;
}, 0);

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let fps = 50;
let game_time = 1000 / fps;
////asu njing