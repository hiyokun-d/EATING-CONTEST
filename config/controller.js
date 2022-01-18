addEventListener("mousemove", e => {
  player.x = e.x;
  player.y = e.y;
}, false);


addEventListener("click", e => {
  circlesThingsArray.forEach((block, index) => {
    if (CirclesColliding(block, player)) {
      if (e.button === 0) {
        circlesThingsArray.splice(index, 1)
          player.health += addHealth

        score++;
      }
    }
  })
})