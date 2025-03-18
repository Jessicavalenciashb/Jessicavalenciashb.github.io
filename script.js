document.addEventListener("DOMContentLoaded", function() {
    console.log("Website Loaded!");
});
function createHeart() {
    let heart = document.createElement("div");
    heart.innerHTML = "❤"; // Bisa diganti dengan simbol lain seperti 💖
    heart.style.position = "absolute";
    heart.style.left = Math.random() * window.innerWidth + "px"; 
    heart.style.bottom = "0px"; 
    heart.style.fontSize = Math.random() * 20 + 20 + "px"; 
    heart.style.opacity = Math.random() * 0.5 + 0.5; 
    document.body.appendChild(heart);

    let speed = Math.random() * 3 + 2;
    let move = setInterval(() => {
        let currentBottom = parseFloat(heart.style.bottom);
        if (currentBottom > window.innerHeight) {
            clearInterval(move);
            heart.remove();
        } else {
            heart.style.bottom = currentBottom + speed + "px";
        }
    }, 50);
}

// Buat hati setiap 300ms
setInterval(createHeart, 300);
