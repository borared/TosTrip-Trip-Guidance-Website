document.addEventListener('DOMContentLoaded', (event) => {
            const slider = document.getElementById('animal-slider');
            const progressBar = document.getElementById('progressBar');
            const slides = document.querySelectorAll('.slide');
            const totalSlides = slides.length;
            let currentSlide = 0;
            const intervalTime = 8000; //8000ms

            function startProgressBar() {
                // 1. Remove the class to stop/reset the animation
                progressBar.classList.remove('progress-animate');
                
                // 2. Wait for the next repaint cycle (guaranteed reset)
                requestAnimationFrame(() => {
                    // 3. Re-add the class to start the animation from 0% over 5s
                    progressBar.classList.add('progress-animate');
                });
            }

            function nextSlide() {
                // Calculate the next slide index
                currentSlide = (currentSlide + 1) % totalSlides;
                
                // Calculate the horizontal shift needed (e.g., 0%, -100%, -200%)
                const offset = -currentSlide * 100;
                slider.style.transform = `translateX(${offset}%)`;

                // Start the progress bar animation for the new slide
                startProgressBar();
            }
            
            // Initialization: Start the first progress bar animation
            startProgressBar();

            // Set the main interval for sliding
            setInterval(nextSlide, intervalTime);
        });