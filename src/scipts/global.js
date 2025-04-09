const items = document.querySelectorAll('.carousel-item');
let index = 0;


function showItem(index) {
    items.forEach((item, i) => {
        item.classList.remove('active');
        if (i === index) {
            item.classList.add('active');
        }
    });
}


document.getElementById('next').addEventListener('click', () => {
    index = (index + 1) % items.length;
    showItem(index);
});

document.getElementById('prev').addEventListener('click', () => {
    index = (index - 1 + items.length) % items.length;
    showItem(index);
});


showItem(index);