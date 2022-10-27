window.addEventListener('DOMContentLoaded', () =>{
        // TAbs
    const tabs = document.querySelectorAll(".tabheader__item"),
          tabsContent = document.querySelectorAll('.tabcontent'),
          tabsParent =  document.querySelector('.tabheader__items');

    
    function hideTabContent(){
        tabsContent.forEach(item => { // Аргумент називати як хочеш Item == pet or closerd

            item.classList.add('hide');
            item.classList.remove('show', 'fade');

        });

        tabs.forEach( item=>{
            item.classList.remove('tabheader__item_active');
        });
    }

    function showTabContent(i = 0){
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
    const modal = document.querySelector('.modal');
   
    function openModal() {
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden';
    }; 

    modalTrigger.forEach(btn  => {
        
    function openModal() {
        modal.classList.add('show');
        modal.classList.remove('hide');
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
        document.body.style.overflow = '';
    }


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

    const getResource = async (url) => {
        const res = await fetch(url);

        if(!res.ok){
           throw new Error(`Could not fetch ${url}, status" ${res.status}`);
        }
           
        return await res.json();
        
    };

    // getResource('http://localhost:3000/menu')
    // .then(data => {
    //     data.forEach(({img, altimg, title, descr, price}) => { //  Натомість obj  Ми звертаємось до {} і наповнюємо його інфою ДЕструктизація
    //         new MenuCard(img,altimg, title, descr, price, '.menu .container').render();
    //     });
    // });

    axios.get('http://localhost:3000/menu')
    .then(data => {
        data.data.forEach(({img, altimg, title, descr, price}) => { //  Натомість obj  Ми звертаємось до {} і наповнюємо його інфою ДЕструктизація
                new MenuCard(img,altimg, title, descr, price, '.menu .container').render();
            });
}       );

    //Work with server Forms server Xammp

    const forms = document.querySelectorAll('form');

    const message = {
        loading: "img/form/spinner.svg",
        success: "Дякую скоро зв'яжимось",
        failure: " В чомусь проблема..."
    };
    
    forms.forEach(item => {
        bindPostData(item);
    });

    const postData = async (url, data) => {
        const res = await fetch(url, {
            method: "POST",// Яким образом
            headers: {"Content-type": "application/json"},
                
            body: data
        });

        return await res.json();
        
    };


    function bindPostData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const statusMessage = document.createElement('img');

            statusMessage.src = message.loading;// set atribute
            statusMessage.style.cssText =`
                display:block;
                margin: 0 auto;
            `;
            
            form.insertAdjacentElement('afterend', statusMessage);

            const formData = new FormData(form);

             const  json = JSON.stringify(Object.fromEntries(formData.entries()));//new way to say the same information that we have below
          
          
            postData('http://localhost:3000/requests', json)
                .then(data => {
                    console.log(data);
                    showThanksModal(message.success);
                    statusMessage.remove();
                }).catch(() => { // бажано використовувати в кожному проєкті для 
                    showThanksModal(message.failure);
                }).finally(() => {
                    form.reset();
                })
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

    fetch('http://localhost:3000/menu')
        .then(data => data.json())
        .then(res => console.log(res));


});