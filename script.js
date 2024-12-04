window.onload = function () {
    const images = [
        document.getElementById('sliding-image-1'), // Duck Blue (Line 1)
        document.getElementById('sliding-image-2'), // Duck Green (Line 1)
        document.getElementById('sliding-image-3'), // Duck Red (Line 1)
        document.getElementById('sliding-image-4'), // Duck Yellow (Line 1)
        document.getElementById('sliding-image-5'), // Duck Purple (Line 1)
        document.getElementById('sliding-image-6'), // Duck Blue (Line 2)
        document.getElementById('sliding-image-7'), // Duck Green (Line 2)
        document.getElementById('sliding-image-8'), // Duck Red (Line 2)
        document.getElementById('sliding-image-9'), // Duck Yellow (Line 2)
        document.getElementById('sliding-image-10') // Duck Purple (Line 2)
    ];

    let hiddenImages = {
        1: false, 
        6: false  
    };

    images[1].addEventListener('click', function () {
        images[1].style.display = 'none'; 
        hiddenImages[1] = true; 
    });

    images[6].addEventListener('click', function () {
        images[6].style.display = 'none'; 
        hiddenImages[6] = true; 
    });

  
    function resizeImages() {
        const canvasWidth = window.innerWidth;
        const canvasHeight = window.innerHeight;

        images.forEach((image, index) => {
           
            image.style.width = `${canvasWidth * 0.1}px`; 
            image.style.height = 'auto'; 

            // Position each image line vertically
            if (index < 5) {
                // First line of ducks (Line 1)
                image.style.top = `${canvasHeight * 0.32}px`;
            } else {
                // Second line of ducks (Line 2)
                image.style.top = `${canvasHeight * 0.65}px`; 
            }
        });
    }

 
    const speeds = [2.5, 3.5, 4, 1, 5, 2.5, 3.5, 1.5, 4.5, 3]; 
    
    function slideImages() {
        let positions = images.map((image, index) => window.innerWidth + (index * image.offsetWidth));

        
        function move() {
            positions = positions.map((pos, index) => pos - speeds[index]); 

            images.forEach((image, index) => {
                image.style.left = `${positions[index]}px`;
            });

           
            positions = positions.map((pos, index) => {
                const imageWidth = images[index].offsetWidth;
                if (pos + imageWidth < 0) {
                    
                    if (hiddenImages[index]) {
                        images[index].style.display = 'block'; 
                        hiddenImages[index] = false; 
                    }
                    return window.innerWidth + (index * imageWidth); 
                }
                return pos;
            });

            requestAnimationFrame(move); 
        }

        move(); 
    }

   
    resizeImages();
    window.addEventListener('resize', resizeImages);

    slideImages(); 
};
