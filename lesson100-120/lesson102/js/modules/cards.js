function cards() {

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
            // console.log(this.classes);
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
    
    axios.get('http://localhost:3000/menu')
    .then(data => {
        data.data.forEach(({img, altimg, title, descr, price}) => { //  Натомість obj  Ми звертаємось до {} і наповнюємо його інфою ДЕструктизація
                new MenuCard(img,altimg, title, descr, price, '.menu .container').render();
            });
}       );
}

module.exports = cards;