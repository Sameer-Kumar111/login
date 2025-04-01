gsap.top("#page1", {
    scrollTrigger: {
        trigger: "#page1",
        start: "top top",
        end: "bottom top",
        markers: true,
        pin: true,
        scroller: "#main"
    }
}
)

gsap.top("#page2", {
    scrollTrigger: {
        trigger: "#page2",
        start: "top top",
        end: "bottom top",
        markers: true,
        pin: true,
        scroller: "#main"
    }
}
)

gsap.top("#page3", {
    scrollTrigger: {
        trigger: "#page3",
        start: "top top",
        end: "bottom top",
        markers: true,
        pin: true,
        scroller: "#main"
    }
}
)

// Set up the canvas and context
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Set the canvas to full screen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Create a 3D effect using some objects
let z = 0;  // Z-position for scrolling effect

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);  // Clear the canvas

    // Create a 3D scrolling effect (object moving from z-axis)
    z += 0.1;  // Increment Z position to simulate movement
    
    // Draw objects at different positions
    for (let i = 0; i < 100; i++) {
        let x = canvas.width / 2 + Math.cos(i) * (z + i * 10);
        let y = canvas.height / 2 + Math.sin(i) * (z + i * 10);
        
        // Draw circles with changing size (to simulate depth)
        let size = 5 + (z + i * 10) / 10;
        
        ctx.beginPath();
        ctx.arc(x, y, size, 0, 2 * Math.PI);
        ctx.fillStyle = `rgba(255, 255, 255, ${1 - (z + i * 10) / 500})`; // Fade effect
        ctx.fill();
    }

    // Repeat animation
    requestAnimationFrame(animate);
}

// Start the animation loop
animate();
