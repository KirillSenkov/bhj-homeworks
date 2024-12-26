const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const dropdownValue = dropdown.querySelector('.dropdown__value');
    const dropdownList = dropdown.querySelector('.dropdown__list');

    dropdownValue.onclick = () => {
        if (dropdownList.style.display === 'block') {
            dropdownList.style.display = 'none';
            dropdownList.classList.remove('dropdown__list_active');
        } else {
            dropdownList.style.display = 'block';
            dropdownList.classList.add('dropdown__list_active');
        }
    }

    dropdownList.onclick = (event) => {
        const clickedItem = event.target;
        event.preventDefault();

        if (clickedItem.classList.contains('dropdown__link')) {
            dropdownList.classList.add('dropdown__list_active');
            dropdownValue.textContent = clickedItem.textContent;
            dropdownList.style.display = 'none';
        }
    };
});