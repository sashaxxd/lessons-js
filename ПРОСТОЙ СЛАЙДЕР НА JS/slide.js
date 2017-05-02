var slide_left = document.getElementById('slide-left'),
    slide_right = document.getElementById('slide-right'),
    total_img = document.getElementsByTagName('img'),
    idx = 0; // Индекс текущего слайда.

slide_right.addEventListener('click', moveLeft);
function moveLeft(){
    slide_left.style.display = 'block';// При клике на правый открываем левую стрелку
    total_img[idx].style.display = 'none'; // Скрываем текущий слайд
    total_img[++idx].style.display = 'block'; // Инкрементируем индекс и показываем следующий слайд
    if (idx === total_img.length - 1) { // Убираем "правую" стрелку, если справа слайдов больше нет
        slide_right.style.display = 'none';
    }
}

//Аналогично, только для левой стрелки
slide_left.addEventListener('click', moveRight);
function moveRight(){
    slide_right.style.display = 'block';
    total_img[idx].style.display = 'none';
    total_img[--idx].style.display = 'block';
    if (idx === 0) {
        slide_left.style.display = 'none';
    }
}
//