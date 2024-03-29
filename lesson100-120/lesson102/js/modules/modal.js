function modal() {
    
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
    
}

module.exports = modal;