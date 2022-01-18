function spawnFunctions() {
    setInterval(() => {
        
        let x = Math.random() * canvas.width - 40;
        let y = Math.random() * canvas.height - 40;

        if (circlesThingsArray.length <= spawnLimit - 1) {
            circlesThingsArray.push(new circleThings(x, y, 20, "blue"))
            console.log("ANYING")
        }
    },spawnTimes)
}