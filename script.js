window.addEventListener('load', function() {
    var back = document.querySelector('.back');
  if (back) {
    back.style.display = 'none'; 
  }
  var loader = document.querySelector('.loader');
  if (loader) {
    loader.style.display = 'none'; 
  }
});


document.addEventListener("visibilitychange", function() {
    if (document.hidden) {
        document.title = " Islands-shop wait for you !";
    } else {
        document.title = "Islands-shop";
    }
});


document.querySelector('.btn_btn-lg').addEventListener('click', function() {
    var inputText = document.querySelector('.custom_input').value.toLowerCase(); // Отримати текст з поля вводу
    var inputElement = document.querySelector('.custom_input');
    if (!inputText.includes('годинник')) { // Перевірити, чи містить текст слово "годинник"
        document.querySelector('.error').style.display = 'block'; // Показати повідомлення про помилку
        inputElement.classList.remove('valid'); // Видалити клас 'valid'
    } else {
        document.querySelector('.error').style.display = 'none'; // Сховати повідомлення про помилку, якщо текст правильний
        inputElement.classList.add('valid'); // Додати клас 'valid'
    }
});

    // Отримуємо елемент бургера
    const burger = document.querySelector('.burger');

    // Функція для перевірки ширини екрана та відображення/приховування бургера
    function checkWidth() {
        if (window.innerWidth < 1600) {
            burger.style.display = 'block'; // Відображаємо бургер
        } else {
            burger.style.display = 'none'; // Ховаємо бургер
        }
    }

    // Викликаємо функцію перевірки ширини екрана при завантаженні сторінки
    checkWidth();

    // Викликаємо функцію перевірки ширини екрана при зміні розміру вікна
    window.addEventListener('resize', checkWidth);


    $(document).ready(function(){
        $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
            $(this).toggleClass('open');
        });
    });