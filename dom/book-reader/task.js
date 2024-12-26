const fontSizeControls = document.querySelectorAll('.font-size');
const colorControls = document.querySelectorAll('.color');
const book = document.getElementById('book');

function changeFontSize(event) {
    event.preventDefault();
    fontSizeControls.forEach(control => control.classList.remove('font-size_active'));
    event.target.classList.add('font-size_active');

    book.classList.remove('book_fs-small', 'book_fs-big');

    const size = event.target.dataset.size;
    if (size === 'small') {
        book.classList.add('book_fs-small');
    } else if (size === 'big') {
        book.classList.add('book_fs-big');
    }
}

fontSizeControls.forEach(control => {
    control.addEventListener('click', changeFontSize);
})

function changeTextColor(event) {
    event.preventDefault();
    colorControls.forEach(control => control.classList.remove('color_active'));
    event.target.classList.add('color_active');
    book.classList.remove('book_color-black', 'book_color-gray', 'book_color-whitesmoke');

    const textColor = event.target.dataset.textColor;
    if (textColor) {
        book.classList.add(`book_color-${textColor}`);
    }
}

function changeBackgroundColor(event) {
    event.preventDefault();
    colorControls.forEach(control => control.classList.remove('color_active'));

    event.target.classList.add('color_active');

    book.classList.remove('book_bg-black', 'book_bg-gray', 'book_bg-white');

    const bgColor = event.target.dataset.bgColor;
    if (bgColor) {
        book.classList.add(`book_bg-${bgColor}`);
    }
}
const textColorControls = document.querySelectorAll('.book__control_color .color');
textColorControls.forEach(control => {
    control.addEventListener('click', changeTextColor);
});

const backgroundColorControls = document.querySelectorAll('.book__control_background .color');
backgroundColorControls.forEach(control => {
    control.addEventListener('click', changeBackgroundColor);
});;