window.addEventListener("DOMContentLoaded", () => {
    const menu = document.querySelector(".content-overlay");
    gsap.set(menu, { opacity: 0 });

    const squareContainer = document.getElementById("square-container");
    const squareSize = 100
    const screenWidth = window.innerWidth
    const screenHeight = window.innerHeight
    const numCols = Math.ceil(screenWidth / squareSize)
    const numRows = Math.ceil(screenHeight / squareSize)

    const numSquares = numCols * numRows;

    squareContainer.style.width = `${numCols * squareSize}px`;
    squareContainer.style.height = `${numRows * squareSize}px`;

    let squares = [];

    function createSquares() {
        for (let i = 0; i < numSquares; i++) {
            const square = document.createElement("div");
            square.classList.add("square");
            squareContainer.appendChild(square);
            squares.push(square);
        }
    }

    function animateSquares() {
        gsap.fromTo(squares, {
            opacity: 0
        }, {
            opacity: 1,
            delay: .5,
            duration: 0.0005,
            stagger: {
                each: 0.004,
                from: 'random',
            },
        });
        gsap.to(squares, {
            opacity: 0,
            delay: 1.5,
            duration: 0.0005,
            stagger: {
                each: 0.004,
                from: "random"
            },
        });
    }

    let overlayVisible = false;

    document.getElementById("toggle").addEventListener("click", () => {
        squareContainer.innerHTML = "".
            squares = [];
        createSquares();
        animateSquares();

        gsap.to(menu, 0.025, {
            opacity: overlayVisible ? 0 : 1,
            visibility: overlayVisible ? "hidden" : "visible",
            duration: 0.5,
            ease: "power2.inOut",
            delay: 1.15,
        });

        gsap.to(menu, {
            zIndex: overlayVisible ? -1 : 0,
            delay: overlayVisible ? 0 : 2,
        });

        overlayVisible = !overlayVisible;
    });

});
