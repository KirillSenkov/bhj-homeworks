const tabs = document.querySelectorAll('.tab');
const contentItems = document.querySelectorAll('.tab__content');

tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('tab_active'));
        tab.classList.add('tab_active');

        contentItems.forEach(item => item.classList.remove('tab__content_active'));

        contentItems[index].classList.add('tab__content_active');
    });
});