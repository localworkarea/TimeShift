// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

document.addEventListener('DOMContentLoaded', function() {
  const lngBtn = document.querySelector('.lng__btn');
  const lngMenu = document.querySelector('.lng');
  if (lngMenu) {
    if (!isMobile.any()) {
        lngMenu.addEventListener('mouseenter', () => {
            lngMenu.classList.add('_show');
        });
  
        lngMenu.addEventListener('mouseleave', (event) => {
            // Проверяем, что курсор покидает весь блок .lng, а не его дочерние элементы
            if (!lngMenu.contains(event.relatedTarget)) {
                lngMenu.classList.remove('_show');
            }
        });
  
    } else {
        // Если мобильное устройство
        lngBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // Предотвращаем всплытие события клика
            lngMenu.classList.toggle('_show');
        });
  
        document.addEventListener('click', (e) => {
            // Если клик вне блока .lng, убираем класс _show
            if (!lngMenu.contains(e.target)) {
                lngMenu.classList.remove('_show');
            }
        });
    }
  }


  const dateInput = document.getElementById('dateInput');

  // Применяем логику только для устройств Apple
  if (isMobile.iOS()) {
    dateInput.parentElement.classList.add('_ios');
      dateInput.addEventListener('blur', function () {
          if (this.value) {
              this.classList.add('_data');
              this.parentElement.classList.add('_data');
          } else {
              // Если дата не выбрана, убираем класс _data
              this.classList.remove('_data');
              this.parentElement.classList.remove('_data');
          }
      });
  }



});

