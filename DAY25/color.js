const canvas = document.querySelector('.canvas');
        const btnRed = document.querySelector('.btn-red');
        const btnYellow = document.querySelector('.btn-yellow');
        const btnGreen = document.querySelector('.btn-green');

        btnRed.addEventListener('click', () => {
            canvas.classList.remove('red', 'yellow', 'green');
            canvas.classList.add('red');
        })
        btnYellow.addEventListener('click', () => {
            canvas.classList.remove('red', 'yellow', 'green');
            canvas.classList.add('yellow');
        })
        btnGreen.addEventListener('click', () => {
            canvas.classList.remove('red', 'yellow', 'green');
            canvas.classList.add('green');
        })
