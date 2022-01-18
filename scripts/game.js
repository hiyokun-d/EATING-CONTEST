/* file ini tuh berfungsi untuk ngehandle hal hal yang di dalam gamenya
yaitu visual dan ngeatur beberapa hal gak tau apaan tapi baca aja sendiri
nanti lu hapus aja ini :V
 */

function visual() {
        if (canvas.width !== window_width || canvas.height !== window_height) {
          location.reload();
        }
    
  ctx.fillStyle = "white"
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  
  circlesThingsArray.forEach((block, index) => {
    block.spawn(ctx)
  })

  ctx.fillStyle = "GREEN"
  ctx.fillRect(0, 0, player.health, 20)
  
  if (collider.player) {
    ctx.beginPath();
    ctx.fillStyle = player.color
    ctx.arc(player.x, player.y, player.r, 0, Math.PI * 2)
    ctx.fill()
    ctx.closePath();
  }

  if (score >= 5 && score <= 10) {
    reduceHealth = 0.5
    spawnTimes = 500
    addHealth = 15
  } else if (score >= 10 && score <= 15) {
    reduceHealth = 0.9
    addHealth = 20
    spawnTimes = 300
  } else if (score >= 15) {
    reduceHealth = 1
    spawnTimes = 200
    addHealth = 25
  }

  if (player.health && !isDied) {
    isDied = true
    alert("MAAAN THAT'S WAS CLOSE")
  }
  player.health -= reduceHealth
}