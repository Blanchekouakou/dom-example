var btnLike1 = document.getElementById('like-btn-1');

var addLike = function(){
    btnLike1.removeAttribute('class');
    btnLike1.setAttribute('class', 'fa-solid fa-heart');
    btnLike1.style.color = "rgb(218, 40, 40)";

    btnLike1.removeEventListener('click', addLike);
    btnLike1.addEventListener('click', removeLike);
}

var removeLike = () => {
    btnLike1.removeAttribute('class');
    btnLike1.setAttribute('class', 'fa-regular fa-heart');

    btnLike1.removeEventListener('click', removeLike);
    btnLike1.addEventListener('click', addLike);
}

btnLike1.addEventListener('click', addLike);