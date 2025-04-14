
    const items = document.querySelectorAll('.carousel-item');
    let index = 0;

    function showItem(i) {
    items.forEach((item, idx) => {
        item.classList.remove('active');
        if (idx === i) item.classList.add('active');
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

    // Mostrar primer slide al cargar
    showItem(index);
