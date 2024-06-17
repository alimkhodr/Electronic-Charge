document.querySelectorAll('.consultar-btn').forEach(button => {
    button.addEventListener('click', function() {
        const slide = this.parentElement;
        const paragraphs = slide.querySelectorAll('.teste-paragraph');
        const icon = this.querySelector('i');

        let isAnyVisible = false;
        paragraphs.forEach(paragraph => {
            if (paragraph.style.display === 'block') {
                isAnyVisible = true;
            }
        });

        paragraphs.forEach(paragraph => {
            if (isAnyVisible) {
                paragraph.style.display = 'none';
            } else {
                paragraph.style.display = 'block';
            }
        });

        if (isAnyVisible) {
            icon.classList.remove('rotate-down');
        } else {
            icon.classList.add('rotate-down');
        }
    });
});

function slideRight() {
    // Implement slide right functionality here
}

function slideLeft() {
    // Implement slide left functionality here
}
