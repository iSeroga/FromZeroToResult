window.addEventListener('DOMContentLoaded', () =>{
        // TAbs
    const tabs = document.querySelectorAll(".tabheader__item"),
          tabsContent = document.querySelectorAll('.tabcontent'),
          tabsParent =  document.querySelector('.tabheader__items');

    
    function hideTabContent(){
        tabsContent.forEach(item => { // Аргумент називати як хочеш Item == pet or closerd
            //  item.style.display = 'none';
            item.classList.add('hide');
            item.classList.remove('show', 'fade');

        });

        tabs.forEach( item=>{
            item.classList.remove('tabheader__item_active');
        });
    }

    function showTabContent(i = 0){
        // tabsContent[i].style.display = "block";
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

        if(target && target.classList.contains('tabheader__item')){
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            })
        }
    });

    // Timer

    const deadline = '2022-10-10';

    function getTimeRemaining(endtime){

        let days, hours, minutes, seconds;
        const t = Date.parse(endtime) - Date.parse(new Date());

        if (t <= 0 ){
            days = 0;
            hours = 0;
            minutes = 0;
            seconds = 0;
        }else{
             days = Math.floor(t / (1000 * 60 * 60 * 24));
              hours = Math.floor((t / (1000 * 60 * 60) % 24));
              minutes = Math.floor((t / 1000 /60 ) % 60);
              seconds = Math.floor((t / 1000  ) % 60);
        }

        


        return{
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function getZero(num){
        if( num >=0 && num < 10){
            return `0${num}`;
        }else{
            return num;
        }
    }

    function setClock(selector, endtime){
        const timer = document.querySelector(selector),
              days = timer.querySelector('#days'),
              hours = timer.querySelector('#hours'),
              minutes = timer.querySelector('#minutes'),
              seconds = timer.querySelector('#seconds'),
              timeInterval = setInterval(updateClock, 1000);
        
        updateClock();

        function updateClock() {
            const t = getTimeRemaining(endtime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0){
                clearInterval(timeInterval);
            }
        }

    }

    setClock('.timer', deadline);

    // modal

    const modalTrigger = document.querySelectorAll('[data-modal]');
    // const modalCloseBtn = document.querySelector('[data-close]');
    const modal = document.querySelector('.modal');
   
    function openModal() {
        modal.classList.add('show');
        modal.classList.remove('hide');
        // modal.classList.toggle("show");
        document.body.style.overflow = 'hidden';
    }; 

    modalTrigger.forEach(btn  => {
        
    function openModal() {
        modal.classList.add('show');
        modal.classList.remove('hide');
        // modal.classList.toggle("show");
        document.body.style.overflow = 'hidden';
        clearInterval(modalTimerId);
    }; 
    
    btn.addEventListener('click', () => {
           openModal();
        });

    });

    

    
    function closeModal() {
        modal.classList.add('hide');
        modal.classList.remove('show');
        // modal.classList.toggle("show");
        document.body.style.overflow = '';
    }

    // modalCloseBtn.addEventListener('click', closeModal)

    modal.addEventListener('click', (e)=>{
        if(e.target === modal || e.target.getAttribute('data-close') ==''){
            closeModal();
    }
    })
    document.addEventListener('keydown', (e)=>{
        if(e.code === 'Escape' && modal.classList.contains('show')){
            closeModal();
        }
    });

// modal update
    // const modalTimerId = setTimeout(openModal, 5000);
    function showModalByScroll(){
            if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight -1){
                openModal();
                window.removeEventListener('scroll', showModalByScroll);
            }
    }
    window.addEventListener('scroll', showModalByScroll);
    
    // Class for new menucards

    class MenuCard {
        constructor(src, alt, title, description, price, parentSelector, ...classes){// Створюємо порядок данний REST operator ...rest
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.description = description;
            this.price = price;
            this.classes = classes; // Mассив
            this.parent = document.querySelector(parentSelector);
            this.transfer = 37;
            this.changeToUAH();
        }

        changeToUAH() { // Конвертатор валюти
            this.price = this.price * this.transfer;
        }

        render(){ // Створюємо блок 
            const element = document.createElement('div');
            console.log(this.classes);
            if (this.classes.length === 0) {
                this.element = 'menu__item';
                element.classList.add(this.element);

            }else{
                
                this.classes.forEach(className => element.classList.add(className));
            }

            
            element.innerHTML = `
                    <img src=${this.src} alt=${this.alt}>
                    <h3 class="menu__item-subtitle">${this.title}</h3>
                    <div class="menu__item-descr">${this.description}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                    </div>
            `;
            this.parent.append(element); // Додаємо в кінець батьківського блоку
        };
    }
    new MenuCard(// Виносимо з класу і заповнюємо інформацією.
        "img/tabs/vegy.jpg",
        "vegy",
        'Меню "Фитнес"',
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        9,
        '.menu .container'
    ).render();

    //Work with server Forms server Xammp

    const forms = document.querySelectorAll('form');

    const message = {
        loading: "img/form/spinner.svg",
        success: "Дякую скоро зв'яжимось",
        failure: " В чомусь проблема..."
    };
    
    forms.forEach(item => {
        postData(item);
    });

    function postData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const statusMessage = document.createElement('img');

            statusMessage.src = message.loading;// set atribute
            statusMessage.style.cssText =`
                display:block;
                margin: 0 auto;
            `;
            //form.append(statusMessage);
            form.insertAdjacentElement('afterend', statusMessage);

            // const request = new XMLHttpRequest(); // in Lesson 87 we "deleted this part" Becouse XMLHttp is older version of new one
            // request.open("POST", 'server.php');

            // here was created fetch element but we were replace itro another place
           

            //request.setRequestHeader("Content-type", "application/json"); //  1 Тип контенту, 2 Заголовок  |  ця строка вже не потрібна
            const formData = new FormData(form);

            const object = {};
            formData.forEach(function(value, key) {
                object[key] = value;
            });

            // const json = JSON.stringify(object);// Stringify Конвертує будьякий звичайний об'єкт в format JSON || В 87 уроці ми його видалили і упростили трохи життя

            //request.send(json); // Відсилаємо тіло форми на сервер| Натомість цієї строки вставляємо Fetch

            // Розбір Fetch
            fetch('server.php',{ // Куди
                method: "POST",// Яким образом
                 headers: {"Content-type": "application/json"},
                // body: formData // Що саме
                body: JSON.stringify(object) // Щоб не створювати нову змінну облегшили собі конвертацію в зрозумілий для нас масив JSON
            })
                .then(data => data.text())
                .then(data => {
                    console.log(data);
                    showThanksModal(message.success);
                    statusMessage.remove();
                }).catch(() => { // бажано використовувати в кожному проєкті для 
                    showThanksModal(message.failure);
                }).finally(() => {
                    form.reset();
                })

            // request.addEventListener('load', () => {
            //     if(request.status === 200){// 200 це позитивний код-відповідь від сервера
            //         console.log(request.response);

            //         showThanksModal(message.success);
            //         form.reset();
            //         statusMessage.remove();

            //     } else{
            //         showThanksModal(message.failure);
            //     }
            // });
        });
    }
     // ТУТ мобілізуємо і віконце зі статусом завантаження.
    function showThanksModal (message) {
        const prevModalDialog = document.querySelector('.modal__dialog');

        prevModalDialog.classList.add('hide');
        openModal();

        const thanksModal = document.createElement('div');
        thanksModal.classList.add('modal__dialog');
        thanksModal.innerHTML = `
                <div class="modal__content">
                    <div clas="modal__close" data-close>×</div>
                    <div class="modal__title">${message}</div>
                </div>
        `;

        document.querySelector('.modal').append(thanksModal);
        setTimeout(() => {
            thanksModal.remove();
            prevModalDialog.classList.add('show');
            prevModalDialog.classList.remove('hide');
            closeModal();
        }, 4000);
    }

    // fetch('https://jsonplaceholder.typicode.com/posts',{
    //     method: "POST",
    //     body: JSON.stringify({name:"ALEX"}),
    //     headers:  {
    //         'Content-type': 'application/json'
    //     }
    // })
    //     .then(responce => responce.json()) // ПОвертаємо Promise 
    //     .then(json => console.log(json)); //  Маємо звичайний об'єкт і використовуємо його в консолі

    fetch('http://localhost:3000/menu')
        .then(data => data.json())
        .then(res => console.log(res));


});