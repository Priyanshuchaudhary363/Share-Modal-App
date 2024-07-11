const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

// openModal function

openModal= () => {
    console.log('modal is open');
    modal.classList.add('active');
    overlay.classList.add('overlayactive');
};

//closeModal function

closeModal= () => {
    console.log('modal is close');
    modal.classList.remove('active');
    overlay.classList.remove('overlayactive');
};