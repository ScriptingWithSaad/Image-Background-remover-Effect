const imgBox = document.querySelector('.img-box');
        const imgWrap = document.querySelector('.img-wrap');
        const sliderLine = document.querySelector('.slider-line');

        function handleSlide(e) {
            const rect = imgBox.getBoundingClientRect();
            let x = e.type === 'mousemove' ? e.clientX : e.touches[0].clientX;
            x = x - rect.left;
            
            let position = (x / rect.width) * 100;
            position = Math.max(0, Math.min(position, 100));
            
            imgWrap.style.width = `${position}%`;
            sliderLine.style.left = `${position}%`;
        }

        // Mouse events
        imgBox.addEventListener('mousemove', handleSlide);

        // Touch events
        imgBox.addEventListener('touchmove', (e) => {
            e.preventDefault();
            handleSlide(e);
        });